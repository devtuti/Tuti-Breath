// =====================================================
// TUTIBREATH БАЗА ТОВАРОВ
// Все данные о товарах меняйте в основном в этом файле.
// =====================================================
const PRODUCTS = [
  {
    id:"p1",
    type:"perfume",
    category:"original",
    name:"Dior Sauvage",
    tags:["dior","sauvage","мужской","unisex"],
    description:"Оригинальная парфюмерия.",
    image:"images/perfumes/dior-sauvage.jpg",
    sizes:[{label:"10 мл",price:2710},{label:"30 мл",price:5900}],
    sale:false,
    featured:true
  },
  {
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
    id:"p3",
    type:"perfume",
    category:"otdushka",
    name:"Отдушка",
    tags:["otdushka","unisex"],
    description:"Отдушка.",
    image:"",
    sizes:[{label:"10 мл",price:0},{label:"30 мл",price:0}],
    sale:false,
    featured:false
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
  }
];
