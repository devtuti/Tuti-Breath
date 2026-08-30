const WHATSAPP_NUMBER="79935190592";
let currentProduct=null;

function money(n){return n?new Intl.NumberFormat("ru-RU").format(n)+" ₽":"Цена будет добавлена"}
function productImage(p){
  const cls=p.type==="jewelry"?"jewelry":"";
  return p.image
    ? `<img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">`
    : `<span class="placeholder">${p.name.slice(0,2).toUpperCase()}</span>`;
}
function productCard(p){
  const active=isFavorite(p.id);
  return `<article class="card">
    <div class="image ${p.type==="jewelry"?"jewelry":""}">
      ${p.sale?'<span class="sale-tag">СКИДКА</span>':""}
      <button class="fav ${active?"active":""}" data-fav="${p.id}" aria-label="Избранное">${active?"♥":"♡"}</button>
      ${productImage(p)}
    </div>
    <div class="card-body">
      <div class="cat">${p.category}</div>
      <div class="name">${p.name}</div>
      <div class="prices">${p.sizes.map(s=>`<span class="price">${s.label}: ${s.price?money(s.price):"—"}</span>`).join("")}</div>
      <div class="actions">
        <button class="small" data-open="${p.id}">Подробнее</button>
        <button class="small order" data-order="${p.id}">Заказать</button>
      </div>
    </div>
  </article>`;
}
function openProduct(id){
  currentProduct=PRODUCTS.find(p=>p.id===id); if(!currentProduct)return;
  document.getElementById("modalCategory").textContent=currentProduct.category;
  document.getElementById("modalName").textContent=currentProduct.name;
  document.getElementById("modalDescription").textContent=currentProduct.description;
  document.getElementById("modalImage").innerHTML=productImage(currentProduct);
  document.getElementById("modalSizes").innerHTML=currentProduct.sizes.map(s=>`<div class="size"><span>${s.label}</span><b>${money(s.price)}</b></div>`).join("");
  document.getElementById("productModal").classList.add("open");
}
function closeProduct(){document.getElementById("productModal").classList.remove("open")}
function orderProduct(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  const sizes=p.sizes.map(s=>`${s.label} — ${s.price?money(s.price):"цена?"}`).join(", ");
  const text=`Здравствуйте! Хочу заказать из каталога TutiBreath: ${p.name}. Вариант/объём: ${sizes}.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,"_blank");
}
async function shareProduct(p=currentProduct){
  if(!p)return;
  const data={title:`TutiBreath — ${p.name}`,text:`TutiBreath Parfume — ${p.name}`,url:location.href};
  if(navigator.share){try{await navigator.share(data)}catch(e){}}
  else{try{await navigator.clipboard.writeText(location.href);showToast("Ссылка скопирована")}catch(e){showToast("Не удалось поделиться")}}
}
