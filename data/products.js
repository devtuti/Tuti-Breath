// =====================================================
// TUTIBREATH БАЗА ТОВАРОВ
// Все данные о товарах меняйте в основном в этом файле.
// =====================================================
const PRODUCTS = [
  {
    id:"p1",
    type:"perfume",
    category:"на разлив",
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
