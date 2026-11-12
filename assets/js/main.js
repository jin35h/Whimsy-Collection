/**
 * WHIMSY COLLECTION - MAIN JAVASCRIPT
 * Catalog renderer, filters, mobile navigation, FAQ accordion
 * STRICT RULE: NO PRICES SHOWN - WHATSAPP INQUIRY ONLY
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initStickyHeader();
  initFaqAccordion();
  initHomeFeaturedProducts();
  initCatalogPage();
  initProductDetailPage();
});

// Mobile Navigation Drawer
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const closeBtn = document.querySelector('.drawer-close');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
}

// Sticky Header
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// FAQ Accordion
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(other => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Generate single product card HTML (STRICTLY NO PRICE)
function createProductCardHtml(p) {
  const badgesHtml = (p.tags || []).map(t => {
    const cls = t.includes('Stainless') ? 'badge-steel' : (t.includes('Bestseller') ? 'badge-gold' : '');
    return `<span class="badge-tag ${cls}">${t}</span>`;
  }).join('');

  const inqUrl = WHIMSY_CONFIG.getInquiryUrl(p.name, p.sku);
  const orderUrl = WHIMSY_CONFIG.getOrderUrl(p.name, p.sku, '');
  const imgSrc = p.image || 'assets/images/hero-flatlay.png';

  return `
    <div class="product-card" data-category="${p.category}" data-material="${p.material}">
      <div class="product-img-wrap">
        <div class="product-badges">
          ${badgesHtml}
        </div>
        <img src="${imgSrc}" alt="${p.name} - Whimsy Collection Canada" class="product-img" loading="lazy" onerror="this.onerror=null;this.src='assets/images/hero-flatlay.png';" />
      </div>
      <div class="product-body">
        <div class="product-meta-row">
          <span class="product-category-text">${p.category}</span>
          <span class="product-sku-pill">${p.sku}</span>
        </div>
        <h3 class="product-name">
          <a href="product-details.html?sku=${p.sku}">${p.name}</a>
        </h3>
        <div class="product-material-info">
          <i class="fa-solid fa-gem text-gold"></i>
          <span>${p.material}</span>
        </div>
        <div class="inquiry-status-box">
          <div class="inquiry-status-text">
            <i class="fa-brands fa-whatsapp text-whatsapp"></i>
            <span>Boutique Inquiry</span>
          </div>
          <span class="inquiry-status-badge">Available to Deliver</span>
        </div>
        <div class="product-actions">
          <button type="button" class="btn-inquire-wa" onclick="openWhatsAppInquiry('${p.name.replace(/'/g, "\\'")}', '${p.sku}')">
            <i class="fa-brands fa-whatsapp"></i> Inquire
          </button>
          <a href="${orderUrl}" target="_blank" rel="noopener" class="btn-order-wa">
            <i class="fa-solid fa-bag-shopping"></i> Order
          </a>
        </div>
      </div>
    </div>
  `;
}

// Homepage Featured Bestsellers
function initHomeFeaturedProducts() {
  const container = document.getElementById('homeFeaturedGrid');
  if (!container || typeof WHIMSY_PRODUCTS === 'undefined') return;

  const featured = WHIMSY_PRODUCTS.slice(0, 8);
  container.innerHTML = featured.map(createProductCardHtml).join('');
}

// Catalog Page Functionality
function initCatalogPage() {
  const grid = document.getElementById('catalogProductsGrid');
  if (!grid || typeof WHIMSY_PRODUCTS === 'undefined') return;

  const countEl = document.getElementById('catalogResultCount');
  const searchInput = document.getElementById('catalogSearchInput');
  const categoryPills = document.querySelectorAll('.catalog-filter-pill');
  const materialSelect = document.getElementById('catalogMaterialSelect');
  const sortSelect = document.getElementById('catalogSortSelect');

  let currentCategory = 'all';
  let currentMaterial = 'all';
  let searchQuery = '';

  function render() {
    let filtered = WHIMSY_PRODUCTS.filter(p => {
      const matchCat = (currentCategory === 'all' || p.category.toLowerCase() === currentCategory.toLowerCase());
      const matchMat = (currentMaterial === 'all' || p.material.toLowerCase().includes(currentMaterial.toLowerCase()));
      const matchSearch = !searchQuery || 
        p.name.toLowerCase().includes(searchQuery) || 
        p.sku.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery);
      return matchCat && matchMat && matchSearch;
    });

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} of ${WHIMSY_PRODUCTS.length} curated pieces`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; color: var(--color-rose); margin-bottom: 16px;"></i>
          <h3 style="font-family: var(--font-serif); margin-bottom: 8px;">No jewelry pieces matched your search</h3>
          <p style="color: var(--color-muted); max-width: 480px; margin: 0 auto 20px;">We might have what you're looking for! Ask our personal boutique stylist on WhatsApp directly.</p>
          <a href="https://wa.me/17059702169?text=${encodeURIComponent('Hi Whimsy Collection, I am searching for a specific jewelry piece not listed in the online catalog.')}" target="_blank" class="btn btn-whatsapp">
            <i class="fa-brands fa-whatsapp"></i> Inquire Custom Style
          </a>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(createProductCardHtml).join('');
  }

  // Category Pills
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');
      render();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      render();
    });
  }

  // Material Filter
  if (materialSelect) {
    materialSelect.addEventListener('change', (e) => {
      currentMaterial = e.target.value;
      render();
    });
  }

  // Check URL params for category
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    currentCategory = catParam;
    categoryPills.forEach(pill => {
      if (pill.getAttribute('data-category').toLowerCase() === catParam.toLowerCase()) {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      }
    });
  }

  render();
}

// Product Detail Page
function initProductDetailPage() {
  const detailContainer = document.getElementById('productDetailWrapper');
  if (!detailContainer || typeof WHIMSY_PRODUCTS === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  let sku = urlParams.get('sku');
  
  let product = WHIMSY_PRODUCTS.find(p => p.sku === sku);
  if (!product) {
    product = WHIMSY_PRODUCTS[0]; // Fallback to first piece
  }

  // Set page meta title
  document.title = `${product.name} | Whimsy Collection Ontario`;

  const inqUrl = WHIMSY_CONFIG.getInquiryUrl(product.name, product.sku);
  const orderUrl = WHIMSY_CONFIG.getOrderUrl(product.name, product.sku, '');

  detailContainer.innerHTML = `
    <div class="product-detail-grid">
      <div class="detail-gallery-wrap">
        <div class="detail-main-img-box">
          <img src="${product.image}" alt="${product.name}" class="detail-main-img" id="detailZoomImg" />
          <div class="detail-badge-pill">
            <i class="fa-solid fa-leaf text-gold"></i> Whimsy Authentic
          </div>
        </div>
        <div class="detail-packaging-callout">
          <i class="fa-solid fa-gift text-primary"></i>
          <div>
            <strong>Includes Signature Velvet Pouch</strong>
            <p>Every order is hand-packaged inside our rose velvet travel pouch with a golden snap button.</p>
          </div>
        </div>
      </div>

      <div class="detail-content-wrap">
        <div class="detail-breadcrumbs">
          <a href="index.html">Home</a> &rsaquo;
          <a href="catalog.html">Catalog</a> &rsaquo;
          <a href="catalog.html?category=${product.category}">${product.category}</a> &rsaquo;
          <span>${product.sku}</span>
        </div>

        <h1 class="detail-title">${product.name}</h1>

        <div class="detail-meta-bar">
          <span class="detail-sku">SKU: <strong>${product.sku}</strong></span>
          <span class="detail-material"><i class="fa-solid fa-gem text-gold"></i> ${product.material}</span>
          <span class="detail-status-pill"><i class="fa-solid fa-circle-check"></i> In Stock for Ontario Delivery</span>
        </div>

        <!-- NO PRICE - Direct WhatsApp Ordering Prompt -->
        <div class="detail-inquiry-card">
          <div class="inquiry-card-header">
            <div>
              <span class="inquiry-tag">Boutique Exclusive</span>
              <h3 class="inquiry-price-placeholder">Pricing & Availability via WhatsApp</h3>
            </div>
            <span class="live-dot"><span class="dot"></span> Online Now</span>
          </div>
          <p class="inquiry-card-text">
            To provide the most personalized experience with zero retail markups, our boutique coordinates directly through WhatsApp. Message us to get today's price, live close-up video/photos, and coordinate doorstep delivery to your city.
          </p>
          <div class="detail-cta-row">
            <a href="${inqUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">
              <i class="fa-brands fa-whatsapp"></i> Inquire Price on WhatsApp
            </a>
            <a href="${orderUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-lg">
              <i class="fa-solid fa-bag-shopping"></i> Order on WhatsApp
            </a>
          </div>
          <div class="delivery-guarantee-note">
            <i class="fa-solid fa-truck-fast text-gold"></i>
            <span>Doorstep & Contactless Delivery in <strong>Mississauga, Brampton, Toronto, Kitchener, Cambridge, Guelph</strong>.</span>
          </div>
        </div>

        <div class="detail-tabs-wrap">
          <div class="detail-desc-block">
            <h3>Craftsmanship & Details</h3>
            <p>${product.description}</p>
          </div>

          <div class="detail-specs-table">
            <div class="spec-row">
              <span class="spec-label">Category</span>
              <span class="spec-value">${product.category}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Material Composition</span>
              <span class="spec-value">${product.material}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Color Finish</span>
              <span class="spec-value">${product.color}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Delivery Zones</span>
              <span class="spec-value">Mississauga, Brampton, Toronto, Kitchener, Cambridge, Guelph (Ontario)</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Payment Accepted</span>
              <span class="spec-value">Interac e-Transfer, Cash on Local Delivery/Pickup</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Render related products
  const relatedGrid = document.getElementById('relatedProductsGrid');
  if (relatedGrid) {
    const related = WHIMSY_PRODUCTS
      .filter(p => p.category === product.category && p.sku !== product.sku)
      .slice(0, 4);
    relatedGrid.innerHTML = related.map(createProductCardHtml).join('');
  }
}
