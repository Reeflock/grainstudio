# Grain Studio - Tactile Hardware & Acoustic E-Commerce Platform

### Value Added Course – 253VACPMC201: Fundamentals of Website Development
**Institution:** Marian College Kuttikkanam (Autonomous), Peermade, Kerala – 685 531  
**Department:** PG Department of Computer Applications  
**Academic Year:** 2026 – 2027  

---

## 🚀 Project Overview
**Grain Studio** is an upscale, responsive, multi-page E-Commerce platform built exclusively using **HTML5, CSS3, and Bootstrap 5.3**, complemented by lightweight Vanilla JavaScript for interactive cart persistence and UI behaviors.

The website represents a boutique tactile electronics and studio audio hardware brand showcasing 8 products across 3 distinct categories with a seamless shopping experience from discovery to checkout.

---

## 📁 Project Directory Structure
```
busy-pythagoras/
├── index.html                    # 1. Home Page (Hero, Categories, Featured Hardware, Testimonials)
├── products.html                 # 2. Hardware Catalog (Live Search, Category & Price Filters, Sorting)
├── product-details.html          # 3. Product Details (Gallery, Steppers, Spec Tables, Review Tabs)
├── cart.html                     # 4. Shopping Cart (Dynamic Table, Steppers, Coupon System, Subtotal)
├── checkout.html                 # 5. Checkout Flow (Multi-step Form, Payment Methods, Order Confirmation)
├── about.html                    # 6. About Us Page (Mission, Guiding Pillars, Metric Counters, Team)
├── contact.html                  # 7. Contact Us Page (Contact Cards, Interactive Form, FAQ, Campus Map)
├── assets/
│   ├── css/
│   │   └── style.css             # Custom CSS customizing Bootstrap components & modern typography
│   ├── js/
│   │   ├── products-data.js      # Centralized product catalog data source (8 products)
│   │   └── main.js               # Cart state management (localStorage), Toasts, Modals
│   ├── images/                   # High-resolution product photos, banners & Marian College logo
│   └── screenshots/              # Captured high-definition page screenshots for the Project Report
└── README.md
```

---

## 🌟 Key Features & Requirements Met

| Requirement | Implementation Detail | Status |
| :--- | :--- | :---: |
| **Technologies** | Built using HTML5, modern CSS3, and Bootstrap 5.3 (no heavy external frontend frameworks) | ✅ Complete |
| **Minimum 6 Products** | 8 rich products with pricing, ratings, variants, and complete technical specifications | ✅ Complete (8 Products) |
| **Minimum 3 Categories** | 1. Audio & Sound, 2. Wearables & Health, 3. Smart Workstation | ✅ Complete (3 Categories) |
| **Minimum 6 Pages** | 7 fully functional pages: Home, Products, Product Details, Cart, Checkout, About Us, Contact Us | ✅ Complete (7 Pages) |
| **All Navigation Links** | Unified navbar & footer with working links, active page states, and dropdown menus | ✅ Complete |
| **Fully Responsive** | Optimized using Bootstrap grid & flexbox across mobile (390px), tablet, and desktop (1280px+) | ✅ Complete |
| **Component Customization** | Customized color palette, buttons, cards, hover animations, breadcrumbs, modals, toasts | ✅ Complete |
| **Proper Folder Structure** | Logical separation of `assets/css`, `assets/js`, `assets/images`, and root HTML files | ✅ Complete |

---

## 💻 How to View the Website
1. Open any of the HTML files directly in your web browser (e.g. double-click `index.html` or open in Chrome / Edge / Firefox).
2. Alternatively, run a local development server using Python:
   ```powershell
   python -m http.server 8000
   ```
   and navigate to `http://localhost:8000/index.html`.
