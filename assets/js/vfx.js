/**
 * WHIMSY COLLECTION - VFX & SPARKLE ENGINE
 * Luxury Particle Generator & Interactive Microinteractions
 */

document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && !navigator.connection?.saveData) {
    initSparkleCanvas();
  }
  initScrollReveal();
});

// Canvas Sparkle Generator
function initSparkleCanvas() {
  const canvas = document.getElementById('sparkleCanvas') || document.getElementById('vfxCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let width, height;
  let particles = [];
  const particleCount = window.matchMedia('(max-width: 760px)').matches ? 12 : 22;

  function resize() {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Sparkle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.5 + 1;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = -Math.random() * 0.4 - 0.1;
      this.alpha = Math.random() * 0.7 + 0.1;
      this.fade = Math.random() * 0.01 + 0.005;
      this.color = Math.random() > 0.4 ? 'rgba(198, 163, 107, ' : 'rgba(231, 156, 165, '; // Champagne Gold or Rose
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha += this.fade;

      if (this.alpha >= 0.85 || this.alpha <= 0.05) {
        this.fade = -this.fade;
      }

      if (this.y < 0 || this.x < 0 || this.x > width) {
        this.reset();
        this.y = height + 10;
      }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color + Math.max(0, this.alpha) + ')';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#C6A36B';
      ctx.fill();

      // Cross starlight rays for larger particles
      if (this.size > 2) {
        ctx.strokeStyle = this.color + (this.alpha * 0.7) + ')';
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(this.x - this.size * 2.5, this.y);
        ctx.lineTo(this.x + this.size * 2.5, this.y);
        ctx.moveTo(this.x, this.y - this.size * 2.5);
        ctx.lineTo(this.x, this.y + this.size * 2.5);
        ctx.stroke();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Sparkle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

// Scroll Reveal Observer
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// Interactive Mouse Move Sparkles
function initMouseSparkles() {
  let throttle = false;
  window.addEventListener('mousemove', (e) => {
    if (throttle) return;
    throttle = true;
    setTimeout(() => { throttle = false; }, 90);

    // Occasional subtle sparkle near cursor
    if (Math.random() > 0.65) {
      createCursorSparkle(e.clientX, e.clientY);
    }
  });
}

function createCursorSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.className = 'starlight-sparkle';
  sparkle.style.left = (x + (Math.random() * 20 - 10)) + 'px';
  sparkle.style.top = (y + (Math.random() * 20 - 10) + window.scrollY) + 'px';
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1200);
}
