/**
 * WHIMSY COLLECTION - DYNAMIC CATALOG & FILTER ENGINE
 * Dual Loading: Local JavaScript Data Module + AJAX fallback
 */

let allProducts = [];
let currentCategory = 'all';
let currentSearch = '';
let currentMaterial = 'all';
let currentSort = 'featured';

function normalizeCategory(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/jewellery/g, 'jewelry')
    .replace(/[^a-z0-9]/g, '')
    .replace(/s$/, '');
}

function productSearchText(product) {
  return [product.name, product.pattern, product.category, product.material, product.color, product.tags?.join(' ')]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function matchesCategory(product, category) {
  if (category === 'all') return true;
  const key = normalizeCategory(category);
  if ([product.category_slug, product.category].some(value => normalizeCategory(value) === key)) return true;

  const text = productSearchText(product);
  const themedTerms = {
    festivejewellery: /festive|bridal|wedding|occasion|kundan|polki|jhumka|meenakari|ethnic|statement/,
    traditionaljewellery: /traditional|kundan|polki|jhumka|meenakari|bridal|payal|anklet/,
    everydayjewellery: /everyday|minimal|dainty|daily|stack|hoop|stud|chain|simple/
  };
  return themedTerms[key]?.test(text) || false;
}

function matchesMaterial(product, material) {
  if (material === 'all') return true;
  const text = productSearchText(product);
  const materialTerms = {
    gold: /gold|champagne/,
    kundan: /kundan|polki/,
    pearl: /pearl/,
    stone: /stone|crystal|cz|cubic zirconia|gem/
  };
  return materialTerms[material]?.test(text) || text.includes(material);
}

$(document).ready(function () {
  loadCatalogData();
  bindFilterEvents();
});

function loadCatalogData() {
  const $grid = $('#catalogGrid');
  if (!$grid.length) return;

  function initData(data) {
    allProducts = data;

    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('category');
    const qParam = urlParams.get('q');

    if (catParam) {
      currentCategory = catParam;
      $('.cat-filter-btn').removeClass('active');
      $(`.cat-filter-btn[data-category="${catParam}"]`).addClass('active');
    }
    $('.cat-filter-btn').attr('aria-pressed', 'false');
    $('.cat-filter-btn.active').attr('aria-pressed', 'true');

    if (qParam) {
      currentSearch = qParam.toLowerCase();
      $('#catalogSearchInput').val(qParam);
    }

    applyFiltersAndRender();
  }

  // 1. Direct memory fallback (Works on file:/// and instant load)
  if (window.WHIMSY_PRODUCTS && window.WHIMSY_PRODUCTS.length) {
    initData(window.WHIMSY_PRODUCTS);
    return;
  }

  $grid.html('<div style="grid-column: 1/-1; text-align: center; padding: 60px 0;"><span style="color:#C6A36B; font-size:14px; text-transform:uppercase; letter-spacing:0.1em;">Loading Curated Atelier Pieces...</span></div>');

  // 2. AJAX fetch for HTTP/HTTPS web servers
  $.ajax({
    url: 'assets/data/products.json',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      initData(data);
    },
    error: function () {
      if (window.WHIMSY_PRODUCTS && window.WHIMSY_PRODUCTS.length) {
        initData(window.WHIMSY_PRODUCTS);
      } else {
        $grid.html('<div style="grid-column: 1/-1; text-align:center; padding: 40px;"><p style="color:#A66F65;">Unable to load jewellery catalogue. Please refresh or connect with our concierge.</p></div>');
        $grid.attr('aria-busy', 'false');
      }
    }
  });
}

function bindFilterEvents() {
  $('.cat-filter-btn').each(function () {
    $(this).attr('aria-pressed', $(this).hasClass('active') ? 'true' : 'false');
  });
  // Category Pills
  $(document).on('click', '.cat-filter-btn', function () {
    $('.cat-filter-btn').removeClass('active');
    $(this).addClass('active');
    $('.cat-filter-btn').attr('aria-pressed', 'false');
    $(this).attr('aria-pressed', 'true');
    currentCategory = $(this).data('category');
    applyFiltersAndRender();
  });

  // Search Input with Debounce
  let searchTimeout;
  $('#catalogSearchInput').on('input', function () {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      currentSearch = $(this).val().toLowerCase().trim();
      applyFiltersAndRender();
    }, 200);
  });

  // Material Filter
  $('#materialFilter').on('change', function () {
    currentMaterial = $(this).val();
    applyFiltersAndRender();
  });

  // Sort Order
  $('#sortFilter').on('change', function () {
    currentSort = $(this).val();
    applyFiltersAndRender();
  });
}

function applyFiltersAndRender() {
  let filtered = allProducts.filter(p => {
    // Category match
    const catMatch = matchesCategory(p, currentCategory);

    // Search match
    const searchMatch = !currentSearch || 
                        (p.name && p.name.toLowerCase().includes(currentSearch)) || 
                        (p.description && p.description.toLowerCase().includes(currentSearch)) || 
                        (p.sku && p.sku.toLowerCase().includes(currentSearch)) ||
                        (p.pattern && p.pattern.toLowerCase().includes(currentSearch));

    // Material match
    const matMatch = matchesMaterial(p, currentMaterial);

    return catMatch && searchMatch && matMatch;
  });

  // Sorting
  if (currentSort === 'name_asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === 'name_desc') {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else if (currentSort === 'sku') {
    filtered.sort((a, b) => (a.sku || '').localeCompare(b.sku || ''));
  } else {
    // Featured first
    filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  // Update Count
  $('#productCount').text(`${filtered.length} ${filtered.length === 1 ? 'Design' : 'Designs'}`);

  // Render Grid
  const $grid = $('#catalogGrid');
  $grid.attr('aria-busy', 'false');
  if (!filtered.length) {
    $grid.html(`
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background:#FFFFFF; border:1px solid #E8DFD5; border-radius:2px;">
        <img src="images/Whimsy Collection Elegant Lotus Badge.png" alt="Lotus" style="width:48px; height:48px; margin:0 auto 16px; opacity:0.6;">
        <h3 class="font-serif" style="font-size:24px; color:#352820; margin-bottom:8px;">No Pieces Matching Criteria</h3>
        <p style="font-size:13px; color:#6B5E55; font-weight:300; max-width:400px; margin:0 auto 20px;">
          Try adjusting your search terms or category selection to explore our other collections.
        </p>
        <button type="button" class="btn btn-secondary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `);
    return;
  }

  let html = '';
  filtered.forEach(p => {
    const rawPrimary = p.primary_image || 'images/Whimsy product catalouge/Floral Gold Necklace Display.jpeg';
    const rawSecondary = p.secondary_image || rawPrimary;
    const primaryImg = encodeURI(rawPrimary);
    const secondaryImg = encodeURI(rawSecondary);

    html += `
      <div class="product-card reveal visible" data-id="${p.id}">
        <div class="product-img-stage">
          <a href="product-details.html?sku=${encodeURIComponent(p.sku || p.id)}">
            <img src="${primaryImg}" 
                 alt="${p.name} - Whimsy Collection" 
                 loading="lazy" 
                 width="400" 
                 height="533"
                 onerror="this.src='images/Whimsy product catalouge/Floral Gold Necklace Display.jpeg'"
                 onmouseover="if('${secondaryImg}') this.src='${secondaryImg}'" 
                 onmouseout="this.src='${primaryImg}'">
          </a>
          ${p.featured ? '<div class="product-badge">Atelier Signature</div>' : ''}
          <div style="position:absolute; bottom:10px; right:10px; background:rgba(255,255,255,0.92); font-size:9px; text-transform:uppercase; letter-spacing:0.1em; padding:3px 8px; border-radius:2px; font-weight:600; color:#352820; box-shadow:0 1px 3px rgba(0,0,0,0.1);">
            ${p.category}
          </div>
        </div>

        <div class="product-info">
          <div>
            ${p.sku ? `<span class="product-sku">${p.sku}</span>` : ''}
            <h3 class="font-serif product-title">
              <a href="product-details.html?sku=${encodeURIComponent(p.sku || p.id)}" style="color:#352820;">
                ${p.name}
              </a>
            </h3>
            <p class="product-desc">
              ${p.pattern || p.description}
            </p>
          </div>

          <div class="product-card-footer">
            <span style="font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:#92765C; font-weight:500;">
              ${p.color || 'Champagne Gold'}
            </span>
            <button type="button" 
                    class="open-enquiry-btn btn-secondary" 
                    data-product-name="${p.name}" 
                    data-product-sku="${p.sku || ''}"
                    style="padding:6px 14px; font-size:11px; letter-spacing:0.08em;">
              Enquire →
            </button>
          </div>
        </div>
      </div>
    `;
  });

  $grid.html(html);
}

function resetFilters() {
  currentCategory = 'all';
  currentSearch = '';
  currentMaterial = 'all';
  currentSort = 'featured';
  $('#catalogSearchInput').val('');
  $('#materialFilter').val('all');
  $('#sortFilter').val('featured');
  $('.cat-filter-btn').removeClass('active');
  $('.cat-filter-btn[data-category="all"]').addClass('active');
  $('.cat-filter-btn').attr('aria-pressed', 'false');
  $('.cat-filter-btn[data-category="all"]').attr('aria-pressed', 'true');
  applyFiltersAndRender();
}
