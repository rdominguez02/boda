// Wedding Animations JavaScript
window.weddingAnimations = {
    confettiCanvas: null,
    confettiCtx: null,
    confettiParticles: [],
    flowers: [],
    animationFrame: null,
    isInitialized: false
};

// Initialize wedding animations
window.initWeddingAnimations = function() {
    if (window.weddingAnimations.isInitialized) return;
    
    window.weddingAnimations.isInitialized = true;
    
    // Initialize confetti
    initConfetti();
    
    // Initialize floating flowers
    initFloatingFlowers();
    
    // Trigger confetti on page load
    setTimeout(() => {
        triggerConfetti();
    }, 1000);
};

// Confetti System
function initConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    
    window.weddingAnimations.confettiCanvas = canvas;
    window.weddingAnimations.confettiCtx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create confetti particles
    createConfettiParticles();
    
    // Start animation
    animateConfetti();
}

function createConfettiParticles() {
    const colors = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'];
    const particleCount = 150;
    
    for (let i = 0; i < particleCount; i++) {
        window.weddingAnimations.confettiParticles.push({
            x: Math.random() * window.innerWidth,
            y: -Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 2,
            vy: Math.random() * 3 + 2,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            shape: Math.random() > 0.5 ? 'circle' : 'square'
        });
    }
}

function animateConfetti() {
    const ctx = window.weddingAnimations.confettiCtx;
    const canvas = window.weddingAnimations.confettiCanvas;
    const particles = window.weddingAnimations.confettiParticles;
    
    if (!ctx || !canvas) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        
        // Reset if off screen
        if (particle.y > canvas.height) {
            particle.y = -10;
            particle.x = Math.random() * canvas.width;
        }
        if (particle.x < 0 || particle.x > canvas.width) {
            particle.vx *= -1;
        }
        
        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation * Math.PI / 180);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.7;
        
        if (particle.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        }
        
        ctx.restore();
    });
    
    window.weddingAnimations.animationFrame = requestAnimationFrame(animateConfetti);
}

function triggerConfetti() {
    // Add burst of confetti
    const colors = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'];
    const burstCount = 50;
    
    for (let i = 0; i < burstCount; i++) {
        window.weddingAnimations.confettiParticles.push({
            x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
            y: window.innerHeight / 2 + (Math.random() - 0.5) * 200,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8 - 2,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 15,
            shape: Math.random() > 0.5 ? 'circle' : 'square'
        });
    }
}

// Floating Flowers
function initFloatingFlowers() {
    const container = document.getElementById('flowers-container');
    if (!container) return;
    
    const flowerCount = 15;
    const flowerEmojis = ['🌸', '💙', '✨', '🌺'];
    
    for (let i = 0; i < flowerCount; i++) {
        createFlower(container, flowerEmojis);
    }
}

function createFlower(container, emojis) {
    const flower = document.createElement('div');
    flower.className = 'floating-flower';
    flower.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    flower.style.left = Math.random() * 100 + '%';
    flower.style.animationDuration = (Math.random() * 10 + 10) + 's';
    flower.style.animationDelay = Math.random() * 5 + 's';
    flower.style.opacity = Math.random() * 0.5 + 0.3;
    flower.style.fontSize = (Math.random() * 20 + 15) + 'px';
    
    container.appendChild(flower);
    
    // Remove and recreate after animation
    setTimeout(() => {
        if (flower.parentNode) {
            flower.parentNode.removeChild(flower);
            createFlower(container, emojis);
        }
    }, 20000);
}

// Music Controls
window.playWeddingMusic = function() {
    const audio = document.getElementById('wedding-music');
    if (audio) {
        audio.play().catch(error => {
            console.log('Audio play failed:', error);
            // Auto-play was prevented, user interaction required
        });
    }
};

window.pauseWeddingMusic = function() {
    const audio = document.getElementById('wedding-music');
    if (audio) {
        audio.pause();
    }
};

// Add CSS for floating flowers
const style = document.createElement('style');
style.textContent = `
    .floating-flower {
        position: absolute;
        pointer-events: none;
        animation: floatDown linear infinite;
        z-index: 1;
    }
    
    @keyframes floatDown {
        0% {
            transform: translateY(-100px) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) translateX(50px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

