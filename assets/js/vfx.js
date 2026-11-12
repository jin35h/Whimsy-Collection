/**
 * WHIMSY COLLECTION - VFX & SPARKLE ENGINE
 * Customer-Focusing Micro-interactions & Particle Generator
 */

document.addEventListener('DOMContentLoaded', () => {
  initSparkleCanvas();
  initScrollReveal();
  initWhatsAppInquiryModal();
});

// Canvas Sparkle Generator
function initSparkleCanvas() {
  const canvas = document.getElementById('sparkleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 28;

  function resize() {
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
      this.color = Math.random() > 0.4 ? 'rgba(212, 168, 97, ' : 'rgba(231, 156, 165, '; // Gold or Rose
      this.spikes = Math.random() > 0.5 ? 4 : 5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha += this.fade;

      if (this.alpha >= 0.8 || this.alpha <= 0.05) {
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
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#D4A861';
      ctx.fill();

      // Cross sparkle ray
      if (this.size > 2) {
        ctx.strokeStyle = this.color + (this.alpha * 0.6) + ')';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(this.x - this.size * 2, this.y);
        ctx.lineTo(this.x + this.size * 2, this.y);
        ctx.moveTo(this.x, this.y - this.size * 2);
        ctx.lineTo(this.x, this.y + this.size * 2);
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

// Scroll Reveal
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-fade-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// WhatsApp Quick Inquiry Modal Handler
function initWhatsAppInquiryModal() {
  const modal = document.getElementById('waInquiryModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close');
  const citySelect = document.getElementById('modalCitySelect');
  const customNotes = document.getElementById('modalNotes');
  const sendBtn = document.getElementById('modalSendWhatsAppBtn');
  const productTitleEl = document.getElementById('modalProductTitle');
  const productSkuEl = document.getElementById('modalProductSku');

  let currentProduct = { name: '', sku: '' };

  window.openWhatsAppInquiry = function(name, sku) {
    currentProduct.name = name;
    currentProduct.sku = sku;
    if (productTitleEl) productTitleEl.textContent = name;
    if (productSkuEl) productSkuEl.textContent = 'SKU: ' + sku;
    modal.classList.add('active');
  };

  function closeModal() {
    modal.classList.remove('active');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const city = citySelect ? citySelect.value : 'Ontario';
      const notes = customNotes ? customNotes.value.trim() : '';
      
      let message = `Hi Whimsy Collection! ✨\nI am inquiring about the following piece:\n\n• *Product:* ${currentProduct.name}\n• *SKU:* ${currentProduct.sku}\n• *My Delivery City:* ${city}\n`;
      if (notes) {
        message += `• *Notes:* ${notes}\n`;
      }
      message += `\nPlease let me know current availability, price details, and how soon you can deliver to ${city}. Thank you!`;

      const url = `https://wa.me/17059702169?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      closeModal();
    });
  }
}
