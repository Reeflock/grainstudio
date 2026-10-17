# Grain Studio

Grain Studio is a responsive, multi-page e‑commerce front-end showcasing boutique tactile electronics and studio audio hardware. This repository contains a small static website built with HTML5, CSS3 and Bootstrap 5.3 and a bit of lightweight vanilla JavaScript to handle product data and client-side cart interactions.

This project was created as a course assignment and also works as a compact demo storefront you can run locally or host as static files.

---

## Live preview

Visit the live website: Grain Studio

Open index.html in a browser or serve the site locally (instructions below). There is no server-side backend — all product data and cart state are handled in the client.

---

## Features

- 7 pages: Home, Products (catalog), Product Details, Cart, Checkout, About, Contact
- Client-side product catalog (products-data.js) with 8 sample products in 3 categories
- Search, category filtering, price sorting on the Products page
- Product gallery, specifications and reviews on the Product Details page
- Cart state persisted to localStorage with quantity steppers, coupon placeholder and subtotal calculation
- Responsive layout using Bootstrap 5.3 (mobile → desktop)
- Accessible and semantic HTML structure where practical

---

## Project structure

```
grainstudio/
├── index.html
├── products.html
├── product-details.html
├── cart.html
├── checkout.html
├── about.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── products-data.js
│   │   └── main.js
│   ├── images/
│   └── screenshots/
└── README.md
```

---

## How to run locally

You can open the HTML files directly by double-clicking them, or run a simple static server from the project root.

With Python 3:

```bash
python -m http.server 8000
# then open http://localhost:8000/index.html
```

With Node (http-server):

```bash
npm install -g http-server
http-server -c-1
# then open the shown URL in your browser
```

---

## Notes for maintainers

- Product data is stored in `assets/js/products-data.js`. Edit that file to add, remove or change products.
- Cart behaviour is implemented in `assets/js/main.js` and persisted to `localStorage` under a project-specific key.
- Images are in `assets/images/`. Use optimized JPG/WEBP files for best performance.

---

## Contributing

This is a small static demo. If you want to contribute improvements (UI tweaks, accessibility fixes, or new sample products), open a pull request with a clear description of changes.

---

## License

This repository is provided for educational/demo purposes. Add a license file if you want to reuse or publish the code under a specific license.
