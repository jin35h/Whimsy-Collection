/**
 * Whimsy Collection - Master Products Catalog Data
 * Curated for Canadian Boutique Operations (GTA & Tri-Cities: Mississauga, Brampton, Toronto, Kitchener, Cambridge, Guelph)
 * IMPORTANT: NO PRICES ARE DISPLAYED ANYWHERE ON THE WEBSITE.
 * WHATSAPP DIRECT INQUIRY & ORDERING: +1 (705) 970-2169
 */

const WHIMSY_CONFIG = {
  brandName: "Whimsy Collection",
  tagline: "Where Style Meets Tradition",
  phoneRaw: "7059702169",
  phoneFormatted: "(705) 970-2169",
  whatsappNumber: "17059702169",
  whatsappUrl: "https://wa.me/17059702169",
  instagramUrl: "https://www.instagram.com/whimsy__collection/",
  instagramHandle: "@whimsy__collection",
  country: "Canada",
  province: "Ontario",
  serviceAreas: [
    { name: "Mississauga", zone: "Peel Region", badge: "Same/Next Day Drop" },
    { name: "Brampton", zone: "Peel Region", badge: "Same/Next Day Drop" },
    { name: "Toronto", zone: "Greater Toronto Area", badge: "Express Delivery" },
    { name: "Kitchener", zone: "Waterloo Region", badge: "Local Hand Delivery" },
    { name: "Cambridge", zone: "Waterloo Region", badge: "Local Hand Delivery" },
    { name: "Guelph", zone: "Wellington County", badge: "Direct Courier" }
  ],
  deliverySummary: "Exclusive direct local delivery & contactless drop across Mississauga, Brampton, Toronto, Kitchener, Cambridge & Guelph. No storefront overhead — personalized doorstep service with signature velvet packaging.",
  packagingNote: "Every piece arrives packaged in our signature rose-pink velvet travel pouch with a golden snap button and custom Whimsy seal.",
  getInquiryUrl: function(productName, sku) {
    const text = encodeURIComponent("Hi Whimsy Collection! ✨\nI would like to inquire about the current price, availability, and delivery options for:\n\n• Product: " + productName + "\n• SKU: " + sku + "\n\nPlease let me know how soon this can be delivered to my city in Ontario. Thank you!");
    return "https://wa.me/" + this.whatsappNumber + "?text=" + text;
  },
  getOrderUrl: function(productName, sku, city) {
    let loc = city ? " to " + city : " in Ontario";
    const text = encodeURIComponent("Hi Whimsy Collection! 🛍️\nI would like to ORDER the following item:\n\n• Product: " + productName + "\n• SKU: " + sku + "\n• Delivery Area: " + loc + "\n\nPlease share the price confirmation, payment details (e-Transfer), and delivery schedule. Thank you!");
    return "https://wa.me/" + this.whatsappNumber + "?text=" + text;
  },
  getGeneralChatUrl: function(msg) {
    const text = encodeURIComponent(msg || "Hi Whimsy Collection! I have a question regarding your jewelry collection and delivery in Ontario.");
    return "https://wa.me/" + this.whatsappNumber + "?text=" + text;
  }
};

const WHIMSY_PRODUCTS = [
  {
    "id": 1,
    "name": "Anklet - Silver CZ fringe anklet",
    "sku": "AK-FAX-150-001",
    "category": "Anklet",
    "pattern": "Silver CZ fringe anklet",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite anklet - silver cz fringe anklet featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle"
    ],
    "image": "assets/images/products/image109.jpg",
    "featured": true
  },
  {
    "id": 2,
    "name": "Bracelet - Gold-tone double-row CZ bangle",
    "sku": "BR-DRB-200-001",
    "category": "Bracelet",
    "pattern": "Gold-tone double-row CZ bangle",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite bracelet - gold-tone double-row cz bangle featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle"
    ],
    "image": "assets/images/products/image94.jpg",
    "featured": false
  },
  {
    "id": 3,
    "name": "Bracelet - Minimal stainless steel bangle",
    "sku": "BR-MBX-070-001",
    "category": "Bracelet",
    "pattern": "Minimal stainless steel bangle",
    "color": "Silver",
    "material": "Stainless Steel",
    "stock": 3,
    "description": "Exquisite bracelet - minimal stainless steel bangle featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel"
    ],
    "image": "assets/images/products/image103.jpg",
    "featured": false
  },
  {
    "id": 4,
    "name": "Bracelet - Silver CZ chain-link bangle",
    "sku": "BR-CLB-150-001",
    "category": "Bracelet",
    "pattern": "Silver CZ chain-link bangle",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite bracelet - silver cz chain-link bangle featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 5,
    "name": "Bracelet - Silver CZ circle-link bangle",
    "sku": "BR-CLB-160-001",
    "category": "Bracelet",
    "pattern": "Silver CZ circle-link bangle",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite bracelet - silver cz circle-link bangle featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle"
    ],
    "image": "assets/images/products/image97.jpg",
    "featured": false
  },
  {
    "id": 6,
    "name": "Bracelet - Silver charm bangle",
    "sku": "BR-CBX-115-001",
    "category": "Bracelet",
    "pattern": "Silver charm bangle",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 6,
    "description": "Exquisite bracelet - silver charm bangle featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/products/image104.jpg",
    "featured": false
  },
  {
    "id": 7,
    "name": "Bracelet - Silver graduated CZ bangle",
    "sku": "BR-GBX-120-001",
    "category": "Bracelet",
    "pattern": "Silver graduated CZ bangle",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 4,
    "description": "Exquisite bracelet - silver graduated cz bangle featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle"
    ],
    "image": "assets/images/products/image108.jpg",
    "featured": false
  },
  {
    "id": 8,
    "name": "Bracelet - Silver square CZ charm bracelet",
    "sku": "BR-SCB-105-001",
    "category": "Bracelet",
    "pattern": "Silver square CZ charm bracelet",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite bracelet - silver square cz charm bracelet featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle"
    ],
    "image": "assets/images/products/image134.jpg",
    "featured": true
  },
  {
    "id": 9,
    "name": "Bracelet - Silver triple-row CZ bangle",
    "sku": "BR-TRB-150-001",
    "category": "Bracelet",
    "pattern": "Silver triple-row CZ bangle",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite bracelet - silver triple-row cz bangle featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 10,
    "name": "Bracelet - Slim stainless steel stone bangle",
    "sku": "BR-SSB-075-001",
    "category": "Bracelet",
    "pattern": "Slim stainless steel stone bangle",
    "color": "Silver",
    "material": "Stainless Steel",
    "stock": 5,
    "description": "Exquisite bracelet - slim stainless steel stone bangle featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel"
    ],
    "image": "assets/images/products/image93.jpg",
    "featured": false
  },
  {
    "id": 11,
    "name": "Chain - Flat multi-strand silver chain",
    "sku": "CH-FMS-025-001",
    "category": "Chain",
    "pattern": "Flat multi-strand silver chain",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite chain - flat multi-strand silver chain featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/products/image89.jpg",
    "featured": false
  },
  {
    "id": 12,
    "name": "Chain - Gold chunky chain packet",
    "sku": "CH-CCX-090-001",
    "category": "Chain",
    "pattern": "Gold chunky chain packet",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite chain - gold chunky chain packet featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 13,
    "name": "Chain - Gold fine chain packet",
    "sku": "CH-FCX-080-001",
    "category": "Chain",
    "pattern": "Gold fine chain packet",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite chain - gold fine chain packet featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 14,
    "name": "Chain - Gold layered chain packet",
    "sku": "CH-LCX-170-001",
    "category": "Chain",
    "pattern": "Gold layered chain packet",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite chain - gold layered chain packet featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 15,
    "name": "Chain - Gold mesh chain packet",
    "sku": "CH-MCX-080-001",
    "category": "Chain",
    "pattern": "Gold mesh chain packet",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite chain - gold mesh chain packet featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": true
  },
  {
    "id": 16,
    "name": "Chain - Gold slim bangle/chain packet",
    "sku": "CH-SBC-050-001",
    "category": "Chain",
    "pattern": "Gold slim bangle/chain packet",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite chain - gold slim bangle/chain packet featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 17,
    "name": "Chain - Gold small-link chain packet",
    "sku": "CH-SLC-100-001",
    "category": "Chain",
    "pattern": "Gold small-link chain packet",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite chain - gold small-link chain packet featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 18,
    "name": "Chain - Rose-gold oval link chain",
    "sku": "CH-OLC-105-001",
    "category": "Chain",
    "pattern": "Rose-gold oval link chain",
    "color": "Rose Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite chain - rose-gold oval link chain featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 19,
    "name": "Earrings - 316L square crystal stud",
    "sku": "ER-3SC-011-001",
    "category": "Earrings",
    "pattern": "316L square crystal stud",
    "color": "Multicolor",
    "material": "Stainless Steel",
    "stock": 12,
    "description": "Exquisite earrings - 316l square crystal stud featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel",
      "Bestseller"
    ],
    "image": "assets/images/products/image95.jpg",
    "featured": false
  },
  {
    "id": 20,
    "name": "Earrings - Floral threader earring",
    "sku": "ER-FTE-060-001",
    "category": "Earrings",
    "pattern": "Floral threader earring",
    "color": "Multicolor",
    "material": "Fashion Jewelry",
    "stock": 4,
    "description": "Exquisite earrings - floral threader earring featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image107.jpg",
    "featured": false
  },
  {
    "id": 21,
    "name": "Earrings - Gold assorted CZ stud / huggie",
    "sku": "ER-SHX-050-001",
    "category": "Earrings",
    "pattern": "Gold assorted CZ stud / huggie",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 14,
    "description": "Exquisite earrings - gold assorted cz stud / huggie featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle",
      "Bestseller"
    ],
    "image": "assets/images/products/image138.jpg",
    "featured": false
  },
  {
    "id": 22,
    "name": "Earrings - Gold assorted fashion earring",
    "sku": "ER-EXX-060-001",
    "category": "Earrings",
    "pattern": "Gold assorted fashion earring",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 10,
    "description": "Exquisite earrings - gold assorted fashion earring featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image133.jpg",
    "featured": true
  },
  {
    "id": 23,
    "name": "Earrings - Gold assorted mini stud multipack",
    "sku": "ER-MSM-180-001",
    "category": "Earrings",
    "pattern": "Gold assorted mini stud multipack",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 3,
    "description": "Exquisite earrings - gold assorted mini stud multipack featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image116.jpg",
    "featured": false
  },
  {
    "id": 24,
    "name": "Earrings - Gold crystal geometric stud",
    "sku": "ER-CGS-030-001",
    "category": "Earrings",
    "pattern": "Gold crystal geometric stud",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 6,
    "description": "Exquisite earrings - gold crystal geometric stud featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image92.jpg",
    "featured": false
  },
  {
    "id": 25,
    "name": "Earrings - Gold curved huggie hoop",
    "sku": "ER-CHH-055-001",
    "category": "Earrings",
    "pattern": "Gold curved huggie hoop",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - gold curved huggie hoop featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 26,
    "name": "Earrings - Gold floral jhumka drop",
    "sku": "ER-FJD-085-001",
    "category": "Earrings",
    "pattern": "Gold floral jhumka drop",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite earrings - gold floral jhumka drop featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image121.jpg",
    "featured": false
  },
  {
    "id": 27,
    "name": "Earrings - Gold leaf pearl teardrop",
    "sku": "ER-LPT-075-001",
    "category": "Earrings",
    "pattern": "Gold leaf pearl teardrop",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - gold leaf pearl teardrop featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image101.jpg",
    "featured": false
  },
  {
    "id": 28,
    "name": "Earrings - Gold openwork hoop / huggie",
    "sku": "ER-OHH-030-001",
    "category": "Earrings",
    "pattern": "Gold openwork hoop / huggie",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - gold openwork hoop / huggie featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image90.jpg",
    "featured": false
  },
  {
    "id": 29,
    "name": "Earrings - Gold oval crystal drop",
    "sku": "ER-OCD-045-001",
    "category": "Earrings",
    "pattern": "Gold oval crystal drop",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - gold oval crystal drop featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image99.jpg",
    "featured": true
  },
  {
    "id": 30,
    "name": "Earrings - Gold pavé round drop",
    "sku": "ER-PRD-065-001",
    "category": "Earrings",
    "pattern": "Gold pavé round drop",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - gold pavé round drop featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image102.jpg",
    "featured": false
  },
  {
    "id": 31,
    "name": "Earrings - Gold square spiral stud",
    "sku": "ER-SSS-055-001",
    "category": "Earrings",
    "pattern": "Gold square spiral stud",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - gold square spiral stud featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 32,
    "name": "Earrings - Gold teardrop CZ dangle",
    "sku": "ER-TDX-065-001",
    "category": "Earrings",
    "pattern": "Gold teardrop CZ dangle",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite earrings - gold teardrop cz dangle featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle",
      "Bestseller"
    ],
    "image": "assets/images/products/image126.jpg",
    "featured": false
  },
  {
    "id": 33,
    "name": "Earrings - Gold twisted mini hoop",
    "sku": "ER-TMH-050-001",
    "category": "Earrings",
    "pattern": "Gold twisted mini hoop",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - gold twisted mini hoop featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image129.jpg",
    "featured": false
  },
  {
    "id": 34,
    "name": "Earrings - Gold-tone long charm drop",
    "sku": "ER-LCD-050-001",
    "category": "Earrings",
    "pattern": "Gold-tone long charm drop",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - gold-tone long charm drop featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image96.jpg",
    "featured": false
  },
  {
    "id": 35,
    "name": "Earrings - Iridescent pearl stud large",
    "sku": "ER-IPS-040-001",
    "category": "Earrings",
    "pattern": "Iridescent pearl stud large",
    "color": "Multicolor",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - iridescent pearl stud large featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image106.jpg",
    "featured": false
  },
  {
    "id": 36,
    "name": "Earrings - Iridescent pearl stud small",
    "sku": "ER-IPS-035-001",
    "category": "Earrings",
    "pattern": "Iridescent pearl stud small",
    "color": "Multicolor",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - iridescent pearl stud small featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": true
  },
  {
    "id": 37,
    "name": "Earrings - Multicolor floral CZ stud",
    "sku": "ER-MFS-080-001",
    "category": "Earrings",
    "pattern": "Multicolor floral CZ stud",
    "color": "Multicolor",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite earrings - multicolor floral cz stud featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle",
      "Bestseller"
    ],
    "image": "assets/images/products/image88.jpg",
    "featured": false
  },
  {
    "id": 38,
    "name": "Earrings - Multicolor square cluster stud",
    "sku": "ER-MSC-065-001",
    "category": "Earrings",
    "pattern": "Multicolor square cluster stud",
    "color": "Multicolor",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - multicolor square cluster stud featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image100.jpg",
    "featured": false
  },
  {
    "id": 39,
    "name": "Earrings - Pearl stud small",
    "sku": "ER-PSS-035-001",
    "category": "Earrings",
    "pattern": "Pearl stud small",
    "color": "Multicolor",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - pearl stud small featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 40,
    "name": "Earrings - Rose-gold heart graduated stud set",
    "sku": "ER-HGS-090-001",
    "category": "Earrings",
    "pattern": "Rose-gold heart graduated stud set",
    "color": "Rose Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite earrings - rose-gold heart graduated stud set featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image144.jpg",
    "featured": false
  },
  {
    "id": 41,
    "name": "Earrings - Rose-gold round graduated stud set",
    "sku": "ER-RGS-080-001",
    "category": "Earrings",
    "pattern": "Rose-gold round graduated stud set",
    "color": "Rose Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - rose-gold round graduated stud set featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image147.jpg",
    "featured": false
  },
  {
    "id": 42,
    "name": "Earrings - Rose-gold triangle graduated stud set",
    "sku": "ER-TGS-085-001",
    "category": "Earrings",
    "pattern": "Rose-gold triangle graduated stud set",
    "color": "Rose Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite earrings - rose-gold triangle graduated stud set featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image135.jpg",
    "featured": false
  },
  {
    "id": 43,
    "name": "Earrings - Silver turquoise charm hoop/drop",
    "sku": "ER-TCH-120-001",
    "category": "Earrings",
    "pattern": "Silver turquoise charm hoop/drop",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 4,
    "description": "Exquisite earrings - silver turquoise charm hoop/drop featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image110.jpg",
    "featured": true
  },
  {
    "id": 44,
    "name": "Earrings - Stainless steel assorted mini studs",
    "sku": "ER-MSX-008-001",
    "category": "Earrings",
    "pattern": "Stainless steel assorted mini studs",
    "color": "Silver",
    "material": "Stainless Steel",
    "stock": 24,
    "description": "Exquisite earrings - stainless steel assorted mini studs featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel",
      "Bestseller"
    ],
    "image": "assets/images/products/image112.jpg",
    "featured": false
  },
  {
    "id": 45,
    "name": "Earrings - Stainless steel screw-back stud",
    "sku": "ER-SBS-007-001",
    "category": "Earrings",
    "pattern": "Stainless steel screw-back stud",
    "color": "Silver",
    "material": "Stainless Steel",
    "stock": 12,
    "description": "Exquisite earrings - stainless steel screw-back stud featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel",
      "Bestseller"
    ],
    "image": "assets/images/products/image91.jpg",
    "featured": false
  },
  {
    "id": 46,
    "name": "Jewelry Set - Silver butterfly charm bracelet + pendant set",
    "sku": "JS-BCB-170-001",
    "category": "Jewelry Set",
    "pattern": "Silver butterfly charm bracelet + pendant set",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite jewelry set - silver butterfly charm bracelet + pendant set featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 47,
    "name": "Jewelry Set - Silver heart charm bracelet + pendant set",
    "sku": "JS-HCB-180-001",
    "category": "Jewelry Set",
    "pattern": "Silver heart charm bracelet + pendant set",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite jewelry set - silver heart charm bracelet + pendant set featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 48,
    "name": "Necklace - Gold assorted long pendant necklace",
    "sku": "NK-LPN-125-001",
    "category": "Necklace",
    "pattern": "Gold assorted long pendant necklace",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 7,
    "description": "Exquisite necklace - gold assorted long pendant necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image132.jpg",
    "featured": false
  },
  {
    "id": 49,
    "name": "Necklace - Gold assorted pendant necklace",
    "sku": "NK-PNX-140-001",
    "category": "Necklace",
    "pattern": "Gold assorted pendant necklace",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 4,
    "description": "Exquisite necklace - gold assorted pendant necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image143.jpg",
    "featured": false
  },
  {
    "id": 50,
    "name": "Necklace - Gold butterfly floral necklace",
    "sku": "NK-BFN-150-001",
    "category": "Necklace",
    "pattern": "Gold butterfly floral necklace",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite necklace - gold butterfly floral necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image139.jpg",
    "featured": true
  },
  {
    "id": 51,
    "name": "Necklace - Gold crescent pendant necklace",
    "sku": "NK-CPN-160-001",
    "category": "Necklace",
    "pattern": "Gold crescent pendant necklace",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite necklace - gold crescent pendant necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image136.jpg",
    "featured": false
  },
  {
    "id": 52,
    "name": "Necklace - Gold fine stainless chain necklace",
    "sku": "NK-FCN-180-001",
    "category": "Necklace",
    "pattern": "Gold fine stainless chain necklace",
    "color": "Gold",
    "material": "Stainless Steel",
    "stock": 1,
    "description": "Exquisite necklace - gold fine stainless chain necklace featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel",
      "Bestseller"
    ],
    "image": "assets/images/products/image128.jpg",
    "featured": false
  },
  {
    "id": 53,
    "name": "Necklace - Gold floral/bar stainless necklace",
    "sku": "NK-FBN-145-001",
    "category": "Necklace",
    "pattern": "Gold floral/bar stainless necklace",
    "color": "Gold",
    "material": "Stainless Steel",
    "stock": 2,
    "description": "Exquisite necklace - gold floral/bar stainless necklace featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel",
      "Bestseller"
    ],
    "image": "assets/images/products/image125.jpg",
    "featured": false
  },
  {
    "id": 54,
    "name": "Necklace - Gold geometric bar fringe necklace",
    "sku": "NK-GBF-150-001",
    "category": "Necklace",
    "pattern": "Gold geometric bar fringe necklace",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite necklace - gold geometric bar fringe necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image141.jpg",
    "featured": false
  },
  {
    "id": 55,
    "name": "Necklace - Gold geometric pendant necklace",
    "sku": "NK-GPN-130-001",
    "category": "Necklace",
    "pattern": "Gold geometric pendant necklace",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 3,
    "description": "Exquisite necklace - gold geometric pendant necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image146.jpg",
    "featured": false
  },
  {
    "id": 56,
    "name": "Necklace - Gold green rectangular pendant necklace",
    "sku": "NK-GRP-155-001",
    "category": "Necklace",
    "pattern": "Gold green rectangular pendant necklace",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite necklace - gold green rectangular pendant necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image137.jpg",
    "featured": false
  },
  {
    "id": 57,
    "name": "Necklace - Gold heart pendant snake-chain necklace",
    "sku": "NK-HPS-175-001",
    "category": "Necklace",
    "pattern": "Gold heart pendant snake-chain necklace",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite necklace - gold heart pendant snake-chain necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image124.jpg",
    "featured": true
  },
  {
    "id": 58,
    "name": "Necklace - Gold layered butterfly chain pendant",
    "sku": "NK-LBC-098-001",
    "category": "Necklace",
    "pattern": "Gold layered butterfly chain pendant",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite necklace - gold layered butterfly chain pendant featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image130.jpg",
    "featured": false
  },
  {
    "id": 59,
    "name": "Necklace - Gold layered heart/leaf necklace",
    "sku": "NK-LHL-110-001",
    "category": "Necklace",
    "pattern": "Gold layered heart/leaf necklace",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite necklace - gold layered heart/leaf necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image140.jpg",
    "featured": false
  },
  {
    "id": 60,
    "name": "Necklace - Gold minimalist pendant necklace",
    "sku": "NK-MPN-135-001",
    "category": "Necklace",
    "pattern": "Gold minimalist pendant necklace",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite necklace - gold minimalist pendant necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image145.jpg",
    "featured": false
  },
  {
    "id": 61,
    "name": "Necklace - Gold stainless pendant necklace",
    "sku": "NK-PNX-160-001",
    "category": "Necklace",
    "pattern": "Gold stainless pendant necklace",
    "color": "Gold",
    "material": "Stainless Steel",
    "stock": 3,
    "description": "Exquisite necklace - gold stainless pendant necklace featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel",
      "Bestseller"
    ],
    "image": "assets/images/products/image131.jpg",
    "featured": false
  },
  {
    "id": 62,
    "name": "Necklace - Gold stainless steel mini pendant necklace",
    "sku": "NK-MPN-065-001",
    "category": "Necklace",
    "pattern": "Gold stainless steel mini pendant necklace",
    "color": "Gold",
    "material": "Stainless Steel",
    "stock": 3,
    "description": "Exquisite necklace - gold stainless steel mini pendant necklace featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel",
      "Bestseller"
    ],
    "image": "assets/images/products/image115.jpg",
    "featured": false
  },
  {
    "id": 63,
    "name": "Necklace - Gold vine CZ pendant necklace",
    "sku": "NK-VPN-135-001",
    "category": "Necklace",
    "pattern": "Gold vine CZ pendant necklace",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite necklace - gold vine cz pendant necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle",
      "Bestseller"
    ],
    "image": "assets/images/products/image127.jpg",
    "featured": false
  },
  {
    "id": 64,
    "name": "Necklace - Rose-gold cherry pendant necklace",
    "sku": "NK-CPN-080-001",
    "category": "Necklace",
    "pattern": "Rose-gold cherry pendant necklace",
    "color": "Rose Gold",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite necklace - rose-gold cherry pendant necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image142.jpg",
    "featured": true
  },
  {
    "id": 65,
    "name": "Necklace - Silver small pendant necklace",
    "sku": "NK-SPN-040-001",
    "category": "Necklace",
    "pattern": "Silver small pendant necklace",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 5,
    "description": "Exquisite necklace - silver small pendant necklace featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image114.jpg",
    "featured": false
  },
  {
    "id": 66,
    "name": "Necklace - Stainless steel character pendant necklace",
    "sku": "NK-CPN-025-001",
    "category": "Necklace",
    "pattern": "Stainless steel character pendant necklace",
    "color": "Silver",
    "material": "Stainless Steel",
    "stock": 4,
    "description": "Exquisite necklace - stainless steel character pendant necklace featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel",
      "Bestseller"
    ],
    "image": "assets/images/products/image122.jpg",
    "featured": false
  },
  {
    "id": 67,
    "name": "Ring - Silver fashion ring",
    "sku": "RG-RXX-025-001",
    "category": "Ring",
    "pattern": "Silver fashion ring",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 12,
    "description": "Exquisite ring - silver fashion ring featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/products/image117.jpg",
    "featured": false
  },
  {
    "id": 68,
    "name": "Ring - Silver pavé fashion ring",
    "sku": "RG-PRX-030-001",
    "category": "Ring",
    "pattern": "Silver pavé fashion ring",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 12,
    "description": "Exquisite ring - silver pavé fashion ring featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/products/image119.jpg",
    "featured": false
  },
  {
    "id": 69,
    "name": "Ring - Silver slim fashion ring",
    "sku": "RG-SRX-020-001",
    "category": "Ring",
    "pattern": "Silver slim fashion ring",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 12,
    "description": "Exquisite ring - silver slim fashion ring featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/products/image118.jpg",
    "featured": false
  },
  {
    "id": 70,
    "name": "Ring - Silver solitaire fashion ring",
    "sku": "RG-SRX-033-001",
    "category": "Ring",
    "pattern": "Silver solitaire fashion ring",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 12,
    "description": "Exquisite ring - silver solitaire fashion ring featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/products/image120.jpg",
    "featured": false
  },
  {
    "id": 71,
    "name": "Bracelet - Gold assorted charm bracelet",
    "sku": "BR-GAC-130-001",
    "category": "Bracelet",
    "pattern": "Gold assorted charm bracelet",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 4,
    "description": "Exquisite bracelet - gold assorted charm bracelet featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/products/image148.jpg",
    "featured": true
  },
  {
    "id": 72,
    "name": "Other - Silver-tone crystal nose pin",
    "sku": "OT-CNP-010-001",
    "category": "Other",
    "pattern": "Silver-tone crystal nose pin",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 12,
    "description": "Exquisite other - silver-tone crystal nose pin featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/products/image149.jpg",
    "featured": false
  },
  {
    "id": 73,
    "name": "Earrings - Black floral pearl stud earrings",
    "sku": "ER-BFP-020-001",
    "category": "Earrings",
    "pattern": "Black floral pearl stud earrings",
    "color": "Black",
    "material": "Fashion Jewelry",
    "stock": 5,
    "description": "Exquisite earrings - black floral pearl stud earrings featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image150.jpg",
    "featured": false
  },
  {
    "id": 74,
    "name": "Anklet - Black bead charm anklet",
    "sku": "AK-BCA-025-001",
    "category": "Anklet",
    "pattern": "Black bead charm anklet",
    "color": "Black",
    "material": "Fashion Jewelry",
    "stock": 2,
    "description": "Exquisite anklet - black bead charm anklet featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 75,
    "name": "Other - Silver assorted charm jewelry packet",
    "sku": "OT-SCJ-035-001",
    "category": "Other",
    "pattern": "Silver assorted charm jewelry packet",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite other - silver assorted charm jewelry packet featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 76,
    "name": "Earrings - Gold textured hoop earrings",
    "sku": "ER-GTH-020-001",
    "category": "Earrings",
    "pattern": "Gold textured hoop earrings",
    "color": "Gold",
    "material": "Stainless Steel",
    "stock": 8,
    "description": "Exquisite earrings - gold textured hoop earrings featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel",
      "Bestseller"
    ],
    "image": "assets/images/products/image152.jpg",
    "featured": false
  },
  {
    "id": 77,
    "name": "Bracelet - Silver oval clasp bangle",
    "sku": "BR-OCB-275-001",
    "category": "Bracelet",
    "pattern": "Silver oval clasp bangle",
    "color": "Silver",
    "material": "Stainless Steel",
    "stock": 1,
    "description": "Exquisite bracelet - silver oval clasp bangle featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 78,
    "name": "Bracelet - Silver screw accent bangle",
    "sku": "BR-SAB-200-001",
    "category": "Bracelet",
    "pattern": "Silver screw accent bangle",
    "color": "Silver",
    "material": "Stainless Steel",
    "stock": 1,
    "description": "Exquisite bracelet - silver screw accent bangle featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": true
  },
  {
    "id": 79,
    "name": "Bracelet - Silver double-band clasp bangle",
    "sku": "BR-DCB-400-001",
    "category": "Bracelet",
    "pattern": "Silver double-band clasp bangle",
    "color": "Silver",
    "material": "Stainless Steel",
    "stock": 1,
    "description": "Exquisite bracelet - silver double-band clasp bangle featuring premium stainless steel construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Anti-Tarnish Stainless Steel"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 80,
    "name": "Earrings - Silver heart drop CZ earrings",
    "sku": "ER-HDC-045-001",
    "category": "Earrings",
    "pattern": "Silver heart drop CZ earrings",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite earrings - silver heart drop cz earrings featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle",
      "Bestseller"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 81,
    "name": "Earrings - Silver fan statement earrings",
    "sku": "ER-FSE-060-001",
    "category": "Earrings",
    "pattern": "Silver fan statement earrings",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite earrings - silver fan statement earrings featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 82,
    "name": "Earrings - Silver teardrop CZ earrings",
    "sku": "ER-TDC-045-001",
    "category": "Earrings",
    "pattern": "Silver teardrop CZ earrings",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite earrings - silver teardrop cz earrings featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle",
      "Bestseller"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 83,
    "name": "Earrings - Rose-gold heart CZ stud earrings",
    "sku": "ER-HCS-045-001",
    "category": "Earrings",
    "pattern": "Rose-gold heart CZ stud earrings",
    "color": "Rose Gold",
    "material": "Fashion Jewelry",
    "stock": 1,
    "description": "Exquisite earrings - rose-gold heart cz stud earrings featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Cubic Zirconia Sparkle",
      "Bestseller"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 84,
    "name": "Earrings - Silver translucent heart drop earrings",
    "sku": "ER-THD-020-001",
    "category": "Earrings",
    "pattern": "Silver translucent heart drop earrings",
    "color": "Silver",
    "material": "Fashion Jewelry",
    "stock": 4,
    "description": "Exquisite earrings - silver translucent heart drop earrings featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image155.jpg",
    "featured": false
  },
  {
    "id": 85,
    "name": "Earrings - Oxidized assorted stud earrings",
    "sku": "ER-OAS-022-001",
    "category": "Earrings",
    "pattern": "Oxidized assorted stud earrings",
    "color": "Oxidized Silver",
    "material": "Fashion Jewelry",
    "stock": 6,
    "description": "Exquisite earrings - oxidized assorted stud earrings featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": true
  },
  {
    "id": 86,
    "name": "Other - Oxidized assorted nose pin",
    "sku": "OT-OAN-011-001",
    "category": "Other",
    "pattern": "Oxidized assorted nose pin",
    "color": "Oxidized Silver",
    "material": "Fashion Jewelry",
    "stock": 12,
    "description": "Exquisite other - oxidized assorted nose pin featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Hand-Curated"
    ],
    "image": "assets/images/hero-flatlay.png",
    "featured": false
  },
  {
    "id": 87,
    "name": "Earrings - Gold assorted mini hoop earrings",
    "sku": "ER-AMH-035-001",
    "category": "Earrings",
    "pattern": "Gold assorted mini hoop earrings",
    "color": "Gold",
    "material": "Fashion Jewelry",
    "stock": 6,
    "description": "Exquisite earrings - gold assorted mini hoop earrings featuring premium fashion jewelry construction. Designed for both everyday festive elegance and special occasions. Hand-inspected and shipped in our signature Whimsy velvet travel pouch.",
    "tags": [
      "Bestseller"
    ],
    "image": "assets/images/products/image157.jpg",
    "featured": false
  }
];

// Utility functions for UI filtering
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WHIMSY_CONFIG, WHIMSY_PRODUCTS };
}
