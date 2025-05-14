"use client";
import { useEffect, useRef } from 'react';

export default function DigitalRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas to full screen
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Characters for the rain (only 0 and 1 for binary effect)
        const binaryChars = ['0', '1'];

        // Configure rain
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops: number[] = [];

        // Initialize drop position for each column
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -100); // Random starting position above viewport
        }

        // Draw the digital rain
        const draw = () => {
            // Semi-transparent black to create fade effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Set text style
            ctx.fillStyle = '#0f0'; // Matrix green
            ctx.font = `${fontSize}px monospace`;

            // Draw characters
            for (let i = 0; i < drops.length; i++) {
                // Select random character from binary array
                const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];

                // Vary opacity for depth effect
                const opacity = Math.random() * 0.5 + 0.3; // Between 0.3 and 0.8
                const color = `rgba(0, 255, 170, ${opacity})`; // Cyan with varied opacity
                ctx.fillStyle = color;

                // Draw text
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop position if it's at the bottom of canvas or randomly
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move drop down
                drops[i]++;
            }
        };

        // Animation loop
        const interval = setInterval(draw, 50);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-25"
            aria-hidden="true"
        />
    );
} 