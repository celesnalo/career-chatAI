import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaGraduationCap, FaLightbulb } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "AI-Powered Guidance",
      description: "Get real-time, personalized career advice through our advanced AI system"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Career Insights",
      description: "Access detailed industry trends and job market analysis"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Educational Pathways",
      description: "Discover the right educational path for your dream career"
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Personalized Recommendations",
      description: "Receive tailored suggestions based on your interests and skills"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Career Adviser
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering students with intelligent career guidance and personalized support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;