// Grain Studio Main JavaScript Controller

// Key for LocalStorage
const CART_STORAGE_KEY = 'grainstudio_cart_v1';
const APPLIED_PROMO_KEY = 'grainstudio_promo_v1';

// Cart State Management
function getCart() {
  const data = localStorage.getItem(CART_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, quantity = 1, selectedColor = null) {
  const product = getProductById(productId);
  if (!product) return;

  const cart = getCart();
  const color = selectedColor || (product.colors && product.colors[0]) || 'Standard';
  const existingItemIndex = cart.findIndex(item => item.id === product.id && item.color === color);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      categoryName: product.categoryName,
      color: color,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`${product.name} added to cart!`, 'success');
}

function updateCartQuantity(productId, color, newQuantity) {
  let cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === productId && item.color === color);

  if (itemIndex > -1) {
    if (newQuantity <= 0) {
      cart.splice(itemIndex, 1);
      showToast('Item removed from cart', 'info');
    } else {
      cart[itemIndex].quantity = newQuantity;
    }
    saveCart(cart);
  }
}

function removeFromCart(productId, color) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === productId && item.color === color));
  saveCart(cart);
  showToast('Item removed from your cart', 'info');
}

function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
  localStorage.removeItem(APPLIED_PROMO_KEY);
  updateCartBadge();
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartBadge() {
  const badgeElements = document.querySelectorAll('.cart-count');
  const count = getCartCount();
  badgeElements.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

// Toast Notifications
function showToast(message, type = 'primary') {
  let toastContainer = document.querySelector('.toast-container-custom');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container toast-container-custom';
    document.body.appendChild(toastContainer);
  }

  const bgClass = type === 'success' ? 'bg-success text-white' : 
                  type === 'info' ? 'bg-info text-dark' : 
                  type === 'danger' ? 'bg-danger text-white' : 'bg-dark text-white';

  const iconClass = type === 'success' ? 'bi-check-circle-fill' : 
                    type === 'info' ? 'bi-info-circle-fill' : 
                    type === 'danger' ? 'bi-exclamation-triangle-fill' : 'bi-bag-check-fill';

  const toastId = 'toast_' + Date.now();
  const toastHtml = `
    <div id="${toastId}" class="toast align-items-center ${bgClass} border-0 shadow-lg mb-2" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="bi ${iconClass} fs-5"></i>
          <span>${message}</span>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  toastContainer.insertAdjacentHTML('beforeend', toastHtml);
  const toastElem = document.getElementById(toastId);
  if (window.bootstrap && bootstrap.Toast) {
    const bsToast = new bootstrap.Toast(toastElem, { delay: 3200 });
    bsToast.show();
    toastElem.addEventListener('hidden.bs.toast', () => toastElem.remove());
  }
}

// Quick View Modal
function openQuickView(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const modalEl = document.getElementById('quickViewModal');
  if (!modalEl) return;

  const modalImg = modalEl.querySelector('#quickViewImg');
  const modalTitle = modalEl.querySelector('#quickViewTitle');
  const modalCategory = modalEl.querySelector('#quickViewCategory');
  const modalPrice = modalEl.querySelector('#quickViewPrice');
  const modalOriginal = modalEl.querySelector('#quickViewOriginalPrice');
  const modalDesc = modalEl.querySelector('#quickViewDesc');
  const modalFeatures = modalEl.querySelector('#quickViewFeatures');
  const modalLink = modalEl.querySelector('#quickViewFullLink');
  const modalAddBtn = modalEl.querySelector('#quickViewAddBtn');

  if (modalImg) modalImg.src = product.image;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalCategory) modalCategory.textContent = product.categoryName;
  if (modalPrice) modalPrice.textContent = `$${product.price.toFixed(2)}`;
  if (modalOriginal) modalOriginal.textContent = `$${product.originalPrice.toFixed(2)}`;
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalLink) modalLink.href = `product-details.html?id=${product.id}`;

  if (modalFeatures) {
    modalFeatures.innerHTML = product.features.map(f => `<li><i class="bi bi-check2-circle text-primary me-2"></i>${f}</li>`).join('');
  }

  if (modalAddBtn) {
    modalAddBtn.onclick = () => {
      addToCart(product.id, 1);
      const bsModal = bootstrap.Modal.getInstance(modalEl);
      if (bsModal) bsModal.hide();
    };
  }

  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();
}

// Render Card Component
function createProductCardHtml(product) {
  const stars = Array(5).fill(0).map((_, i) => {
    if (i < Math.floor(product.rating)) {
      return '<i class="bi bi-star-fill"></i>';
    } else if (i < product.rating) {
      return '<i class="bi bi-star-half"></i>';
    } else {
      return '<i class="bi bi-star"></i>';
    }
  }).join('');

  return `
    <div class="col-md-6 col-lg-3 mb-4">
      <div class="product-card h-100">
        <div class="card-img-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="badge bg-${product.badgeColor} product-badge-overlay">${product.badge}</span>
          <div class="quick-view-overlay">
            <button class="btn btn-sm btn-light shadow-sm" onclick="openQuickView(${product.id})">
              <i class="bi bi-eye me-1"></i> Quick View
            </button>
          </div>
        </div>
        <div class="product-card-body">
          <div class="product-category-tag">${product.categoryName}</div>
          <h5 class="product-title">
            <a href="product-details.html?id=${product.id}">${product.name}</a>
          </h5>
          <div class="rating-stars">
            ${stars}
            <span class="rating-count">(${product.reviewCount})</span>
          </div>
          <p class="small text-muted mb-3 flex-grow-1" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            ${product.description}
          </p>
          <div class="product-pricing">
            <span class="current-price">$${product.price.toFixed(2)}</span>
            <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
            <span class="badge bg-danger-subtle text-danger ms-auto font-weight-bold">
              ${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          </div>
          <div class="d-grid gap-2 pt-2">
            <button class="btn btn-primary btn-sm d-flex align-items-center justify-content-center gap-2" onclick="addToCart(${product.id}, 1)">
              <i class="bi bi-bag-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
});
