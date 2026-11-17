/**
 * WHIMSY COLLECTION - DYNAMIC PRODUCT DETAIL ENGINE
 * Dual Loading: Local JavaScript Data Module + AJAX fallback
 */

$(document).ready(function () {
  loadProductDetail();
});

function loadProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const skuQuery = urlParams.get('sku');
  const idQuery = urlParams.get('id');

  function initDetail(products) {
    let product = null;

    if (skuQuery) {
      product = products.find(p => p.sku && p.sku.toLowerCase() === skuQuery.toLowerCase());
      if (!product) {
        // try finding by name or partial
        product = products.find(p => p.name && p.name.toLowerCase().includes(skuQuery.toLowerCase()));
      }
    }
    if (!product && idQuery) {
      product = products.find(p => p.id == idQuery);
    }
    if (product) {
      renderProductDetail(product, products);
    } else {
      $('#productDetailContainer').html('<div class="container" role="status" style="padding:64px 20px; text-align:center;"><h1 class="font-serif">Piece not found</h1><p>That jewellery piece may no longer be available. Browse the collection to find another design.</p><a class="btn btn-primary" href="collections.html">Browse collections</a></div>');
    }
  }

  // 1. Direct memory fallback (Works on file:/// and instant load)
  if (window.WHIMSY_PRODUCTS && window.WHIMSY_PRODUCTS.length) {
    initDetail(window.WHIMSY_PRODUCTS);
    return;
  }

  // 2. AJAX fetch for HTTP/HTTPS web servers
  $.ajax({
    url: 'assets/data/products.json',
    type: 'GET',
    dataType: 'json',
    success: function (products) {
      initDetail(products);
    },
    error: function () {
      if (window.WHIMSY_PRODUCTS && window.WHIMSY_PRODUCTS.length) {
        initDetail(window.WHIMSY_PRODUCTS);
      } else {
        $('#productDetailContainer').html('<div class="container" role="alert" style="padding:64px 20px; text-align:center;"><h1 class="font-serif">Piece unavailable</h1><p>We could not load this piece just now. Please try again or browse the collection.</p><a class="btn btn-primary" href="collections.html">Browse collections</a></div>');
      }
    }
  });
}

function renderProductDetail(p, allProducts) {
  // Page Title & Meta
  document.title = `${p.name} | Whimsy Collection Ontario`;

  // Breadcrumbs
  $('#breadcrumbCategory').text(p.category || 'Jewellery').attr('href', `collections.html?category=${p.category_slug || 'all'}`);
  $('#breadcrumbProduct').text(p.name);

  // Main Image
  const primaryRaw = p.primary_image || 'images/Whimsy product catalouge/Floral Gold Necklace Display.jpeg';
  const primaryImg = encodeURI(primaryRaw);
  $('#mainProductImg').attr('src', primaryImg).attr('alt', `${p.name} - Whimsy Collection`);

  // Thumbnails
  const $thumbs = $('#productThumbnails');
  $thumbs.empty();

  const allImgs = (p.images && p.images.length) ? p.images : [primaryRaw];
  allImgs.forEach((imgSrcRaw, i) => {
    const imgSrc = encodeURI(imgSrcRaw);
    const $t = $(`
      <button type="button" class="thumb-btn ${i === 0 ? 'active' : ''}" aria-label="View ${p.name}, image ${i + 1}" aria-pressed="${i === 0}" style="width:72px; height:72px; border:2px solid ${i === 0 ? '#C6A36B' : '#E8DFD5'}; border-radius:2px; overflow:hidden; background:#FFFFFF; flex-shrink:0; cursor:pointer; padding:2px;">
        <img src="${imgSrc}" alt="${p.name} view ${i+1}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='images/Whimsy product catalouge/Floral Gold Necklace Display.jpeg'">
      </button>
    `);

    $t.on('click', function () {
      $('.thumb-btn').css('border-color', '#E8DFD5').attr('aria-pressed', 'false').removeClass('active');
      $(this).css('border-color', '#C6A36B').attr('aria-pressed', 'true').addClass('active');
      $('#mainProductImg').attr({ src: imgSrc, alt: `${p.name}, image ${i + 1}` });
    });

    $thumbs.append($t);
  });

  // Text Fields
  $('#productCategoryBadge').text(p.category || 'Handcrafted Atelier Piece');
  $('#productTitle').text(p.name);
  $('#productSku').text(p.sku ? `SKU: ${p.sku}` : 'Atelier Signature');
  $('#productDescription').text(p.description || 'Artisanal jewellery hand-inspected in Ontario.');
  $('#productPattern').text(p.pattern || p.name);
  $('#productColor').text(p.color || 'Champagne Gold Tone');
  $('#productMaterial').text(p.material || 'Artisanal Alloy & Premium Stones');
  $('#productCare').text(p.care_notes || 'Store in your signature Whimsy velvet travel pouch. Keep away from moisture, direct perfumes, and lotions.');

  // Pre-compose WhatsApp Order & Direct Enquiry Message
  const waText = encodeURIComponent(`Hi Whimsy Collection! ✨\nI would like to enquire about:\n\n• Piece: ${p.name}\n• SKU: ${p.sku || 'N/A'}\n• Category: ${p.category}\n\nPlease confirm availability and delivery options to Ontario. Thank you!`);
  $('#detailWhatsAppBtn').attr('href', `https://wa.me/17059702169?text=${waText}`);
  $('#detailEnquiryBtn').attr('data-product-name', p.name).attr('data-product-sku', p.sku || '');

  // Render Related Pieces
  const related = allProducts
    .filter(item => item.id !== p.id && (item.category === p.category || item.featured))
    .slice(0, 4);

  const $relGrid = $('#relatedProductsGrid');
  if ($relGrid.length) {
    let relHtml = '';
    related.forEach(item => {
      const relImg = encodeURI(item.primary_image || 'images/Whimsy product catalouge/Floral Gold Necklace Display.jpeg');
      relHtml += `
        <div class="product-card">
          <div class="product-img-stage">
            <a href="product-details.html?sku=${encodeURIComponent(item.sku || item.id)}">
              <img src="${relImg}" alt="${item.name}" loading="lazy" width="300" height="400" onerror="this.src='images/Whimsy product catalouge/Floral Gold Necklace Display.jpeg'">
            </a>
          </div>
          <div class="product-info">
            <h4 class="font-serif product-title" style="font-size:16px;">
              <a href="product-details.html?sku=${encodeURIComponent(item.sku || item.id)}" style="color:#352820;">${item.name}</a>
            </h4>
            <div class="product-card-footer" style="margin-top:10px;">
              <span style="font-size:11px; color:#92765C;">${item.category}</span>
              <a href="product-details.html?sku=${encodeURIComponent(item.sku || item.id)}" class="btn-secondary" style="font-size:11px; padding:4px 10px;">View →</a>
            </div>
          </div>
        </div>
      `;
    });
    $relGrid.html(relHtml);
  }
}
