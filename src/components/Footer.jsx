import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Created with Passion and Innovation
          </h3>
          <p className="text-gray-400 mb-6">
            Our mission is to guide students towards a fulfilling and successful future
          </p>
          {/*
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-primary transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          */}
          <div className="mt-8 text-gray-400 text-sm">
            © {new Date().getFullYear()} Career Adviser ChatBot. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;