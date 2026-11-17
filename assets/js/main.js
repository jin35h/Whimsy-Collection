/**
 * Shared navigation, disclosure and enquiry behaviour for the static site.
 */
$(function () {
  initHeader();
  initMobileDrawer();
  initFaqAccordion();
  initEnquiryModal();
  initEnquiryForms();
  initCurrentPageLinks();
});

function initCurrentPageLinks() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $('.site-header a.nav-link').removeClass('active').removeAttr('aria-current');
  $('.site-header a.nav-link, #mobileDrawer a').each(function () {
    const href = (this.getAttribute('href') || '').split(/[?#]/)[0];
    if (href === currentPage) {
      this.setAttribute('aria-current', 'page');
      if (this.classList.contains('nav-link')) this.classList.add('active');
    }
  });
}

function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 30);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

function initMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  const openButton = document.getElementById('openDrawerBtn');
  const closeButton = document.getElementById('closeDrawerBtn');
  const backdrop = document.getElementById('drawerBackdrop');
  if (!drawer || !openButton) return;

  let previousFocus = null;
  const focusable = () => Array.from(drawer.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter(el => el.getClientRects().length);

  function openDrawer() {
    previousFocus = document.activeElement;
    drawer.classList.add('active');
    backdrop?.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    openButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    (focusable()[0] || drawer).focus({ preventScroll: true });
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    backdrop?.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    openButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    (previousFocus || openButton).focus({ preventScroll: true });
  }

  openButton.setAttribute('aria-controls', 'mobileDrawer');
  openButton.setAttribute('aria-expanded', 'false');
  drawer.setAttribute('aria-hidden', 'true');
  if (!drawer.hasAttribute('tabindex')) drawer.setAttribute('tabindex', '-1');
  if (!drawer.hasAttribute('role')) {
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', 'Site navigation');
  }

  openButton.addEventListener('click', openDrawer);
  closeButton?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);
  drawer.addEventListener('click', event => {
    if (event.target === drawer) closeDrawer();
  });

  document.addEventListener('keydown', event => {
    if (!drawer.classList.contains('active')) return;
    if (event.key === 'Escape') {
      closeDrawer();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = focusable();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function initFaqAccordion() {
  $(document).on('click', '.faq-question', function () {
    const $button = $(this);
    const $item = $button.closest('.faq-item');
    const isOpen = $item.hasClass('active') || $item.hasClass('open');

    $('.faq-item').not($item).removeClass('active open').each(function () {
      $(this).find('.faq-question').attr('aria-expanded', 'false');
      $(this).find('.faq-answer').attr('hidden', true);
    });

    $item.toggleClass('active open', !isOpen);
    $button.attr('aria-expanded', String(!isOpen));
    $item.find('.faq-answer').attr('hidden', isOpen);
  });

  $('.faq-question').each(function () {
    const $question = $(this);
    const $answer = $question.closest('.faq-item').find('.faq-answer').first();
    if (!$question.is('button')) return;
    if (!$answer.attr('id')) $answer.attr('id', `faq-answer-${Math.random().toString(36).slice(2, 9)}`);
    $question.attr({
      'aria-controls': $answer.attr('id'),
      'aria-expanded': String($question.closest('.faq-item').is('.active, .open'))
    });
    if (!$question.closest('.faq-item').is('.active, .open')) $answer.attr('hidden', true);
  });
}

function initEnquiryModal() {
  const modal = document.getElementById('enquiryModal');
  if (!modal) return;
  const closeButton = modal.querySelector('.modal-close');
  let previousFocus = null;

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    (previousFocus || document.querySelector('.open-enquiry-btn, .open-enquiry-modal'))?.focus({ preventScroll: true });
  }

  $(document).on('click', '.open-enquiry-btn, .open-enquiry-modal', function (event) {
    event.preventDefault();
    previousFocus = this;
    const productName = $(this).data('product-name') || $('#productTitle').text() || 'Signature Jewellery Piece';
    const productSku = $(this).data('product-sku') || ($('#productSku').text() || '').replace('SKU: ', '');
    $('#modalProductName').text(productName);
    $('#modalProductSku').text(productSku ? `SKU: ${productSku}` : '');
    $('#enquiryModalForm [name="product_name"]').val(productName);
    $('#enquiryModalForm [name="product_sku"]').val(productSku);

    const waText = encodeURIComponent(`Hello Whimsy Collection, I would like to enquire about ${productName}${productSku ? ` (SKU: ${productSku})` : ''}. Please let me know about availability and delivery options.`);
    $('#modalWhatsAppBtn').attr('href', `https://wa.me/17059702169?text=${waText}`);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    (modal.querySelector('input:not([type="hidden"]), textarea, button, a[href]'))?.focus({ preventScroll: true });
  });

  closeButton?.addEventListener('click', closeModal);
  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });
  modal.setAttribute('aria-hidden', 'true');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'modalProductName');

  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('active')) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'Tab') {
      const items = Array.from(modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])'))
        .filter(el => el.getClientRects().length);
      if (!items.length) return;
      if (event.shiftKey && document.activeElement === items[0]) {
        event.preventDefault();
        items[items.length - 1].focus();
      } else if (!event.shiftKey && document.activeElement === items[items.length - 1]) {
        event.preventDefault();
        items[0].focus();
      }
    }
  });
}

function initEnquiryForms() {
  $('#contactForm, #enquiryModalForm').on('submit', function (event) {
    event.preventDefault();
    if (!this.reportValidity()) return;

    const values = new FormData(this);
    const lines = [
      'Hello Whimsy Collection, I would like to make an enquiry.',
      values.get('product_name') ? `Piece: ${values.get('product_name')}` : '',
      values.get('product_sku') ? `SKU: ${values.get('product_sku')}` : '',
      values.get('name') ? `Name: ${values.get('name')}` : '',
      values.get('email') ? `Email: ${values.get('email')}` : '',
      values.get('phone') ? `Phone: ${values.get('phone')}` : '',
      values.get('city') ? `City: ${values.get('city')}` : '',
      values.get('occasion') ? `Occasion: ${values.get('occasion')}` : '',
      values.get('message') ? `Message: ${values.get('message')}` : ''
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/17059702169?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    const $status = $(this).find('[data-form-status]');
    $status.text('WhatsApp should open with your message. Review it and press Send; if it does not open, use the WhatsApp or call link on this page.');
    if ($status.length) $status.attr('role', 'status');
  });
}
