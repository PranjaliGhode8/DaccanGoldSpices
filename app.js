// --- Deccan Gold Spice E-Commerce Core JavaScript ---

// 1. Product Database
const products = [
  {
    id: "cardamom",
    name: "Green Cardamom Pods",
    category: "Whole Spices",
    categoryKey: "whole",
    origin: "Western Ghats, Kerala, India",
    description: "Known as the 'Queen of Spices,' our cardamom is hand-harvested from high-altitude estates in Kerala. These plump green pods lock in rich volatile oils, ensuring an unmatched release of flavor.",
    aroma: "Sweet, citrusy, and deeply herbal with eucalyptus undertones.",
    tasteProfile: "Warming, citrus-forward, complex, and aromatic with a delicate sweet finish.",
    usage: "Gently crush pods before adding to brewing chai, slow-cooked rice dishes, or infusing sweet creams and desserts.",
    basePriceUSD: 12.00,
    rating: 4.9,
    reviewCount: 148,
    image: "assets/cardamom.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Evelyn S. (London, UK)", rating: 5, text: "The aroma when you crack open one of these pods is incredible. Absolutely nothing like supermarket cardamom. A real treasure." },
      { author: "Liam H. (Boston, USA)", rating: 5, text: "Extremely high quality. Plump, bright green, and full of seeds. Essential for my morning cardamom coffee." }
    ]
  },
  {
    id: "chili",
    name: "Kashmiri Red Chili",
    category: "Ground Spices",
    categoryKey: "ground",
    origin: "Pampore Valley, Kashmir, India",
    description: "Prized for its brilliant crimson color and gentle warmth, our Kashmiri Red Chili is milled from sun-dried chilies. It provides that classic, appetizing red color without overwhelming heat.",
    aroma: "Richly smoky, sweet, and reminiscent of dried bell peppers.",
    tasteProfile: "Extremely mild, sweet heat with fruity and smoky undertones.",
    usage: "Add to oil at the beginning of cooking to release its oil-soluble red pigments, ideal for butter chicken, tandoori marinades, and stews.",
    basePriceUSD: 8.50,
    rating: 4.8,
    reviewCount: 215,
    image: "assets/chili.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Marie L. (Paris, France)", rating: 5, text: "I love making Indian curries but can't handle too much heat. This spice is a game changer. Gorgeous red color, very mild warmth!" },
      { author: "Rohan M. (Toronto, Canada)", rating: 4, text: "Very fresh, authentic taste. Gives that perfect restaurant-style crimson red to gravies. Highly recommended." }
    ]
  },
  {
    id: "turmeric",
    name: "Golden Turmeric Powder",
    category: "Ground Spices",
    categoryKey: "ground",
    origin: "Sangli, Maharashtra, India",
    description: "Our single-origin Salem turmeric is famous for its exceptionally high curcumin content (above 5%), offering powerful anti-inflammatory benefits and a deep, golden yellow hue.",
    aroma: "Earthy, woody, with clean ginger-like freshness.",
    tasteProfile: "Warm, mildly bitter, peppery, with a pleasing musky aftertaste.",
    usage: "Blend into warm milk with black pepper and honey, whisk into coconut curries, or dust over roasted vegetables.",
    basePriceUSD: 7.00,
    rating: 4.95,
    reviewCount: 310,
    image: "assets/turmeric.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Sarah P. (San Francisco, USA)", rating: 5, text: "This turmeric is incredibly vibrant. The curcumin percentage must be really high because the taste is so potent. Perfect for my daily golden milk." },
      { author: "Yuki T. (Tokyo, Japan)", rating: 5, text: "Such a beautiful yellow color. Extremely clean taste. The packaging is also very lovely." }
    ]
  },
  {
    id: "garam_masala",
    name: "Royal Garam Masala",
    category: "Aromatic Blends",
    categoryKey: "blends",
    origin: "Old Delhi Heritage Hub, India",
    description: "A heritage family recipe blending 15 spices including cinnamon, mace, nutmeg, and black cardamom. Slow-roasted in small batches and stone-ground to preserve volatile oils.",
    aroma: "Intensely sweet-spicy, warm, and highly fragrant.",
    tasteProfile: "Deeply complex, sweet, peppery, with an exquisite warming depth and no harsh heat.",
    usage: "Best sprinkled as a finishing spice in the final 5 minutes of cooking to preserve its delicate aromas.",
    basePriceUSD: 10.00,
    rating: 4.9,
    reviewCount: 189,
    image: "assets/garam_masala.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "David K. (Berlin, Germany)", rating: 5, text: "I have tried many store-bought garam masalas but this one is completely different. The cinnamon and mace really shine through. Smells like heaven." },
      { author: "Priya S. (Sydney, Australia)", rating: 5, text: "Tastes like the garam masala my grandmother used to grind at home. Homely, rich, and full of nostalgia." }
    ]
  },
  {
    id: "biryani_blend",
    name: "Deccan Biryani Masala",
    category: "Aromatic Blends",
    categoryKey: "blends",
    origin: "Hyderabad Deccan, India",
    description: "An authentic Nizami blend featuring shahi jeera, star anise, stone flower, rose petals, and premium saffron. Perfectly balanced for replicating the royal biryanis of Hyderabad.",
    aroma: "Floral, pungent, regal, with notes of rose, mint, and toasted spices.",
    tasteProfile: "Bold, herbaceous, aromatic, with a sophisticated, lingering savory warmth.",
    usage: "Layer directly into meat marinades or sprinkle over basmati rice during the steam-cooking (dum) process.",
    basePriceUSD: 11.50,
    rating: 4.85,
    reviewCount: 165,
    image: "assets/biryani_blend.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Ahmad F. (Dubai, UAE)", rating: 5, text: "Made chicken biryani with this and my family was blown away. The balance of star anise and floral rose petals is spot on." },
      { author: "Clara G. (Melbourne, Australia)", rating: 5, text: "Takes all the guesswork out of making biryani. The flavor is incredibly layered and rich." }
    ]
  },
  {
    id: "gift_box",
    name: "Royal Spice Chest",
    category: "Gift Curations",
    categoryKey: "gifts",
    origin: "Pan-India Sourcing, Crafted in Rajasthan",
    description: "A gorgeous, hand-carved mango wood chest with brass fixtures and brass-embossed floral details. Open it to discover 6 premium glass jars filled with our signature single-origin spices and blends.",
    aroma: "An enchanting, complex bouquet of India's finest spice heritage.",
    tasteProfile: "A curated tour of India's spice routes: includes cardamom, turmeric, Kashmiri chili, garam masala, cumin seeds, and cloves.",
    usage: "The ultimate gift for culinary enthusiasts, global food lovers, or a premium centerpiece for your own kitchen counter.",
    basePriceUSD: 48.00,
    rating: 5.0,
    reviewCount: 92,
    image: "assets/gift_box.jpg",
    weights: [
      { name: "1 Chest", multiplier: 1.0 }
    ],
    reviews: [
      { author: "Sophia V. (New York, USA)", rating: 5, text: "Bought this as a wedding gift and it was the highlight of the registry! The box is beautiful enough to keep on display forever." },
      { author: "Arjun R. (Singapore)", rating: 5, text: "Stunning craftsmanship. The wood smells beautiful and the spice quality is premium. Definitely buying another for myself." }
    ]
  }
];

// 2. Currency Rates
const currencies = {
  USD: { symbol: "$", rate: 1.0, name: "US Dollar (USD)" },
  EUR: { symbol: "€", rate: 0.92, name: "Euro (EUR)" },
  GBP: { symbol: "£", rate: 0.78, name: "British Pound (GBP)" },
  AUD: { symbol: "A$", rate: 1.51, name: "Australian Dollar (AUD)" },
  CAD: { symbol: "C$", rate: 1.37, name: "Canadian Dollar (CAD)" },
  INR: { symbol: "₹", rate: 83.2, name: "Indian Rupee (INR)" }
};

// 3. State Variables
let currentCurrency = "USD";
let modalProduct = null;

// --- Initialize App ---
document.addEventListener("DOMContentLoaded", () => {
  // Detect Region & Set Recommendation Banner
  detectRegion();

  // Load Products onto Page
  renderProducts("all");

  // Header Scroll Effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Hamburger Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Event Listeners for Navigation Routing
  document.querySelectorAll("nav a, .footer-nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetView = link.getAttribute("data-view");
      if (targetView) {
        switchView(targetView);
        // Collapse mobile menu if open
        if (navMenu) {
          navMenu.classList.remove("active");
        }
      }
    });
  });

  // Logo Click Route to Home
  document.getElementById("logo-link").addEventListener("click", (e) => {
    e.preventDefault();
    switchView("home");
  });

  // CTA Click Route to Shop
  document.getElementById("hero-shop-cta").addEventListener("click", () => switchView("shop"));
  document.getElementById("hero-story-cta").addEventListener("click", () => switchView("story"));

  // Currency Switcher
  const currencySelect = document.getElementById("currency-select");
  currencySelect.addEventListener("change", (e) => {
    currentCurrency = e.target.value;
    updateProductPrices();
    if (modalProduct) {
      document.getElementById("modal-price").textContent = formatPrice(modalProduct.basePriceUSD);
    }
  });

  // Category Tab Filter (Shop Page)
  document.querySelectorAll(".tab-btn").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-category");
      renderProducts(category);
    });
  });

  // Modal Closures
  document.getElementById("close-modal-btn").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  });



  // Contact Us Form Listener
  const contactForm = document.getElementById("contact-us-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value;
      const email = document.getElementById("contact-email").value;
      if (name && email) {
        alert(`Namaste ${name}! Thank you for reaching out. We have received your inquiry and will reply to ${email} within 24 hours.`);
        contactForm.reset();
      }
    });
  }

  // Close Region Banner
  document.getElementById("close-region-btn").addEventListener("click", () => {
    document.getElementById("region-banner").style.display = "none";
  });

  // Set default view on load
  switchView("home");
});

// --- Dynamic View Router ---
function switchView(viewId) {
  // Update view classes
  document.querySelectorAll(".view-section").forEach(view => {
    view.classList.remove("active");
  });
  const activeView = document.getElementById(`view-${viewId}`);
  if (activeView) {
    activeView.classList.add("active");
    window.scrollTo(0, 0);
  }

  // Update nav menu active states
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("data-view") === viewId) {
      link.classList.add("active");
    }
  });

  // Hide/Show Currency Selector (hide on Home page)
  const currencySelect = document.getElementById("currency-select");
  if (currencySelect) {
    if (viewId === "home") {
      currencySelect.style.display = "none";
    } else {
      currencySelect.style.display = "block";
    }
  }



  // Close modal just in case
  closeModal();
}

// --- Detect Region for Recommendations ---
function detectRegion() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  const locale = navigator.language || "";
  const regionBannerText = document.getElementById("region-banner-text");

  let recommendation = "Welcome to Deccan Gold Spice! We ship premium single-origin spices worldwide with free shipping over $75.";
  
  if (timeZone.includes("America") || locale.includes("US") || locale.includes("CA")) {
    recommendation = "🌶️ Visiting from North America? Warm up your kitchen with our stone-ground Royal Garam Masala. Free shipping over $75 USD.";
  } else if (timeZone.includes("Europe") || locale.includes("GB") || locale.includes("FR") || locale.includes("DE")) {
    recommendation = "🌍 Shipping to Europe? Try our fragrant Deccan Biryani Masala for authentic royal dining. Delivery in 3-5 business days.";
  } else if (timeZone.includes("Australia") || timeZone.includes("Pacific") || locale.includes("AU") || locale.includes("NZ")) {
    recommendation = "☀️ Visiting from Oceania? Enhance your seasonal grills with our vibrant, mild Kashmiri Red Chili. Express shipping available.";
  } else if (timeZone.includes("Asia") || locale.includes("IN") || locale.includes("SG")) {
    recommendation = "✨ Single-origin organic heritage spices direct to your doorstep. Free local express delivery on orders over ₹2,000.";
  }
  
  regionBannerText.textContent = recommendation;
}

// --- Currency Formatting Utility ---
function formatPrice(usdPrice) {
  const currencyInfo = currencies[currentCurrency];
  const convertedPrice = usdPrice * currencyInfo.rate;
  
  // Format based on currency type
  if (currentCurrency === "INR") {
    return `${currencyInfo.symbol}${Math.round(convertedPrice).toLocaleString("en-IN")}`;
  }
  return `${currencyInfo.symbol}${convertedPrice.toFixed(2)}`;
}

// --- Render Product Grid ---
function renderProducts(categoryFilter) {
  const shopGrid = document.getElementById("shop-products-grid");
  const homeFeaturedGrid = document.getElementById("featured-products-grid");

  let filtered = products;
  if (categoryFilter && categoryFilter !== "all") {
    filtered = products.filter(p => p.categoryKey === categoryFilter);
  }

  // Generate cards
  const cardsHTML = filtered.map(p => {
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-img-wrapper">
          ${p.rating >= 4.9 ? `<span class="product-label">Best Seller</span>` : ''}
          <img src="${p.image}" alt="${p.name}">
          <div class="product-actions-hover">
            <button class="action-btn quick-view-btn" onclick="openProductModal('${p.id}')" title="Quick View">
              <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            </button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${p.category}</span>
          <h3 class="product-title" onclick="openProductModal('${p.id}')">${p.name}</h3>
          <p style="font-size:0.85rem; color:#666; font-weight:300; margin-bottom:1rem; flex-grow:1;">
            ${p.origin}
          </p>
          <div class="product-meta-row">
            <span class="product-price" data-base-price="${p.basePriceUSD}">${formatPrice(p.basePriceUSD)}</span>
            <button class="quick-add-btn" onclick="openProductModal('${p.id}')">Explore</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (shopGrid) {
    shopGrid.innerHTML = cardsHTML;
  }

  // Render featured items on homepage (first 3)
  if (homeFeaturedGrid && categoryFilter === "all") {
    const featuredHTML = products.slice(0, 3).map(p => {
      return `
        <div class="product-card" data-id="${p.id}">
          <div class="product-img-wrapper">
            <span class="product-label">Single Origin</span>
            <img src="${p.image}" alt="${p.name}">
            <div class="product-actions-hover">
              <button class="action-btn quick-view-btn" onclick="openProductModal('${p.id}')" title="Quick View">
                <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </button>
            </div>
          </div>
          <div class="product-info">
            <span class="product-category">${p.category}</span>
            <h3 class="product-title" onclick="openProductModal('${p.id}')">${p.name}</h3>
            <div class="product-meta-row">
              <span class="product-price" data-base-price="${p.basePriceUSD}">${formatPrice(p.basePriceUSD)}</span>
              <button class="quick-add-btn" onclick="openProductModal('${p.id}')">Explore</button>
            </div>
          </div>
        </div>
      `;
    }).join("");
    homeFeaturedGrid.innerHTML = featuredHTML;
  }
}

// --- Update All Prices on currency switch ---
function updateProductPrices() {
  document.querySelectorAll(".product-price").forEach(el => {
    const basePrice = parseFloat(el.getAttribute("data-base-price"));
    if (!isNaN(basePrice)) {
      el.textContent = formatPrice(basePrice);
    }
  });
}

// --- Product Modal Opening / Setting ---
function openProductModal(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  modalProduct = p;

  document.getElementById("modal-img").src = p.image;
  document.getElementById("modal-img").alt = p.name;
  document.getElementById("modal-category").textContent = p.category;
  document.getElementById("modal-title").textContent = p.name;
  document.getElementById("modal-origin").textContent = p.origin;
  document.getElementById("modal-description").textContent = p.description;

  // Aroma & Taste Metadata
  document.getElementById("meta-aroma").textContent = p.aroma;
  document.getElementById("meta-taste").textContent = p.tasteProfile;
  document.getElementById("meta-usage").textContent = p.usage;

  // Set default base price
  document.getElementById("modal-price").textContent = formatPrice(p.basePriceUSD);

  renderModalReviews();

  document.getElementById("modal-overlay").classList.add("active");
}

function renderModalReviews() {
  const reviewsContainer = document.getElementById("modal-reviews-list");
  if (!modalProduct) return;

  const reviewsHTML = modalProduct.reviews.map(r => {
    return `
      <div class="review-item">
        <div class="review-meta">
          <span class="review-author">${r.author}</span>
          <span class="stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span>
        </div>
        <p class="review-text">"${r.text}"</p>
      </div>
    `;
  }).join("");
  
  reviewsContainer.innerHTML = reviewsHTML;
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("active");
  modalProduct = null;
}

// --- Toast notification utility ---
function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background-color: var(--color-charcoal);
      color: var(--color-white);
      padding: 0.8rem 1.8rem;
      font-size: 0.9rem;
      font-weight: 500;
      border-radius: 30px;
      box-shadow: var(--shadow-lg);
      border: 1px solid var(--color-gold);
      z-index: 500;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s;
      opacity: 0;
      pointer-events: none;
      text-align: center;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateX(-50%) translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(100px)";
  }, 3500);
}
