import { useEffect } from 'react';
import styles from '../styles/ParticleBackground.module.css';

const ParticleBackground = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = styles.particle;
      
      // Random positions and animations
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationDuration = `${10 + Math.random() * 10}s`;
      
      particlesContainer.appendChild(particle);
    }
  }, []);

  return <div id="particles-container" className={styles.particleContainer} />;
};

export default ParticleBackground; 