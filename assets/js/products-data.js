// Grain Studio Product Catalog Data Source
const PRODUCTS = [
  {
    id: 1,
    name: "Grain Studio ANC Max Over-Ear",
    category: "audio",
    categoryName: "Audio & Sound",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviewCount: 238,
    badge: "Bestseller",
    badgeColor: "primary",
    image: "assets/images/headphones.jpg",
    description: "Studio-tuned active noise cancellation with 40-hour ultra battery life and Hi-Res spatial acoustic drivers.",
    fullDescription: "Experience sound in its purest texture with Grain Studio ANC Max. Featuring custom-tuned 40mm bio-cellulose drivers, hybrid active noise cancellation, and memory foam cushions wrapped in breathable protein leather, these headphones deliver acoustic fidelity whether in a bustling creative studio or on travel.",
    features: [
      "Hybrid Active Noise Cancellation with Natural Transparency Mode",
      "Up to 40 hours of playtime with rapid USB-C charging (10 min = 5 hours)",
      "Multi-point Bluetooth 5.3 connection for seamless device switching",
      "Tactile aluminum dial controls for volume and intuitive playback",
      "Built-in quad beamforming microphones with acoustic noise filtering"
    ],
    specs: {
      "Driver Size": "40mm Custom Bio-Cellulose",
      "Frequency Response": "16Hz - 40,000Hz (Hi-Res Audio)",
      "Bluetooth Version": "Bluetooth 5.3 + LE Audio",
      "Battery Life": "40 Hours (ANC On) / 55 Hours (ANC Off)",
      "Weight": "250g",
      "Warranty": "2 Years Official Studio Warranty"
    },
    inStock: true,
    stockCount: 24,
    colors: ["Space Gray", "Midnight Black", "Silver Mist"]
  },
  {
    id: 2,
    name: "Grain Pods Pro Wireless Earbuds",
    category: "audio",
    categoryName: "Audio & Sound",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviewCount: 184,
    badge: "Hot Deal",
    badgeColor: "danger",
    image: "assets/images/earbuds.jpg",
    description: "Crisp acoustic fidelity with adaptive ANC, IPX7 waterproof rating, and pebble matte wireless charging case.",
    fullDescription: "Grain Pods Pro bring studio mastering quality into a featherlight form factor. Designed with ergonomic silicone tips for all-day comfort and water-resistant nano-coating, these wireless earbuds are ideal for daily commutes, workout sessions, and extended conference calls.",
    features: [
      "Adaptive Active Noise Cancellation & Spatial Audio Support",
      "IPX7 sweat and water resistance rating for rigorous workouts",
      "Qi-certified wireless charging and USB-C fast charging case",
      "Total 32 hours battery life (8 hours per charge + 24 hours case)",
      "Capacitive squeeze controls for playback, ANC toggle, and assistant"
    ],
    specs: {
      "Water Resistance": "IPX7 Waterproof Submersible",
      "Battery Life": "8h (Earbuds) + 24h (Charging Case)",
      "Charging": "Qi Wireless Induction + USB-C",
      "Codecs Supported": "AAC, SBC, aptX Adaptive, LDAC",
      "Weight": "4.8g per earbud",
      "Warranty": "1 Year Manufacturer Warranty"
    },
    inStock: true,
    stockCount: 35,
    colors: ["Pearl White", "Obsidian Black"]
  },
  {
    id: 3,
    name: "Grain Wave360 Portable Bluetooth Speaker",
    category: "audio",
    categoryName: "Audio & Sound",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviewCount: 96,
    badge: "Trending",
    badgeColor: "success",
    image: "assets/images/speaker.jpg",
    description: "360-degree immersive acoustic projection with 24-hour battery and rugged IP67 waterproof build.",
    fullDescription: "Pump rich, room-filling sound indoors or outdoors with Grain Wave360. Packed with dual passive radiators and dual full-range drivers, it pumps out 360-degree sound with deep, distortion-free low end. The IP67 rating ensures dust, sand, and pool splashes won't pause the rhythm.",
    features: [
      "True 360-degree omnidirectional acoustic diffusion",
      "IP67 dustproof and waterproof build that floats on water",
      "Massive 5,200mAh battery providing up to 24 hours of playback",
      "StudioSync mode allows stereo pairing between dual Wave360 units",
      "Integrated emergency power bank feature to recharge your phone"
    ],
    specs: {
      "Output Power": "30W RMS (Peak 45W)",
      "Battery Capacity": "5,200 mAh (Up to 24 Hours)",
      "Waterproof Rating": "IP67 Submersible",
      "Connectivity": "Bluetooth 5.2, AUX 3.5mm",
      "Dimensions": "180 x 75 x 75 mm",
      "Warranty": "1 Year Official Warranty"
    },
    inStock: true,
    stockCount: 19,
    colors: ["Ocean Blue", "Matte Black", "Forest Green"]
  },
  {
    id: 4,
    name: "Grain Chronos Ultra Titanium Watch",
    category: "wearables",
    categoryName: "Wearables",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviewCount: 312,
    badge: "Top Rated",
    badgeColor: "warning",
    image: "assets/images/smartwatch.jpg",
    description: "Grade-5 aerospace titanium bezel, vibrant 1.43” AMOLED screen, ECG monitor, and dual-frequency GPS.",
    fullDescription: "Engineered for creators, athletes, and explorers, the Grain Chronos Ultra fuses rugged durability with laboratory-grade biosensors. Monitor your heart rate variability, blood oxygen, sleep architecture, and stress levels with precision optical telemetry.",
    features: [
      "1.43-inch Always-On AMOLED Display with 1000 nits peak brightness",
      "Aerospace Grade-5 Titanium chassis with sapphire crystal glass",
      "Real-time ECG, SpO2, sleep stages, and heart rate variability tracking",
      "Dual-frequency multi-satellite GPS for ultra-accurate path tracking",
      "14 days battery life in standard mode, 48 hours in continuous GPS mode"
    ],
    specs: {
      "Display": "1.43-inch AMOLED (466 x 466 px, 326 PPI)",
      "Casing": "Grade-5 Titanium & Sapphire Crystal",
      "Water Resistance": "5 ATM + IP68 (50m water resistant)",
      "Battery Life": "Up to 14 Days Typical Use",
      "Sensors": "ECG, SpO2, PPG Heart Rate, Barometer, Compass",
      "Warranty": "2 Years Official Warranty"
    },
    inStock: true,
    stockCount: 15,
    colors: ["Titanium Gray", "Carbon Black", "Starlight Silver"]
  },
  {
    id: 5,
    name: "Grain Band Pro Activity Tracker",
    category: "wearables",
    categoryName: "Wearables",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviewCount: 140,
    badge: "Great Value",
    badgeColor: "info",
    image: "assets/images/fitness-band.jpg",
    description: "Slim, lightweight fitness band with continuous health monitoring and 18-day extended battery life.",
    fullDescription: "Stay active, mindful, and connected around the clock with the featherlight Grain Band Pro. Weighing just 21 grams, it provides unobtrusive 24/7 fitness tracking, step count, calories burned, sleep quality metrics, and silent haptic notifications.",
    features: [
      "Curved 1.1-inch color OLED touchscreen display",
      "18-day battery life on a single magnetic snap charge",
      "30+ dedicated workout and sports tracking modes",
      "SpO2 oxygen saturation monitoring and recovery metrics",
      "Smart vibration notifications for calls, messages, and calendar alarms"
    ],
    specs: {
      "Weight": "21g (with strap)",
      "Display": "1.10-inch AMOLED 126 x 294 pixels",
      "Battery Life": "Up to 18 Days",
      "Water Resistance": "5 ATM Water Resistance",
      "Compatibility": "Android 7.0+ / iOS 12.0+",
      "Warranty": "1 Year Warranty"
    },
    inStock: true,
    stockCount: 42,
    colors: ["Graphite Black", "Soft Rose", "Navy Blue"]
  },
  {
    id: 6,
    name: "Grain Arc Smart Ambient Desk Lamp",
    category: "workstation",
    categoryName: "Smart Workstation",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviewCount: 115,
    badge: "Popular",
    badgeColor: "primary",
    image: "assets/images/desk-lamp.jpg",
    description: "Circadian rhythm adaptive lighting, stepless touch dimming, and integrated Qi wireless charging base.",
    fullDescription: "Transform your workstation into an oasis of focus and serenity with the Grain Arc. Featuring dual-hinge architectural aluminum construction, CRI > 95 daylight-accurate LED illumination, and built-in 15W Qi wireless fast charging on the base, it reduces eye strain and declutters your desktop.",
    features: [
      "Circadian mode automatically shifts color temperature from 2700K to 6500K",
      "Ultra-high Color Rendering Index (CRI > 95) for natural color accuracy",
      "Integrated 15W Qi fast charging base for smartphones and wireless earbuds",
      "Smooth capacitive touch slider for stepless brightness and warmth control",
      "Memory function restores your exact favorite setting upon powering on"
    ],
    specs: {
      "Luminous Flux": "1,000 Lumens Max",
      "Color Temperature": "2700K - 6500K Stepless",
      "Power Input": "USB-C PD 30W Power Adapter Included",
      "Wireless Output": "15W Fast Charge Qi Base",
      "Material": "Anodized Aerospace Aluminum Alloy",
      "Warranty": "2 Years Official Warranty"
    },
    inStock: true,
    stockCount: 18,
    colors: ["Space Gray", "Silver Frost", "Matte White"]
  },
  {
    id: 7,
    name: "Grain MagDock 3-in-1 Wireless Stand",
    category: "workstation",
    categoryName: "Smart Workstation",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviewCount: 205,
    badge: "Must Have",
    badgeColor: "secondary",
    image: "assets/images/wireless-charger.jpg",
    description: "Simultaneously fast-charge iPhone/Smartphone, Smartwatch, and wireless earbuds with foldable travel design.",
    fullDescription: "Tangle-free charging made architectural. The Grain MagDock 3-in-1 station snaps securely into magnetic alignment, charging your phone, smartwatch, and wireless earbuds concurrently with intelligent power regulation and advanced heat dissipation.",
    features: [
      "Powerful MagSafe magnetic snap for horizontal or vertical viewing",
      "Fast 15W charging for phone, 5W for watch, and 5W for earbuds",
      "Ultra-compact foldable hinge folds flat for effortless travel",
      "Foreign object detection, over-voltage, and short-circuit safety systems",
      "Soft breathing LED ambient status indicator with night off toggle"
    ],
    specs: {
      "Total Power Output": "25W Max",
      "Phone Output": "15W / 10W / 7.5W / 5W",
      "Watch Output": "5W",
      "Earbuds Output": "5W",
      "Input Port": "USB Type-C",
      "Warranty": "1 Year Manufacturer Warranty"
    },
    inStock: true,
    stockCount: 50,
    colors: ["Midnight Black", "Alabaster White"]
  },
  {
    id: 8,
    name: "Grain Mech84 Tactile Mechanical Keyboard",
    category: "workstation",
    categoryName: "Smart Workstation",
    price: 119.99,
    originalPrice: 149.99,
    rating: 4.9,
    reviewCount: 167,
    badge: "New Arrival",
    badgeColor: "success",
    image: "assets/images/keyboard.jpg",
    description: "Hot-swappable tactile switches, per-key RGB backlighting, CNC aluminum body, and multi-mode wireless.",
    fullDescription: "Crafted for developers, writers, and designers, the Grain Mech84 delivers sensational acoustic thock and buttery smooth keystrokes. Features hot-swappable PCB sockets, sound-dampening silicone gaskets, high-density PBT keycaps, and triple-mode connectivity (2.4GHz, Bluetooth 5.1, USB-C).",
    features: [
      "Hot-swappable 5-pin switch sockets (Pre-lubed tactile switches)",
      "Triple connectivity: Low-latency 2.4GHz wireless, Bluetooth 5.1, & USB-C",
      "Gasket-mounted structure with sound-absorbing Poron dampening foam",
      "Durable oil-resistant double-shot PBT keycaps in cherry profile",
      "4,000mAh rechargeable lithium battery for up to 200 hours of typing"
    ],
    specs: {
      "Layout": "75% Compact (84 Keys)",
      "Switches": "Pre-lubed Tactile Brown / Linear Red",
      "Backlight": "South-facing 16.8M Color RGB",
      "Battery": "4,000 mAh Rechargeable",
      "Weight": "850g",
      "Warranty": "2 Years Official Warranty"
    },
    inStock: true,
    stockCount: 12,
    colors: ["Cyber Slate", "Chalk White"]
  }
];

// Helper functions for catalog queries
function getAllProducts() {
  return PRODUCTS;
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

function getFeaturedProducts(limit = 4) {
  return PRODUCTS.slice(0, limit);
}
