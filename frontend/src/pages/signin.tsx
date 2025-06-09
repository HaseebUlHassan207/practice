import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import axios from "axios"
import Navbar from "@/components/Navbar"

export default function Signin() {
  const [dark, setDark] = useState(false)
  const [form, setForm] = useState({ email: "", password: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/api/auth/signin", form)
      alert(res.data.message)
      setForm({ email: "", password: "" })
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
          className="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Sign In to Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              Sign In
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link href="/signup" className="underline text-blue-500">
              Create One
            </Link>
          </p>
        </motion.div>
      </main>
    </div>
  )
}
