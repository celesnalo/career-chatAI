import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import BackgroundParticles from './BackgroundParticles';
import FloatingIcons from './FloatingIcons';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
      {/* Three.js Canvas Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <BackgroundParticles />
        </Canvas>
      </div>

      {/* Floating Icons Overlay */}
      <FloatingIcons />

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
            Career Adviser ChatBot
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-body">
            Your personalized career guidance assistant for South African students, Grades 10-12.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => window.location.href = "https://ctbotadvisor.streamlit.app/"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-primary rounded-full font-semibold text-lg shadow-lg font-body"
            >
              Start Chatting Now
            </motion.button>
            {/*
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg font-body"
            >
              Learn More
            </motion.button>*/}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;