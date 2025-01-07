import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const PendulumCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const DoublePendulum = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 3 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Pendulum parameters
    let r1 = 125;
    let r2 = 125;
    let m1 = 10;
    let m2 = 10;
    let a1 = Math.PI / 2;
    let a2 = Math.PI / 2;
    let a1_v = 0;
    let a2_v = 0;
    let g = 0.5; // Reduced gravity for better visual effect

    // Animation function
    const animate = () => {
      console.log('Animating pendulum');

      // Physics calculations
      let num1 = -g * (2 * m1 + m2) * Math.sin(a1);
      let num2 = -m2 * g * Math.sin(a1 - 2 * a2);
      let num3 = -2 * Math.sin(a1 - a2) * m2;
      let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * Math.cos(a1 - a2);
      let den = r1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));
      let a1_a = (num1 + num2 + num3 * num4) / den;

      num1 = 2 * Math.sin(a1 - a2);
      num2 = a1_v * a1_v * r1 * (m1 + m2);
      num3 = g * (m1 + m2) * Math.cos(a1);
      num4 = a2_v * a2_v * r2 * m2 * Math.cos(a1 - a2);
      den = r2 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));
      let a2_a = (num1 * (num2 + num3 + num4)) / den;

      // Update velocities and positions
      a1_v += a1_a;
      a2_v += a2_a;
      a1 += a1_v;
      a2 += a2_v;

      // Apply damping
      a1_v *= 0.999;
      a2_v *= 0.999;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw pendulum
      const x0 = mousePos.current.x;
      const y0 = mousePos.current.y;
      
      const x1 = x0 + r1 * Math.sin(a1);
      const y1 = y0 + r1 * Math.cos(a1);
      
      const x2 = x1 + r2 * Math.sin(a2);
      const y2 = y1 + r2 * Math.cos(a2);

      ctx.beginPath();
      ctx.strokeStyle = '#666';
      ctx.lineWidth = 2;
      
      // Draw rods
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Draw bobs
      ctx.fillStyle = '#888';
      ctx.beginPath();
      ctx.arc(x1, y1, 10, 0, 2 * Math.PI);
      ctx.arc(x2, y2, 10, 0, 2 * Math.PI);
      ctx.fill();

      // Continue animation
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Function to draw pendulum (starts the animation)
    const drawPendulum = () => {
      if (!animationFrameRef.current) { // Only start if not already running
        console.log('Starting pendulum animation');
        animate();
      }
    };

    // Set canvas size
    const setCanvasSize = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      ctx.scale(scale, scale);
      // Redraw on resize
      drawPendulum();
    };

    // Initialize canvas size and start animation
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Add mouse move handler
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY
      };
      console.log(`Mouse moved to: (${e.clientX}, ${e.clientY})`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup on component unmount
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <PendulumCanvas ref={canvasRef} />;
};

export default DoublePendulum;
