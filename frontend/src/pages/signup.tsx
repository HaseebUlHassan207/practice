import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import axios from "axios"
import { Router, useRouter } from "next/router"
import Navbar from "@/components/Navbar"

export default function Signup() {
  const [dark, setDark] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
  })

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/api/auth/signup", form)
      alert(res.data.message)
      setForm({ firstName: "", lastName: "", dob: "", email: "", password: "" })
      router.push("/signin")
    } catch (err: any) {
      alert(err.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {/* Navbar */}
        <Navbar dark={dark} setDark={setDark} />

        {/* Form */}
        <motion.div
          className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-1/2 px-4 py-2 rounded border dark:bg-gray-700"
              />
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-1/2 px-4 py-2 rounded border dark:bg-gray-700"
              />
            </div>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border dark:bg-gray-700"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-2 rounded border dark:bg-gray-700"
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-2 rounded border dark:bg-gray-700"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/signin" className="underline text-blue-500">
              Sign In
            </Link>
          </p>
        </motion.div>
      </main>
    </div>
  )
}
