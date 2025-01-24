import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = React.forwardRef((props, ref) => {
  const highlights = [
    {
      icon: <FaRobot className="w-8 h-8 text-primary" />,
      title: "AI-Powered Solution",
      description: "Our ChatBot leverages advanced AI technology to provide accurate and personalized career guidance."
    },
    {
      icon: <FaUsers className="w-8 h-8 text-primary" />,
      title: "Student-Focused",
      description: "Designed specifically for students and youth, helping them navigate their career choices effectively."
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-primary" />,
      title: "Informed Decisions",
      description: "Empowering students with the knowledge and insights they need to make well-informed career choices."
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Career Adviser ChatBot
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We created this ChatBot with the aim of providing young individuals, especially students in schools, 
            with personalized career advice and insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/5 p-8 rounded-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where every student has access to quality career guidance, 
              breaking down barriers to career development and enabling informed decision-making. 
              Through our AI-powered platform, we're making professional career advice accessible 
              to students everywhere, helping them build the future they dream of.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;