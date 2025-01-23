import React, { useState, useEffect } from 'react';
import { 
  FaBriefcase, FaUserGraduate, FaLaptopCode, FaFlask, 
  FaMicroscope, FaCalculator, FaPalette, FaStethoscope,
  FaChartLine, FaRocket, FaMedal, FaCrown, 
  FaHandshake, FaBuilding, FaTree, FaLightbulb, FaUserCog 
} from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const generateRandomPath = () => keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
  }
  66% {
    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
  }
`;

const IconOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
`;

const IconWrapper = styled.div`
  position: absolute;
  font-size: ${props => props.$size}rem;
  color: rgba(255, 255, 255, ${props => props.$opacity});
  cursor: pointer;
  pointer-events: auto;
  transition: color 0.3s ease, transform 0.3s ease;
  animation: ${props => props.$randomPath} ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;
  left: ${props => props.$startX}vw;
  top: ${props => props.$startY}vh;

  &:hover {
    color: #00ff88;
    transform: scale(1.2);
    animation-play-state: paused;
  }
`;

const icons = [
  FaBriefcase, FaUserGraduate, FaLaptopCode, FaFlask, 
  FaMicroscope, FaCalculator, FaPalette, FaStethoscope,
  FaChartLine, FaRocket, FaMedal, FaCrown, 
  FaHandshake, FaBuilding, FaTree, FaLightbulb, FaUserCog
];

const FloatingIcons = () => {
  const [iconPositions, setIconPositions] = useState([]);

  useEffect(() => {
    const generateUniquePositions = () => {
      const positions = [];
      const minDistance = 15; // Minimum distance between icons
      const padding = 10; // Padding from viewport edges

      while (positions.length < icons.length) {
        const x = Math.random() * (100 - 2 * padding) + padding;
        const y = Math.random() * (100 - 2 * padding) + padding;
        
        // Check distance from all existing positions
        const isUnique = !positions.some(
          (pos) => Math.hypot(pos.x - x, pos.y - y) < minDistance
        );

        if (isUnique) {
          // Add random properties for each icon
          positions.push({
            x,
            y,
            size: Math.random() * (2.5 - 1.5) + 1.5, // Random size between 1.5 and 2.5rem
            opacity: 0.15,
            duration: Math.random() * (40 - 20) + 20, // Random duration between 20 and 40s
            delay: Math.random() * -20 // Random start delay
          });
        }
      }
      return positions;
    };

    setIconPositions(generateUniquePositions());
  }, []);

  return (
    <IconOverlay>
      {icons.map((Icon, index) => (
        <IconWrapper 
          key={index}
          $randomPath={generateRandomPath()}
          $startX={iconPositions[index]?.x || 0}
          $startY={iconPositions[index]?.y || 0}
          $size={iconPositions[index]?.size || 4}
          $opacity={iconPositions[index]?.opacity || 0}
          $duration={iconPositions[index]?.duration || 15}
          $delay={iconPositions[index]?.delay || 0}
        >
          <Icon />
        </IconWrapper>
      ))}
    </IconOverlay>
  );
};

export default FloatingIcons;