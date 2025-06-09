import { motion } from "framer-motion"

const RolesSection = () => (
  <section className="py-16 bg-gray-50 dark:bg-gray-800 px-4">
    <motion.h3
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-2xl font-bold text-center mb-10"
    >
      Explore Roles
    </motion.h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {[
        {
          title: "👨‍🏫 Instructor",
          description: "Create and manage courses, quizzes, assignments, and track student performance.",
        },
        {
          title: "🎓 Student",
          description: "Enroll in courses, take quizzes, earn certificates, and track your learning journey.",
        },
      ].map((role, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="p-6 bg-white dark:bg-gray-700 rounded shadow"
        >
          <h4 className="text-xl font-semibold mb-2">{role.title}</h4>
          <p>{role.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

export default RolesSection
