import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';
import snalo from '../assets/mthobisi.jfif';
import thabo from '../assets/thabo.jpg';
import cebo from '../assets/cebo.png';
const Team = () => {
  const team = [
    {
      name: "Cebolenkosi",
      role: "Software Developer",
      image: cebo,
      social: {
        github: "https://github.com/cebomsweli",
        linkedin: "https://linkedin.com/in/cebolenkosi-msweli-a02033253",
        email: "mailto:cebomsweli250@gmail.com",
        portfolio: "https://cebomsweli.github.io/PortFolio/Profile.html"
      }
    },
    {
      name: "Thabo Mthethwa",
      role: "Software Developer",
      image: thabo,
      social: {
        github: "https://github.com/ThaboSYLN",
        linkedin: "https://www.linkedin.com/in/thabo-mthethwa-9205b12b4",
        email: "mailto:thabospenser@gmail.com",
        //portfolio: "" no-portfolio yet
      }
    },
    {
      name: "Mthobisi Snalo Cele",
      role: "Software Developer",
      image: snalo,
      social: {
        github: "https://github.com/celesnalo",
        linkedin: "https://linkedin.com/in/celesnalo",
        email: "mailto:celersnalor0119@gmail.com",
        portfolio: "https://snals-portfolio.web.app"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet the Creators
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The talented team behind the Career Adviser ChatBot
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Curved Background */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#3F5EFB] to-[#AD46FC] rounded-t-3xl">
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-[#AD46FC]/30" />
              </div>

              {/* Profile Content */}
              <div className="relative pt-16 px-6 pb-6 text-center">
                {/* Profile Image */}
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-teal-200 rounded-full transform -translate-y-1"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{member.role}</p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      {platform === 'github' && <FaGithub size={18} />}
                      {platform === 'linkedin' && <FaLinkedin size={18} />}
                      {platform === 'email' && <FaEnvelope size={18} />}
                      {platform === 'portfolio' && <FaGlobe size={18} />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;