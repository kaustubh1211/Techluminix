import React, { useState, useEffect, useRef } from 'react';

const TechLuminixLoader = () => {
  const [isGlitching, setIsGlitching] = useState(true); // Start in glitching state
  const [glitchIntensity, setGlitchIntensity] = useState(0.5); // Start with medium intensity
  const [isOn, setIsOn] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const logoRef = useRef(null);
  const requestRef = useRef(null);
  const glitchTimeoutRef = useRef(null);
  
  // Smoother glitch animation using requestAnimationFrame
  const animateGlitch = (timestamp) => {
    if (!isGlitching) return;
    
    // Calculate glitch effect values based on timestamp for smoother transitions
    const flickerValue = Math.sin(timestamp * 0.03) * 0.5 + 0.5;
    const rotationAngle = Math.sin(timestamp * 0.01) * 3 * glitchIntensity;
    const translateX = Math.sin(timestamp * 0.02) * 6 * glitchIntensity;
    const translateY = Math.cos(timestamp * 0.02) * 6 * glitchIntensity;
    const scaleAmount = 1 + Math.sin(timestamp * 0.01) * 0.05 * glitchIntensity;
    
    // Apply the glitch effect to the logo if it exists
    if (logoRef.current) {
      logoRef.current.style.transform = `scale(${scaleAmount}) translate(${translateX}px, ${translateY}px) rotate(${rotationAngle}deg)`;
      logoRef.current.style.opacity = isOn ? 0.8 + (flickerValue * 0.2) : 0.6;
    }
    
    // Continue the animation loop
    requestRef.current = requestAnimationFrame(animateGlitch);
  };
  
  // Glitch effect timing with smoother transitions and immediate start
  useEffect(() => {
    const triggerGlitch = () => {
      // Start a glitch sequence
      setIsGlitching(true);
      
      // Rapidly increase glitch intensity for immediate effect
      let intensity = 0;
      const intensityInterval = setInterval(() => {
        intensity += 0.2; // Faster intensity increase
        if (intensity > 1) {
          clearInterval(intensityInterval);
        }
        setGlitchIntensity(intensity);
      }, 10); // Faster interval
      
      // Random duration for the glitch
      const glitchDuration = Math.random() * 400 + 200;
      
      // Clear any existing timeout
      if (glitchTimeoutRef.current) {
        clearTimeout(glitchTimeoutRef.current);
      }
      
      // Set timeout to end the glitch
      glitchTimeoutRef.current = setTimeout(() => {
        // Gradually decrease glitch intensity for smoother end
        let fadeOutIntensity = 1;
        const fadeOutInterval = setInterval(() => {
          fadeOutIntensity -= 0.1;
          if (fadeOutIntensity <= 0) {
            clearInterval(fadeOutInterval);
            setIsGlitching(false);
            setGlitchIntensity(0);
            
            // Reset transform when glitch ends
            if (logoRef.current) {
              logoRef.current.style.transform = 'scale(1) translate(0px, 0px) rotate(0deg)';
              logoRef.current.style.opacity = 1;
            }
          }
          setGlitchIntensity(fadeOutIntensity);
        }, 20);
        
      }, glitchDuration);
      
      // Random flicker of the logo
      if (Math.random() > 0.7) {
        setIsOn(false);
        setTimeout(() => {
          setIsOn(true);
        }, glitchDuration * 0.6);
      }
    };
    
    // Trigger glitch immediately on component mount
    triggerGlitch();
    
    // Schedule subsequent glitches
    const glitchInterval = setInterval(() => {
      triggerGlitch();
    }, 1500 + Math.random() * 1000); // More frequent glitches (1.5-2.5 seconds)
    
    return () => {
      clearInterval(glitchInterval);
      if (glitchTimeoutRef.current) {
        clearTimeout(glitchTimeoutRef.current);
      }
    };
  }, []);
  
  // Setup and cleanup animation frame
  useEffect(() => {
    if (isGlitching) {
      requestRef.current = requestAnimationFrame(animateGlitch);
    } else if (logoRef.current) {
      // Reset transform when not glitching
      logoRef.current.style.transform = 'scale(1) translate(0px, 0px) rotate(0deg)';
      logoRef.current.style.opacity = 1;
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    }
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isGlitching]);
  
  // CSS Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    overflow: 'hidden',
    position: 'relative',
    width: '300px',
    height: '300px',
  };
  
  const logoTextStyle = {
    fontFamily: 'monospace',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '1.5rem',
    color: '#111827',
    letterSpacing: '0.05em',
    position: 'relative',
    textShadow: isGlitching ? `${Math.sin(Date.now() * 0.01) * 2 * glitchIntensity}px ${Math.cos(Date.now() * 0.01) * 2 * glitchIntensity}px #00f, ${-Math.sin(Date.now() * 0.01) * 2 * glitchIntensity}px ${-Math.cos(Date.now() * 0.01) * 2 * glitchIntensity}px #f00` : 'none',
    transform: isGlitching ? `translate(${Math.sin(Date.now() * 0.03) * 3 * glitchIntensity}px, ${Math.cos(Date.now() * 0.03) * 2 * glitchIntensity}px)` : 'none',
    transition: 'text-shadow 0.1s ease-out, transform 0.1s ease-out',
  };
  
  const logoContainerStyle = {
    position: 'relative',
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };
  
  const glitchOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 255, 255, 0.1)',
    mixBlendMode: 'overlay',
    opacity: isGlitching ? 0.3 * glitchIntensity : 0,
    pointerEvents: 'none',
    zIndex: 5,
    transition: 'opacity 0.2s ease-out',
    transform: isGlitching ? `translateX(${Math.sin(Date.now() * 0.004) * 5 * glitchIntensity}px)` : 'none',
  };
  
  // Random horizontal scan lines when glitching - now animated
  const scanLineStyle = {
    position: 'absolute',
    height: '2px',
    width: '100%',
    background: 'rgba(0, 128, 255, 0.6)',
    opacity: isGlitching ? 0.7 * glitchIntensity : 0,
    left: 0,
    top: `${Math.sin(Date.now() * 0.002) * 50 + 50}%`,
    zIndex: 6,
    boxShadow: '0 0 8px rgba(0, 128, 255, 0.8)',
    transition: 'opacity 0.2s ease-out',
  };
  
  // Additional scan line for more effect
  const scanLine2Style = {
    position: 'absolute',
    height: '1px',
    width: '100%',
    background: 'rgba(255, 0, 128, 0.6)',
    opacity: isGlitching ? 0.5 * glitchIntensity : 0,
    left: 0,
    top: `${Math.cos(Date.now() * 0.003) * 50 + 50}%`,
    zIndex: 6,
    boxShadow: '0 0 8px rgba(255, 0, 128, 0.8)',
    transition: 'opacity 0.2s ease-out',
  };
  
  // Loading progress bar at bottom
  const progressBarContainerStyle = {
    width: '80%',
    height: '4px',
    background: '#e5e7eb',
    borderRadius: '2px',
    overflow: 'hidden',
    marginTop: '2rem',
  };
  
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          return 100;
        }
        // Smoother progress that slows down slightly during glitches but doesn't completely stop
        return prev + (isGlitching ? 0.2 : 1); 
      });
    }, 50);
    
    return () => clearInterval(loadingInterval);
  }, [isGlitching]);
  
  const progressBarStyle = {
    height: '100%',
    width: `${progress}%`,
    background: 'linear-gradient(90deg, #0ea5e9, #10b981)',
    transition: 'width 0.2s ease-out',
  };
  
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div style={containerStyle}>
        <div style={scanLineStyle} />
        <div style={scanLine2Style} />
        <div style={glitchOverlayStyle} />
        
        <div style={logoContainerStyle}>
          {/* Main logo container */}
          <div 
            ref={logoRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              position: 'relative',
              transition: isGlitching ? 'none' : 'transform 0.5s ease-out, opacity 0.5s ease-out',
            }}
          >
            {/* Glow effect behind logo */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: isOn ? 'radial-gradient(circle, rgba(0, 128, 255, 0.4) 0%, rgba(0, 128, 255, 0.1) 70%)' : 'none',
                filter: 'blur(10px)',
                opacity: isGlitching ? (0.5 + Math.sin(Date.now() * 0.01) * 0.3) * glitchIntensity : 1,
                zIndex: 1,
                transition: isGlitching ? 'none' : 'opacity 0.5s ease-out',
              }}
            />
            
            {/* Logo image with glitch effects */}
            <img 
              src="assets/logo.png"
              alt="TechLuminix Logo"
              onLoad={() => setLogoLoaded(true)}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                filter: isOn ? `drop-shadow(0 0 10px rgba(0, 128, 255, ${0.4 + Math.sin(Date.now() * 0.005) * 0.2 * glitchIntensity}))` : 'brightness(0.7)',
                position: 'relative',
                zIndex: 2,
                transition: isGlitching ? 'none' : 'filter 0.5s ease-out',
              }}
            />
            
            {/* Color shift overlay during glitch - now with animated positions */}
            {isGlitching && (
              <>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255, 0, 0, 0.2)',
                  mixBlendMode: 'color-dodge',
                  transform: `translateX(${Math.sin(Date.now() * 0.005) * 8 * glitchIntensity}px)`,
                  opacity: glitchIntensity * 0.7,
                  zIndex: 3,
                  transition: isGlitching ? 'none' : 'transform 0.2s ease-out, opacity 0.2s ease-out',
                }} />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0, 255, 255, 0.2)',
                  mixBlendMode: 'color-dodge',
                  transform: `translateX(${Math.sin(Date.now() * 0.005 + 3.14) * 8 * glitchIntensity}px)`,
                  opacity: glitchIntensity * 0.7,
                  zIndex: 4,
                  transition: isGlitching ? 'none' : 'transform 0.2s ease-out, opacity 0.2s ease-out',
                }} />
                
                {/* Add vertical slice glitches during intense glitches */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div 
                    key={i}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: `${33 * i}%`,
                      width: '2px',
                      height: '100%',
                      background: i % 2 === 0 ? 'rgba(0, 255, 255, 0.8)' : 'rgba(255, 0, 0, 0.8)',
                      opacity: Math.random() > 0.7 ? glitchIntensity : 0,
                      zIndex: 7,
                      transform: `translateX(${Math.sin(Date.now() * 0.01 * (i + 1)) * 10 * glitchIntensity}px)`,
                    }}
                  />
                ))}
              </>
            )}
            
            {/* Digital distortion effect */}
            {isGlitching && glitchIntensity > 0.7 && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `repeating-linear-gradient(
                  ${Math.sin(Date.now() * 0.001) * 90}deg,
                  rgba(0, 0, 0, 0) 0px,
                  rgba(0, 0, 0, 0) ${2 + Math.sin(Date.now() * 0.01) * 2}px,
                  rgba(0, 128, 255, 0.3) ${2 + Math.sin(Date.now() * 0.01) * 2}px,
                  rgba(0, 128, 255, 0.3) ${4 + Math.sin(Date.now() * 0.01) * 2}px
                )`,
                mixBlendMode: 'overlay',
                opacity: (Math.sin(Date.now() * 0.01) * 0.5 + 0.5) * 0.5 * glitchIntensity,
                zIndex: 5,
              }} />
            )}
          </div>
        </div>
        
        {/* Company name with animated glitch effect */}
        <div style={logoTextStyle}>
          TechLuminix<span style={{
            color: isOn ? '#0066cc' : '#64748b',
            opacity: isGlitching ? (Math.sin(Date.now() * 0.01) > -0.3 ? 1 : 0) * glitchIntensity : 1,
            transition: isGlitching ? 'none' : 'opacity 0.5s ease-out, color 0.5s ease-out',
          }}>_</span>
        </div>
        
        <div style={progressBarContainerStyle}>
          <div style={progressBarStyle} />
        </div>
        
        <div style={{
          fontSize: '0.875rem',
          color: '#64748b',
          marginTop: '0.5rem',
          fontFamily: 'monospace',
          opacity: isGlitching ? ((Math.sin(Date.now() * 0.01) > -0.3) ? 1 : 0.5) * glitchIntensity : 1,
          transform: isGlitching ? `translateX(${Math.sin(Date.now() * 0.01) * 4 * glitchIntensity}px)` : 'none',
          transition: isGlitching ? 'none' : 'transform 0.5s ease-out, opacity 0.5s ease-out',
        }}>
          {isGlitching && Math.random() > 0.7 ? 'ERR0R' : `Loading: ${Math.floor(progress)}%`}
        </div>
      </div>
    </div>
  );
};

export default TechLuminixLoader;