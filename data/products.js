// =====================================================
// TUTIBREATH БАЗА ТОВАРОВ
// Все данные о товарах меняйте в основном в этом файле.
// =====================================================
const PRODUCTS = [
  {
    id:"p1",
    type:"perfume",
    category:"на_разлив",
    marka: "Lanvin",
    name:"Lanvin Marry me",
    tags:["lanvin","marry me","woman","женский"],
    description:"парфюмерия на разлив .",
    image:"images/perfumes/lanvin marry me.jpg",
    sizes:[{label:"10 мл",price:312}, {label:"12 мл",price:374}, {label:"15 мл",price:468}, {label:"20 мл",price:624}, {label:"25 мл",price:780}, {label:"30 мл",price:936}, {label:"50 мл",price:1560}, {label:"100 мл",price:3120}],
    sale:false,
    featured:true
  },

  {
    id: "p2",
    type: "perfume",
    category: "на_разлив",
    marka: "Dior",
    name: "J'adore Dior",
    tags: ["dior", "jadore", "j'adore", "woman", "женский"],
    description: "парфюмерия на разлив .",
    image: "images/perfumes/jadore dior.jpg",
    sizes: [
      { label: "10 мл", price: 276 },
      { label: "12 мл", price: 345 },
      { label: "15 мл", price: 417 },
      { label: "20 мл", price: 555 },
      { label: "25 мл", price: 693 },
      { label: "30 мл", price: 831 },
      { label: "50 мл", price: 1386 },
      { label: "100 мл", price: 2775 }
    ],
    sale: false,
    featured: true
  },
  {
    id: "p3",
    type: "perfume",
    category: "на_разлив",
    marka: "Dolce & Gabbana",
    name: "Dolce & Gabbana Light Blue",
    tags: ["dolce gabbana", "d&g", "light blue", "woman", "женский"],
    description: "парфюмерия на разлив .",
    image: "images/perfumes/dolce gabbana light blue.jpg",
    sizes: [
      { label: "10 мл", price: 288 },
      { label: "12 мл", price: 360 },
      { label: "15 мл", price: 435 },
      { label: "20 мл", price: 579 },
      { label: "25 мл", price: 723 },
      { label: "30 мл", price: 867 },
      { label: "50 мл", price: 1446 },
      { label: "100 мл", price: 2895 }
    ],
    sale: false,
    featured: true
  },
  {
    id: "p4",
    type: "perfume",
    category: "на_разлив",
    marka: "Paco Rabanne",
    name: "Invictus Paco Rabanne",
    tags: ["paco rabanne", "invictus", "man", "мужской"],
    description: "парфюмерия на разлив .",
    image: "images/perfumes/invictus paco rabanne.jpg",
    sizes: [
      { label: "10 мл", price: 389 },
      { label: "12 мл", price: 486 },
      { label: "15 мл", price: 587 },
      { label: "20 мл", price: 781 },
      { label: "25 мл", price: 976 },
      { label: "30 мл", price: 1170 },
      { label: "50 мл", price: 1951 },
      { label: "100 мл", price: 3906 }
    ],
    sale: false,
    featured: true
  },
  {
    id: "p5",
    type: "perfume",
    category: "на_разлив",
    marka: "Versace",
    name: "Versace Eau Fraiche",
    tags: ["versace", "eau fraiche", "fresh", "man", "мужской"],
    description: "парфюмерия на разлив .",
    image: "images/perfumes/versace eau fraiche.jpg",
    sizes: [
      { label: "10 мл", price: 360 },
      { label: "12 мл", price: 432 },
      { label: "15 мл", price: 543 },
      { label: "20 мл", price: 723 },
      { label: "25 мл", price: 903 },
      { label: "30 мл", price: 1083 },
      { label: "50 мл", price: 1806 },
      { label: "100 мл", price: 3615 }
    ],
    sale: false,
    featured: true
  },
  {
    id: "p6",
    type: "perfume",
    category: "на_разлив",
    marka: "Essential Parfums",
    name: "Bois Impérial Essential Parfums",
    tags: ["essential parfums", "bois imperial", "unisex", "унисекс"],
    description: "парфюмерия на разлив .",
    image: "images/perfumes/bois imperial essential parfums.jpg",
    sizes: [
      { label: "10 мл", price: 663 },
      { label: "12 мл", price: 825 },
      { label: "15 мл", price: 993 },
      { label: "20 мл", price: 1323 },
      { label: "25 мл", price: 1653 },
      { label: "30 мл", price: 1983 },
      { label: "50 мл", price: 3306 },
      { label: "100 мл", price: 6615 }
    ],
    sale: false,
    featured: true
  },
  {
    id: "p7",
    type: "perfume",
    category: "на_разлив",
    marka: "Chanel",
    name: "Allure Homme Sport Chanel",
    tags: ["chanel", "allure homme sport", "man", "мужской"],
    description: "парфюмерия на разлив .",
    image: "images/perfumes/allure homme sport chanel.jpg",
    sizes: [
      { label: "10 мл", price: 264 },
      { label: "12 мл", price: 330 },
      { label: "15 мл", price: 396 },
      { label: "20 мл", price: 531 },
      { label: "25 мл", price: 663 },
      { label: "30 мл", price: 795 },
      { label: "50 мл", price: 1326 },
      { label: "100 мл", price: 2655 }
    ],
    sale: false,
    featured: true
  },

  // =====================================================
  // ZEN SHISEIDO
  // =====================================================
  {
    id: "p8",
    type: "perfume",
    category: "на_разлив",
    marka: "Shiseido",
    name: "Zen Shiseido",
    tags: ["shiseido", "zen shiseido", "zen", "woman", "женский"],
    description: "парфюмерия на разлив.",
    image: "images/perfumes/zen shiseido.jpg",
    sizes: [
      {label: "10 мл", price: 312},
      {label: "12 мл", price: 390},
      {label: "15 мл", price: 471},
      {label: "20 мл", price: 627},
      {label: "25 мл", price: 783},
      {label: "30 мл", price: 939},
      {label: "50 мл", price: 1566},
      {label: "100 мл", price: 3135}
    ],
    sale: false,
    featured: true
  },

  // =====================================================
  // VERSACE VERSENSE
  // =====================================================
  {
    id: "p9",
    type: "perfume",
    category: "на_разлив",
    marka: "Versace",
    name: "Versace Versense",
    tags: ["versace", "versense", "versace versense", "woman", "женский"],
    description: "парфюмерия на разлив.",
    image: "images/perfumes/versace versense.jpg",
    sizes: [
      {label: "10 мл", price: 327},
      {label: "12 мл", price: 405},
      {label: "15 мл", price: 486},
      {label: "20 мл", price: 651},
      {label: "25 мл", price: 813},
      {label: "30 мл", price: 975},
      {label: "50 мл", price: 1626},
      {label: "100 мл", price: 3255}
    ],
    sale: false,
    featured: true
  },

  // =====================================================
  // CHANEL CHANCE
  // =====================================================
  {
    id: "p10",
    type: "perfume",
    category: "на_разлив",
    marka: "Chanel",
    name: "Chanel Chance",
    tags: ["chanel", "chance", "chanel chance", "woman", "женский"],
    description: "парфюмерия на разлив.",
    image: "images/perfumes/chanel chance.jpg",
    sizes: [
      {label: "10 мл", price: 288},
      {label: "12 мл", price: 360},
      {label: "15 мл", price: 453},
      {label: "20 мл", price: 603},
      {label: "25 мл", price: 753},
      {label: "30 мл", price: 903},
      {label: "50 мл", price: 1506},
      {label: "100 мл", price: 3015}
    ],
    sale: false,
    featured: true
  },

   {
    id: "p11",
    type: "perfume",
    category: "на_разлив",
    marka: "Jo Malone",
    name: "Jo Malone Wood Sage & Sea Salt",
    tags: [
      "jo malone",
      "wood sage",
      "sea salt",
      "jo malone wood sage sea salt",
      "unisex",
      "унисекс"
    ],
    description: "парфюмерия на разлив.",
    image: "/images/perfumes/jo malone wood sage sea salt.jpg",
    sizes: [
      {label: "10 мл", price: 411},
      {label: "12 мл", price: 510},
      {label: "15 мл", price: 615},
      {label: "20 мл", price: 819},
      {label: "25 мл", price: 1023},
      {label: "30 мл", price: 1227},
      {label: "50 мл", price: 2046},
      {label: "100 мл", price: 4095}
    ],
    sale: false,
    featured: true
  },

  {
    id: "p12",
    type: "perfume",
    category: "на_разлив",
    marka: "Xerjoff",
    name: "Xerjoff Naxos 1861",
    tags: [
      "xerjoff",
      "naxos",
      "xerjoff naxos",
      "naxos 1861",
      "unisex",
      "унисекс"
    ],
    description: "парфюмерия на разлив.",
    image: "/images/perfumes/xerjoff naxos 1861.jpg",
    sizes: [
      {label: "10 мл", price: 528},
      {label: "12 мл", price: 660},
      {label: "15 мл", price: 795},
      {label: "20 мл", price: 1059},
      {label: "25 мл", price: 1323},
      {label: "30 мл", price: 1587},
      {label: "50 мл", price: 2646},
      {label: "100 мл", price: 5295}
    ],
    sale: false,
    featured: true
  },

  {
    id: "p13",
    type: "perfume",
    category: "на_разлив",
    marka: "Tom Ford",
    name: "Tobacco Vanille Tom Ford",
    tags: [
      "tom ford",
      "tobacco vanille",
      "tobacco",
      "vanille",
      "tom ford tobacco vanille",
      "unisex",
      "унисекс"
    ],
    description: "парфюмерия на разлив.",
    image: "/images/perfumes/tobacco vanille tom ford.jpg",
    sizes: [
      {label: "10 мл", price: 327},
      {label: "12 мл", price: 405},
      {label: "15 мл", price: 486},
      {label: "20 мл", price: 651},
      {label: "25 мл", price: 813},
      {label: "30 мл", price: 975},
      {label: "50 мл", price: 1626},
      {label: "100 мл", price: 3255}
    ],
    sale: false,
    featured: true
  },

  {
    id: "p14",
    type: "perfume",
    category: "на_разлив",
    marka: "Escentric Molecules",
    name: "Molecule 02 Deluxe",
    tags: ["molecule 02", "escentric molecules", "unisex", "унисекс"],
    description: "парфюмерия на разлив .",
    image: "images/perfumes/molecule 02 deluxe.jpg",
    sizes: [
      { label: "10 мл", price: 1332 },
      { label: "12 мл", price: 1665 },
      { label: "15 мл", price: 2001 },
      { label: "20 мл", price: 2667 },
      { label: "25 мл", price: 3333 },
      { label: "30 мл", price: 3999 },
      { label: "50 мл", price: 6666 },
      { label: "100 мл", price: 13335 }
    ],
    sale: false,
    featured: true
  },
  {
    id: "p15",
    type: "perfume",
    category: "на_разлив",
    marka: "Kenzo",
    name: "L'Eau Par Kenzo",
    tags: ["kenzo", "par kenzo", "l'eau par kenzo", "woman", "женский"],
    description: "парфюмерия на разлив .",
    image: "images/perfumes/leau par kenzo.jpg",
    sizes: [
      { label: "10 мл", price: 276 },
      { label: "12 мл", price: 345 },
      { label: "15 мл", price: 417 },
      { label: "20 мл", price: 555 },
      { label: "25 мл", price: 693 },
      { label: "30 мл", price: 831 },
      { label: "50 мл", price: 1386 },
      { label: "100 мл", price: 2775 }
    ],
    sale: false,
    featured: true
  },
  {
    id: "p16",
    type: "perfume",
    category: "на_разлив",
    marka: "Hugo Boss",
    name: "Boss Ma Vie",
    tags: ["hugo boss", "boss ma vie", "woman", "женский"],
    description: "парфюмерия на разлив .",
    image: "images/perfumes/boss ma vie.jpg",
    sizes: [
      { label: "10 мл", price: 312 },
      { label: "12 мл", price: 390 },
      { label: "15 мл", price: 471 },
      { label: "20 мл", price: 627 },
      { label: "25 мл", price: 783 },
      { label: "30 мл", price: 939 },
      { label: "50 мл", price: 1566 },
      { label: "100 мл", price: 3135 }
    ],
    sale: false,
    featured: true
  },
  {
    id: "p17",
    type: "perfume",
    category: "на_разлив",
    marka: "Versace",
    name: "Versace Bright Crystal",
    tags: ["versace", "bright crystal", "woman", "женский"],
    description: "парфюмерия на разлив .",
    image: "images/perfumes/versace bright crystal.jpg",
    sizes: [
      { label: "10 мл", price: 327 },
      { label: "12 мл", price: 405 },
      { label: "15 мл", price: 486 },
      { label: "20 мл", price: 651 },
      { label: "25 мл", price: 813 },
      { label: "30 мл", price: 975 },
      { label: "50 мл", price: 1626 },
      { label: "100 мл", price: 3255 }
    ],
    sale: false,
    featured: true
  },
  {
    id: "p18",
    type: "perfume",
    category: "на_разлив",
    marka: "Dior",
    name: "Sauvage Deluxe",
    tags: ["dior", "sauvage", "man", "мужской"],
    description: "парфюмерия на разлив .",
    image: "images/perfumes/sauvage deluxe.jpg",
    sizes: [
      { label: "10 мл", price: 612 },
      { label: "12 мл", price: 765 },
      { label: "15 мл", price: 921 },
      { label: "20 мл", price: 1227 },
      { label: "25 мл", price: 1533 },
      { label: "30 мл", price: 1839 },
      { label: "50 мл", price: 3066 },
      { label: "100 мл", price: 6135 }
    ],
    sale: false,
    featured: true
  },
  {
    id: "p19",
    type: "perfume",
    category: "на_разлив",
    marka: "Women's Secret",
    name: "Women's Secret Candy",
    tags: ["womens secret", "candy", "woman", "женский"],
    description: "парфюмерия на разлив .",
    image: "images/perfumes/womens secret candy.jpg",
    sizes: [
      { label: "10 мл", price: 264 },
      { label: "12 мл", price: 330 },
      { label: "15 мл", price: 399 },
      { label: "20 мл", price: 531 },
      { label: "25 мл", price: 663 },
      { label: "30 мл", price: 795 },
      { label: "50 мл", price: 1326 },
      { label: "100 мл", price: 2655 }
    ],
    sale: false,
    featured: true
  },

  /*{
    id:"p2",
    type:"perfume",
    category:"original",
    name:"Оригинальный аромат",
    tags:["original","женский"],
    description:"Оригинальная парфюмерия.",
    image:"",
    sizes:[{label:"10 мл",price:0},{label:"30 мл",price:0}],
    sale:false,
    featured:true
  },
  
  {
    id:"j1",
    type:"jewelry",
    category:"gil",
    name:"Глиняная бижутерия",
    tags:["gil","бижутерия","глина"],
    description:"Бижутерия ручной работы из глины.",
    image:"",
    sizes:[{label:"1 шт",price:0}],
    sale:false,
    featured:true
  },
  {
    id:"j2",
    type:"jewelry",
    category:"muncuq",
    name:"Бижутерия из бусин",
    tags:["muncuq","бижутерия","бусины"],
    description:"Бижутерия из бусин.",
    image:"",
    sizes:[{label:"1 шт",price:0}],
    sale:false,
    featured:true
  }*/
];
