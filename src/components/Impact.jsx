import { motion } from 'framer-motion';

const Impact = () => {
  const impacts = [
    {
      title: "Accessible Career Advice",
      description: "24/7 availability for students seeking guidance",
      stat: "100%",
      statLabel: "Accessibility"
    },
    {
      title: "Personalized Guidance",
      description: "Tailored advice based on individual profiles",
      stat: "1000+",
      statLabel: "Career Paths"
    },
    {
      title: "Student Success",
      description: "Helping students make informed decisions",
      stat: "95%",
      statLabel: "Satisfaction"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Impact We Bring
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Making a difference in students' lives through innovative career guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl"
            >
              <div className="text-4xl font-bold mb-2">{impact.stat}</div>
              <div className="text-sm text-white/80 mb-4">{impact.statLabel}</div>
              <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
              <p className="text-white/80">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;