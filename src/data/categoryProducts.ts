export interface Product {
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  description: string;
  slug: string;
}

export interface Category {
  slug: string;
  label: string;
  description: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    slug: "racunari-i-komponente",
    label: "Računari i komponente",
    description: "Najširi izbor desktop računara, procesora, grafičkih kartica, matičnih ploča i ostalih komponenti.",
    products: [
      { name: "AMD Ryzen 5 5600X Procesor", price: 239, oldPrice: 299, discount: "Popust -20%", description: "6 jezgri, 12 threadova, 3.7GHz base clock, AM4 socket", slug: "amd-ryzen-5-5600x" },
      { name: "Intel Core i7-13700K", price: 459, oldPrice: 529, discount: "Popust -13%", description: "16 jezgri, 24 threada, 5.4GHz turbo, LGA1700", slug: "intel-i7-13700k" },
      { name: "NVIDIA GeForce RTX 4070", price: 699, oldPrice: 799, discount: "Popust -12%", description: "12GB GDDR6X, DLSS 3, Ray Tracing", slug: "rtx-4070" },
      { name: "ASUS TUF Gaming B550 Matična Ploča", price: 189, oldPrice: 219, discount: "Popust -14%", description: "AM4, DDR4, PCIe 4.0, USB 3.2", slug: "asus-tuf-b550" },
      { name: "Kingston 16GB DDR4 3200MHz RAM", price: 45, oldPrice: 55, discount: "Popust -18%", description: "CL16, 1.35V, XMP 2.0 podrška", slug: "kingston-16gb-ddr4" },
      { name: "WD Blue 1TB SSD NVMe M.2", price: 99, oldPrice: 129, discount: "Popust -23%", description: "Brzina čitanja do 3500MB/s, M.2 2280", slug: "wd-blue-1tb-ssd" },
      { name: "Corsair 650W PSU 80+ Bronze", price: 79, oldPrice: 99, discount: "Popust -20%", description: "ATX, polumodularno, tihi ventilator 120mm", slug: "corsair-650w-psu" },
      { name: "DeepCool AK620 CPU Cooler", price: 59, oldPrice: 69, discount: "Popust -15%", description: "Dual tower, 6 heatpipe-ova, tihi rad", slug: "deepcool-ak620" },
    ],
  },
  {
    slug: "oprema-za-racunare",
    label: "Oprema za računare",
    description: "Tastature, miševi, slušalice, web kamere, USB hubovi i ostala periferija.",
    products: [
      { name: "Logitech G502 HERO Gaming Miš", price: 69, oldPrice: 89, discount: "Popust -22%", description: "25K DPI senzor, 11 programabilnih tipki", slug: "logitech-g502" },
      { name: "Razer BlackWidow V3 Tastatura", price: 139, oldPrice: 169, discount: "Popust -18%", description: "Mehanička, Green switchevi, RGB", slug: "razer-blackwidow-v3" },
      { name: "HyperX Cloud II Slušalice", price: 89, oldPrice: 109, discount: "Popust -18%", description: "7.1 surround, memory foam jastučići", slug: "hyperx-cloud-ii" },
      { name: "Logitech C920 HD Pro Web Kamera", price: 79, oldPrice: 99, discount: "Popust -20%", description: "1080p, autofokus, stereo mikrofon", slug: "logitech-c920" },
      { name: "SteelSeries QcK Gaming Podloga", price: 19, oldPrice: 25, discount: "Popust -24%", description: "450x400mm, mikro-tkana površina", slug: "steelseries-qck" },
      { name: "USB-C Hub 7 u 1", price: 39, oldPrice: 49, discount: "Popust -20%", description: "HDMI, USB 3.0, SD/TF čitač, PD punjenje", slug: "usb-c-hub" },
    ],
  },
  {
    slug: "gaming-i-oprema",
    label: "Gaming i oprema",
    description: "Gaming stolice, kontroleri, VR oprema i sve za ultimativno gaming iskustvo.",
    products: [
      { name: "PlayStation 5 Konzola", price: 549, oldPrice: 599, discount: "Popust -8%", description: "825GB SSD, 4K gaming, DualSense kontroler", slug: "ps5" },
      { name: "Xbox Series X", price: 499, oldPrice: 549, discount: "Popust -9%", description: "1TB SSD, 4K/120fps, Game Pass Ready", slug: "xbox-series-x" },
      { name: "Gaming Stolica Ergonomska", price: 249, oldPrice: 319, discount: "Popust -22%", description: "Podesivi nasloni, lumbalna podrška, 150kg", slug: "gaming-stolica" },
      { name: "Xbox Wireless Controller", price: 59, oldPrice: 69, discount: "Popust -14%", description: "Bluetooth, 3.5mm jack, USB-C", slug: "xbox-controller" },
      { name: "Meta Quest 3 VR Headset", price: 549, oldPrice: 599, discount: "Popust -8%", description: "128GB, mixed reality, pancake leće", slug: "meta-quest-3" },
      { name: "Razer Kraken Gaming Slušalice", price: 79, oldPrice: 99, discount: "Popust -20%", description: "7.1 surround, gel-infused jastučići", slug: "razer-kraken" },
    ],
  },
  {
    slug: "laptopi-i-tableti",
    label: "Laptopi i tableti",
    description: "Poslovni laptopi, gaming laptopi, ultrabook-ovi i tableti vodećih brendova.",
    products: [
      { name: "ASUS ROG Strix G16 Gaming Laptop", price: 1299, oldPrice: 1499, discount: "Popust -13%", description: "i7-13650HX, RTX 4060, 16GB, 512GB SSD, 16\"", slug: "asus-rog-g16" },
      { name: "Lenovo IdeaPad Slim 3", price: 549, oldPrice: 649, discount: "Popust -15%", description: "Ryzen 5 7530U, 8GB, 256GB SSD, 15.6\" FHD", slug: "lenovo-ideapad-3" },
      { name: "HP Pavilion 15", price: 699, oldPrice: 799, discount: "Popust -12%", description: "i5-1335U, 16GB, 512GB SSD, 15.6\" FHD IPS", slug: "hp-pavilion-15" },
      { name: "Apple iPad 10. Generacija", price: 449, oldPrice: 499, discount: "Popust -10%", description: "A14 Bionic, 64GB, 10.9\" Liquid Retina", slug: "ipad-10" },
      { name: "Samsung Galaxy Tab S9 FE", price: 399, oldPrice: 449, discount: "Popust -11%", description: "Exynos 1380, 6GB, 128GB, 10.9\" TFT", slug: "galaxy-tab-s9-fe" },
      { name: "Acer Nitro 5 Gaming Laptop", price: 999, oldPrice: 1149, discount: "Popust -13%", description: "i5-12500H, RTX 3050, 8GB, 512GB SSD", slug: "acer-nitro-5" },
    ],
  },
  {
    slug: "mobiteli-i-pametni-satovi",
    label: "Mobiteli i pametni satovi",
    description: "Najnoviji pametni telefoni, pametni satovi i dodaci za mobilne uređaje.",
    products: [
      { name: "Samsung Galaxy S24 Ultra", price: 1399, oldPrice: 1499, discount: "Popust -7%", description: "Snapdragon 8 Gen 3, 12GB, 256GB, 200MP kamera", slug: "galaxy-s24-ultra" },
      { name: "Apple iPhone 15 Pro", price: 1299, oldPrice: 1399, discount: "Popust -7%", description: "A17 Pro, 256GB, 48MP kamera, Titanium", slug: "iphone-15-pro" },
      { name: "Xiaomi 14", price: 699, oldPrice: 799, discount: "Popust -12%", description: "Snapdragon 8 Gen 3, 12GB, 256GB, Leica kamera", slug: "xiaomi-14" },
      { name: "Samsung Galaxy Watch 6", price: 299, oldPrice: 349, discount: "Popust -14%", description: "44mm, AMOLED, GPS, SpO2, BIA senzor", slug: "galaxy-watch-6" },
      { name: "Apple Watch SE (2. Gen)", price: 279, oldPrice: 319, discount: "Popust -12%", description: "40mm, OLED, GPS, vodootporan 50m", slug: "apple-watch-se" },
      { name: "Xiaomi Redmi Note 13 Pro", price: 299, oldPrice: 349, discount: "Popust -14%", description: "Helio G99, 8GB, 256GB, 200MP kamera", slug: "redmi-note-13-pro" },
    ],
  },
  {
    slug: "televizori-i-audio",
    label: "Televizori i audio",
    description: "LED, OLED i QLED televizori, soundbar sistemi, zvučnici i audio oprema.",
    products: [
      { name: "Samsung 55\" QLED 4K TV", price: 799, oldPrice: 949, discount: "Popust -16%", description: "Quantum Dot, HDR10+, Smart TV, 120Hz", slug: "samsung-55-qled" },
      { name: "LG 65\" OLED C3", price: 1499, oldPrice: 1799, discount: "Popust -17%", description: "4K, 120Hz, Dolby Vision, webOS 23", slug: "lg-65-oled-c3" },
      { name: "Samsung Soundbar HW-B550", price: 199, oldPrice: 249, discount: "Popust -20%", description: "2.1ch, 410W, bežični subwoofer", slug: "samsung-soundbar" },
      { name: "JBL Flip 6 Bluetooth Zvučnik", price: 109, oldPrice: 129, discount: "Popust -16%", description: "IP67, 12h baterija, PartyBoost", slug: "jbl-flip-6" },
      { name: "Hisense 50\" 4K UHD TV", price: 449, oldPrice: 529, discount: "Popust -15%", description: "Dolby Vision, DTS Virtual:X, VIDAA", slug: "hisense-50-4k" },
      { name: "Sony WH-1000XM5 Slušalice", price: 349, oldPrice: 399, discount: "Popust -12%", description: "ANC, 30h baterija, Hi-Res Audio", slug: "sony-wh1000xm5" },
    ],
  },
  {
    slug: "hladjenje-i-grijanje",
    label: "Hlađenje i grijanje",
    description: "Klima uređaji, radijatori, ventilatori i oprema za regulaciju temperature.",
    products: [
      { name: "Midea 12000BTU Klima Inverter", price: 649, oldPrice: 749, discount: "Popust -13%", description: "A++, R32 gas, WiFi, tihi rad 22dB", slug: "midea-12000btu" },
      { name: "Samsung WindFree 9000BTU", price: 799, oldPrice: 899, discount: "Popust -11%", description: "Inverter, A+++, WiFi, bez direktnog protoka", slug: "samsung-windfree" },
      { name: "Uljni Radijator 2000W", price: 79, oldPrice: 99, discount: "Popust -20%", description: "11 rebara, 3 stupnja grijanja, termostat", slug: "uljni-radijator" },
      { name: "Keramički Grijač 2200W", price: 49, oldPrice: 59, discount: "Popust -17%", description: "Oscilirajući, daljinski, timer", slug: "keramicki-grijac" },
      { name: "Ventilator Stupni 45W", price: 59, oldPrice: 69, discount: "Popust -14%", description: "3 brzine, oscilacija, timer, daljinski", slug: "ventilator-stupni" },
      { name: "Gree 18000BTU Klima Inverter", price: 899, oldPrice: 1049, discount: "Popust -14%", description: "A+++, R32, WiFi ready, grijanje do -15°C", slug: "gree-18000btu" },
    ],
  },
  {
    slug: "sport-i-putovanje",
    label: "Sport i putovanje",
    description: "Električni romobili, bicikli, fitness oprema i putna oprema.",
    products: [
      { name: "Xiaomi Electric Scooter 4 Pro", price: 599, oldPrice: 699, discount: "Popust -14%", description: "25km/h, domet 56km, 10\" gume", slug: "xiaomi-scooter-4-pro" },
      { name: "Segway Ninebot F40E Romobil", price: 499, oldPrice: 579, discount: "Popust -14%", description: "25km/h, domet 40km, 10\" gume", slug: "segway-f40e" },
      { name: "Fitbit Charge 6 Fitness Tracker", price: 149, oldPrice: 179, discount: "Popust -17%", description: "GPS, SpO2, EKG, 7 dana baterije", slug: "fitbit-charge-6" },
      { name: "Kofer za putovanje L", price: 89, oldPrice: 109, discount: "Popust -18%", description: "75L, ABS, TSA brava, 4 točkića", slug: "kofer-l" },
      { name: "Garmin Edge 540 Bike Computer", price: 299, oldPrice: 349, discount: "Popust -14%", description: "GPS, navigacija, 26h baterija", slug: "garmin-edge-540" },
      { name: "Yoga Mat Premium 6mm", price: 29, oldPrice: 39, discount: "Popust -26%", description: "TPE materijal, anti-slip, 183x61cm", slug: "yoga-mat" },
    ],
  },
  {
    slug: "kucanski-aparati",
    label: "Kućanski aparati",
    description: "Veš mašine, frižideri, usisivači, mikrovalne i ostali kućanski aparati.",
    products: [
      { name: "Samsung Veš Mašina 8kg", price: 449, oldPrice: 529, discount: "Popust -15%", description: "1400rpm, A klasa, AddWash, inverter motor", slug: "samsung-ves-masina" },
      { name: "Bosch Frižider Kombinovani", price: 599, oldPrice: 699, discount: "Popust -14%", description: "344L, A++, NoFrost, VitaFresh", slug: "bosch-frizider" },
      { name: "Dyson V15 Bežični Usisivač", price: 699, oldPrice: 799, discount: "Popust -12%", description: "Laser Slim, 60min baterija, HEPA", slug: "dyson-v15" },
      { name: "Samsung Mikrovalna 23L", price: 99, oldPrice: 119, discount: "Popust -17%", description: "800W, keramička unutrašnjost, Quick Defrost", slug: "samsung-mikrovalna" },
      { name: "Philips Airfryer XXL", price: 179, oldPrice: 219, discount: "Popust -18%", description: "7.3L, Rapid Air, 5 programa", slug: "philips-airfryer" },
      { name: "iRobot Roomba i3 Robot Usisivač", price: 349, oldPrice: 399, discount: "Popust -12%", description: "WiFi, Alexa, mapiranje, samopražnjenje", slug: "roomba-i3" },
    ],
  },
  {
    slug: "ostale-kategorije",
    label: "Ostale kategorije",
    description: "Razna oprema, alati, igračke i ostali proizvodi.",
    products: [
      { name: "LED Traka RGB 5m", price: 19, oldPrice: 25, discount: "Popust -24%", description: "WiFi, Alexa/Google, 16M boja, muzički mod", slug: "led-traka-rgb" },
      { name: "Powerbank 20000mAh", price: 39, oldPrice: 49, discount: "Popust -20%", description: "USB-C, Quick Charge 3.0, 2 porta", slug: "powerbank-20000" },
      { name: "Bežični Punjač 15W", price: 25, oldPrice: 35, discount: "Popust -29%", description: "Qi, kompatibilan sa iPhone/Samsung", slug: "bezicni-punjac" },
      { name: "USB Flash Drive 128GB", price: 15, oldPrice: 19, discount: "Popust -21%", description: "USB 3.2, 400MB/s čitanje, metalno kućište", slug: "usb-flash-128gb" },
      { name: "HDMI Kabel 2m 4K", price: 9, oldPrice: 15, discount: "Popust -40%", description: "HDMI 2.1, 8K/60Hz, 4K/120Hz, eARC", slug: "hdmi-kabel-2m" },
      { name: "Webcam 1080p Full HD", price: 35, oldPrice: 45, discount: "Popust -22%", description: "Autofokus, mikrofon, clip mount", slug: "webcam-1080p" },
    ],
  },
];

// Map for TopCategories section
export const topCategorySlugMap: Record<string, string> = {
  "Gaming računari": "racunari-i-komponente",
  "Mobiteli": "mobiteli-i-pametni-satovi",
  "Televizori": "televizori-i-audio",
  "Klima uređaji": "hladjenje-i-grijanje",
  "Gaming laptopi": "laptopi-i-tableti",
  "Pametni satovi": "mobiteli-i-pametni-satovi",
  "Monitori": "oprema-za-racunare",
  "Električni romobili": "sport-i-putovanje",
};

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
