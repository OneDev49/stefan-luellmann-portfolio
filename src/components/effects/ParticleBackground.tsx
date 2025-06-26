"use client";

import { useEffect, useRef } from "react";


const useParticleCanvas = (
    canvasRef: React.RefObject<HTMLCanvasElement | null>,
    particleCount: number
) => {
    useEffect(() => {
        // --- Holen des Canvas-Elements ---
        const canvas = canvasRef.current;
        if(!canvas) return; // Wenn kein Canvas da ist, tue nichts
        const ctx = canvas.getContext('2d');
        if(!ctx) return;


        // --- Deine Logik hier ---
        let allParticles: Particle[] = [];
        let animationFrameID: number;


        // --- Particle Class (1:1 von dir übernommen) ---
        class Particle {
            canvasWidth: number;
            canvasHeight: number;
            size: number;
            opacity: number;
            color: string;
            x: number;
            y: number;
            velX: number;
            velY: number;
            
            constructor(canvasWidth: number, canvasHeight: number) {
                this.canvasWidth = canvasWidth;
                this.canvasHeight = canvasHeight;

                // --- Appearance ---
                // Original size was Math.random() * 8 + 2
                this.size = Math.random() * 3 + 2; // Size in pixels
                this.opacity = Math.random() * 0.4 + 0.2; // Opacity range 0.2 to 0.8
                // Pre-calculate color string for efficiency. Light grey-blue, adjust as needed.
                this.color = `rgba(180, 190, 210, ${this.opacity})`;

                // --- Position (pixels) ---
                this.x = Math.random() * this.canvasWidth;
                this.y = Math.random() * this.canvasHeight;

                // --- Velocity (pixels per second) ---
                // To match original '%' based speed characteristics relative to container size:
                // Original base vertical speed was (Math.random() * 1.5 + 0.5) * -1; (% per sec) -> -0.5 to -2.0 %/sec
                // Original effective speed factor was (100/60)
                const baseVerticalSpeedPercent = (Math.random() * 1.5 + 0.5) * -1;
                this.velY = (baseVerticalSpeedPercent / 100) * this.canvasHeight * (100 / 60);

                // Original base horizontal speed was (Math.random() - 0.5) * 1; (% per sec) -> -0.5 to +0.5 %/sec
                const baseHorizontalSpeedPercent = (Math.random() - 0.5) * 1;
                this.velX = (baseHorizontalSpeedPercent / 100) * this.canvasWidth * (100 / 60);
            }

            update(deltaTime: number) {
                // Update position
                this.y += this.velY * deltaTime;
                this.x += this.velX * deltaTime;

                // --- Boundary Check and Reset ---
                // Vertical reset: If particle goes above the top edge
                if (this.velY < 0 && this.y < -this.size) { // Moving up and fully off screen
                    this.y = this.canvasHeight + this.size;   // Reset below the bottom edge
                    this.x = Math.random() * this.canvasWidth; // Reset horizontal position randomly
                    // Optional: Reset horizontal velocity for more variety upon reset
                    // const baseHorizontalSpeedPercent = (Math.random() - 0.5) * 1;
                    // this.velX = (baseHorizontalSpeedPercent / 100) * this.canvasWidth * (100 / 60);
                }
                // (Add similar check for this.velY > 0 if particles can move downwards off screen)

                // Horizontal wrap-around:
                // If particle goes off the right edge
                if (this.velX > 0 && this.x > this.canvasWidth + this.size) {
                    this.x = -this.size; // Wrap to the left side
                }
                // If particle goes off the left edge
                else if (this.velX < 0 && this.x < -this.size) {
                    this.x = this.canvasWidth + this.size; // Wrap to the right side
                }
            }

            draw(context: CanvasRenderingContext2D) {
                context.fillStyle = this.color;
                context.beginPath();
                // Draw particles as circles
                context.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2); // Use size for diameter
                context.fill();
            }
        }


        // -- Setup und Resize Function
        const resizeCanvasAndCreateParticles = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            allParticles = [];
            const count = particleCount;

            if(canvas.width > 0 && canvas.height > 0) {
                for (let i = 0; i < count; i++) {
                    allParticles.push(new Particle(canvas.width, canvas.height));
                }
            }
        };


        // Main Animation Loop
        let lastTimestamp = 0;
        const animationLoop = (timestamp: number) => {
            if (lastTimestamp === 0) lastTimestamp = timestamp;
            const deltaTime = (timestamp - lastTimestamp) / 1000;
            lastTimestamp = timestamp;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            allParticles.forEach(particle => {
                particle.update(deltaTime);
                particle.draw(ctx);
            });

            animationFrameID = requestAnimationFrame(animationLoop);
        };

        // Start der Logik
        resizeCanvasAndCreateParticles();
        animationFrameID = requestAnimationFrame(animationLoop);


        // Event Listener für Resize
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeCanvasAndCreateParticles, 250);
        }
        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameID);
        };
    }), [canvasRef, particleCount];
};


// Die eigentliche React-Komponente
interface ParticleBackgroundProps {
    particleCount?: number;
}



export default function ParticleBackground({ particleCount = 150 }: ParticleBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);


    useParticleCanvas(canvasRef, particleCount);


    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
}