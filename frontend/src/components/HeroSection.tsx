import { motion } from "framer-motion"

const HeroSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="flex flex-col items-center text-center py-20 px-4"
  >
    <h2 className="text-4xl font-extrabold mb-4">Learn Anytime, Anywhere</h2>
    <p className="text-lg max-w-xl mb-6">
      A modern LMS platform for students and instructors to manage courses, take quizzes, and track progress.
    </p>
    <motion.a
      href="/signup"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
    >
      Join Now
    </motion.a>
  </motion.section>
)

export default HeroSection
