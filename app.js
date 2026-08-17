// --- Deccan Gold Spice E-Commerce Core JavaScript ---

// 1. Product Database
const products = [
  {
    id: "chilli_powder",
    name: "Chilli Powder",
    category: "Ground Spices",
    categoryKey: "ground",
    origin: "Guntur, Andhra Pradesh, India",
    description: "Finely ground from premium sun-dried red chilies, this powder delivers a bright crimson color and a bold, sharp heat to elevate any curry or marinade.",
    aroma: "Pungent, sharp, and intensely warm.",
    tasteProfile: "Vibrant, biting heat with a clean and smoky finish.",
    usage: "Dust into tempering oils, hot curries, or yogurt marinades for a classic spicy touch.",
    basePriceUSD: 7.50,
    rating: 4.8,
    reviewCount: 124,
    image: "assets/chili.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Aarav K. (Mumbai)", rating: 5, text: "Excellent heat level and brilliant red color! Truly export quality." },
      { author: "Elen W. (Chicago)", rating: 4, text: "A small pinch is enough to heat up the whole curry. Fresh and potent." }
    ]
  },
  {
    id: "turmeric_powder",
    name: "Turmeric Powder",
    category: "Ground Spices",
    categoryKey: "ground",
    origin: "Sangli, Maharashtra, India",
    description: "Famous for its vibrant golden color and exceptionally high curcumin content, our Salem turmeric is stone-ground to preserve its powerful wellness and culinary properties.",
    aroma: "Earthy, woody, and warm with a hint of ginger.",
    tasteProfile: "Peppery, mildly bitter, and warm with an aromatic finish.",
    usage: "Whisk into warm milk for golden tea, stir into lentil soups, or sprinkle over roasted potatoes.",
    basePriceUSD: 6.80,
    rating: 4.9,
    reviewCount: 195,
    image: "assets/turmeric.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Ananya S. (Delhi)", rating: 5, text: "This has a very deep yellow color, not like regular supermarket turmeric. Highly recommend!" },
      { author: "Hans M. (Munich)", rating: 5, text: "Very fresh aroma. The high curcumin level really shows in the rich golden color." }
    ]
  },
  {
    id: "garam_masala",
    name: "Garam Masala",
    category: "Signature Blends",
    categoryKey: "blends",
    origin: "Old Delhi, India",
    description: "A royal family blend of 15 aromatic spices, including cinnamon, mace, nutmeg, and black cardamom, slow-roasted and ground to add a warm finish to your dishes.",
    aroma: "Intensely sweet-spicy, aromatic, and warming.",
    tasteProfile: "Complex, sweet-savory, and deeply peppery without sharp chili heat.",
    usage: "Sprinkle a pinch over curries, stews, or roasted meats in the final 5 minutes of cooking.",
    basePriceUSD: 9.50,
    rating: 4.9,
    reviewCount: 220,
    image: "assets/garam_masala.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Rohan P. (Nagpur)", rating: 5, text: "The perfect finish for my curries. The mace and cinnamon fragrance is beautiful." },
      { author: "Emily T. (London)", rating: 5, text: "Extremely aromatic. Best garam masala I have purchased online." }
    ]
  },
  {
    id: "goda_masala",
    name: "Nagpur Goda Masala",
    category: "Signature Blends",
    categoryKey: "blends",
    origin: "Nagpur, Maharashtra, India",
    description: "A traditional Maharashtrian sweet-stone blend using dry coconut, sesame seeds, stone flower (dagad phool), and niger seeds. Essential for authentic Nagpur curries.",
    aroma: "Toasted, nutty, deeply earthy, and aromatic.",
    tasteProfile: "Mildly sweet, savory, and rich with toasted coconut and stone flower notes.",
    usage: "Add to traditional Maharashtrian amti, kala vatana curries, or dry potato masales.",
    basePriceUSD: 10.50,
    rating: 4.95,
    reviewCount: 155,
    image: "assets/biryani_blend.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Meena G. (Nagpur)", rating: 5, text: "Finally an authentic goda masala online! It has the perfect dry coconut and stone flower balance." },
      { author: "Vijay D. (Pune)", rating: 5, text: "Reminds me of my mother's homemade masala. Essential for Maharashtrian cooking." }
    ]
  },
  {
    id: "saoji_masala",
    name: "Saoji Masala",
    category: "Signature Blends",
    categoryKey: "blends",
    origin: "Nagpur, Maharashtra, India",
    description: "Our signature Nagpur Saoji spice mix is crafted for the legendary, extremely spicy Saoji cuisine. A fiery blend of 24 spices that packs an authentic punch of flavor.",
    aroma: "Richly aromatic, pungent, heavily toasted, and spicy.",
    tasteProfile: "Robust, intensely hot, and complex with strong clove, black pepper, and stone flower notes.",
    usage: "The heart of Nagpur's famous Saoji mutton, chicken, or vegetarian curries.",
    basePriceUSD: 11.00,
    rating: 4.9,
    reviewCount: 180,
    image: "assets/hero_spices.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Devendra S. (Nagpur)", rating: 5, text: "Extremely fiery and authentic! The real taste of Nagpur Saoji cuisine." },
      { author: "Sunita W. (Mumbai)", rating: 5, text: "Beautifully spice-heavy and hot. Ideal for a proper spicy chicken curry." }
    ]
  },
  {
    id: "bay_leaf",
    name: "Bay Leaf",
    category: "Whole Spices",
    categoryKey: "whole",
    origin: "Himalayan Foothills, India",
    description: "Aromatic tejpatta (Indian bay leaves) harvested from mountain forests. They offer a more herbal, cinnamon-like flavor compared to European bay leaves.",
    aroma: "Sweet, clove-like, and reminiscent of warm cinnamon bark.",
    tasteProfile: "Herbal, delicate, with sweet woody undertones.",
    usage: "Drop whole leaves into warm oil before tempering, or simmer in basmati rice, biryanis, and lentil curries.",
    basePriceUSD: 5.50,
    rating: 4.75,
    reviewCount: 88,
    image: "assets/heritage.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Jean L. (Paris)", rating: 5, text: "Much more fragrant and cinnamon-like than bay laurel leaves. Excellent." },
      { author: "Sanjay R. (Nagpur)", rating: 4, text: "Clean, fresh whole leaves. Perfect for biryani seasoning." }
    ]
  },
  {
    id: "whole_red_chilli",
    name: "Whole Red Chilli 🌶️",
    category: "Whole Spices",
    categoryKey: "whole",
    origin: "Nagpur Region, Maharashtra, India",
    description: "Premium sun-dried whole red chilies with stems. They release an authentic, beautiful heat when toasted in hot oil or tempered.",
    aroma: "Sharp, pungent, and sun-toasted.",
    tasteProfile: "Bold, intense heat with a clean, sharp finish.",
    usage: "Use whole in tempering (tadka) for dals, dry vegetable stir-fries, or grind into fresh chili pastes.",
    basePriceUSD: 8.00,
    rating: 4.85,
    reviewCount: 112,
    image: "assets/chili.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Kunal M. (Nagpur)", rating: 5, text: "Beautifully sun-dried with great heat. Excellent for tempering tadka." },
      { author: "Sarah B. (Sydney)", rating: 5, text: "Very fresh and fiery red. Adds a great look to my tempered dals." }
    ]
  },
  {
    id: "cardamom_pods",
    name: "Cardamom Pods",
    category: "Whole Spices",
    categoryKey: "whole",
    origin: "Idukki, Kerala, India",
    description: "Plump, premium green cardamom pods hand-picked at peak oil content. Known for its intense fragrance and therapeutic sweet-spicy notes.",
    aroma: "Deeply herbal, sweet, and floral with clean eucalyptus notes.",
    tasteProfile: "Citrusy, warm, sweet, and highly aromatic.",
    usage: "Lightly crush pods to release seeds for chai, rice pudding (kheer), or slow-cooked meat dishes.",
    basePriceUSD: 13.50,
    rating: 4.95,
    reviewCount: 167,
    image: "assets/cardamom.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Kofi A. (Accra)", rating: 5, text: "The green pods are plump and full of seeds. Very rich aroma in my tea." },
      { author: "Priya V. (Bangalore)", rating: 5, text: "Incredibly sweet and fragrant. The quality is top notch." }
    ]
  },
  {
    id: "black_pepper",
    name: "Black Pepper",
    category: "Whole Spices",
    categoryKey: "whole",
    origin: "Malabar Coast, Kerala, India",
    description: "Malabar Tellicherry black peppercorns, left on the vine longer to grow large and develop deep, complex essential oils and a sharp bite.",
    aroma: "Pungent, woodsy, and intensely warm.",
    tasteProfile: "Crisp, bold peppery heat with complex citrus and pine undertones.",
    usage: "Crush fresh over steaks, eggs, creamy pasta, or toss whole peppercorns into hot pots and curries.",
    basePriceUSD: 8.20,
    rating: 4.9,
    reviewCount: 144,
    image: "assets/hero_spices.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "David G. (New York)", rating: 5, text: "Tellicherry pepper at its best. Great fruity heat and woody spice." },
      { author: "Milos H. (Prague)", rating: 5, text: "Very fresh bite when crushed. Much better than pre-ground pepper." }
    ]
  },
  {
    id: "cloves",
    name: "Cloves",
    category: "Whole Spices",
    categoryKey: "whole",
    origin: "Kanyakumari, Tamil Nadu, India",
    description: "Hand-selected, fully formed whole cloves with heads intact. They are rich in eugenol oil, providing a powerful aromatic and therapeutic punch.",
    aroma: "Intensely warm, sweet, woody, and pungent.",
    tasteProfile: "Deeply sweet, hot, and slightly numbing with rich woody depth.",
    usage: "Stud into roasted meats, infuse whole cloves in hot cider or chai, or include in biryani rice water.",
    basePriceUSD: 9.00,
    rating: 4.8,
    reviewCount: 98,
    image: "assets/gift_box.jpg",
    weights: [
      { name: "50g", multiplier: 0.6 },
      { name: "100g", multiplier: 1.0 },
      { name: "250g", multiplier: 2.2 }
    ],
    reviews: [
      { author: "Nisha J. (Kolkata)", rating: 5, text: "Large whole cloves with full heads. Very strong eugenol aroma." },
      { author: "Tom S. (Denver)", rating: 5, text: "Highly aromatic. Essential for baking and spice tea blends." }
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
