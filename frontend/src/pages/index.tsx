import Footer from "@/components/Footer"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { scrollFade } from "@/utils/scrollReaveal"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import RolesSection from "@/components/RolesSection"

export default function Home() {
  const [dark, setDark] = useState(false)
  const [testimonialsRef, inViewTestimonials] = useInView({ triggerOnce: true });
  const [footerRef, inViewFooter] = useInView({ triggerOnce: true })

  return (
    <div className={dark ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
        {/* Navbar */}
        <Navbar dark={dark} setDark={setDark} />

        {/* Hero Section */}
        <HeroSection />

        {/* Roles Section */}
        <RolesSection />

        {/* Testimonials */}
        <motion.section
          ref={testimonialsRef}
          variants={scrollFade}
          initial="hidden"
          animate={inViewTestimonials ? "visible" : "hidden"}
          className="py-16 px-4 bg-white dark:bg-gray-900"
        >
          <h3 className="text-2xl font-bold text-center mb-10">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div className="p-6 border rounded bg-gray-50 dark:bg-gray-800">
              <p>"EduVerse made it so easy to launch my own course and manage students. Fantastic!"</p>
              <p className="mt-2 text-sm font-semibold">– Sarah, Instructor</p>
            </motion.div>
            <motion.div className="p-6 border rounded bg-gray-50 dark:bg-gray-800">
              <p>"Learning is fun and structured now. I love tracking my progress on the dashboard!"</p>
              <p className="mt-2 text-sm font-semibold">– Ali, Student</p>
            </motion.div>
          </div>
        </motion.section>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md"
        >
          ↑ Top
        </button>


        {/* Footer */}
        <motion.div
          ref={footerRef}
          variants={scrollFade}
          initial="hidden"
          animate={inViewFooter ? "visible" : "hidden"}
        >
          <Footer />
        </motion.div>

      </main>
    </div>
  )
}
