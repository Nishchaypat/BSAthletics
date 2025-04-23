import React, { useEffect } from 'react';

const BSLogoAnimation = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      const particleCount = 40;
      particlesContainer.innerHTML = '';
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const x = Math.random() * 300 - 150;
        const y = Math.random() * 300 - 150;
        const tx = (Math.random() - 0.5) * 400;
        const ty = (Math.random() - 0.5) * 400;
        const delay = Math.random() * 6;
        particle.style.left = `${150 + x}px`;
        particle.style.top = `${150 + y}px`;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.animationDelay = `${delay}s`;
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <div className="bs-logo-animation">
      <div className="logo-container">
        <div className="glow"></div>
        <div className="bs-logo">
          {/* front face */}
          <div className="bs-text front">BS</div>
          {/* back face */}
          <div className="bs-text back">BS</div>
        </div>
        <div className="particles" id="particles"></div>
      </div>
      
      <style jsx>{`
        .bs-logo-animation {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .logo-container {
          position: relative;
          width: 300px;
          height: 300px;
          /* stronger perspective */
          perspective: 2000px;
        }
        
        .bs-logo {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          /* tilt more on X for depth */
          animation: rotate 8s infinite cubic-bezier(0.4, 0.0, 0.6, 1.0);
          transform-origin: center center;
        }
        
        @keyframes rotate {
          0% {
            transform: rotateY(0deg) rotateX(25deg) scale3d(1,1,1);
          }
          100% {
            transform: rotateY(360deg) rotateX(25deg) scale3d(1,1,1);
          }
        }
        
        .bs-text {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Arial', sans-serif;
          font-size: 150px;
          font-weight: bold;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 
            0 0 20px rgba(25, 116, 253, 0.8),
            0 0 40px rgba(25, 116, 253, 0.4);
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.6));
          
          backface-visibility: hidden;
          /* push out and bulge along Z */
          transform: translateZ(80px) scale3d(1, 1, 1.1);
        }
        
        /* the “back” always reads BS */
        .bs-text.back {
          transform: rotateY(180deg) translateZ(80px) scale3d(1, 1, 1.1);
        }
        
        .glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(59, 130, 246, 0.6) 0%,
            rgba(37, 99, 235, 0.3) 30%,
            rgba(30, 58, 138, 0) 70%
          );
          animation: pulse 4s infinite alternate;
        }
        
        @keyframes pulse {
          0% {
            opacity: 0.4;
            transform: scale(0.8);
          }
          100% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: float 6s infinite linear;
        }
        
        @keyframes float {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BSLogoAnimation;
