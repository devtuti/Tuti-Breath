const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
let searchTerm="";

function showToast(text){const t=$("#toast");if(!t)return;t.textContent=text;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function updateFavCount(){const el=$("#favCount");if(el)el.textContent=favoriteCount()}

function renderHome(){
  const q=searchTerm.toLowerCase();
  const match=p=>!q||[p.name,p.category,...p.tags].join(" ").toLowerCase().includes(q);
  const perf=PRODUCTS.filter(p=>p.type==="perfume"&&p.featured&&match(p)).slice(0,3);
  const jew=PRODUCTS.filter(p=>p.type
    ==="jewelry"&&p.featured&&match(p)).slice(0,3);
  const sales=PRODUCTS.filter(p=>p.sale&&match(p));
  $("#homePerfumes").innerHTML=perf.length?perf.map(productCard).join(""):'<div class="empty" style="grid-column:1/-1">Подходящих товаров не найдено.</div>';
  $("#homeJewelry").innerHTML=jew.length?jew.map(productCard).join(""):'<div class="empty" style="grid-column:1/-1">Подходящих товаров не найдено.</div>';
  $("#saleGrid").innerHTML=sales.length?sales.map(productCard).join(""):'<div class="empty" style="grid-column:1/-1">Сейчас активных скидок нет.</div>';
  bindCards();updateFavCount();
}
function bindCards(){
  $$("[data-fav]").forEach(b=>b.onclick=()=>{toggleFavorite(b.dataset.fav);renderHome()});
  $$("[data-open]").forEach(b=>b.onclick=()=>openProduct(b.dataset.open));
  $$("[data-order]").forEach(b=>b.onclick=()=>orderProduct(b.dataset.order));
}
if($("#searchInput")){
  $("#searchInput").addEventListener("input",e=>{searchTerm=e.target.value.trim();renderHome()});
  $("#clearSearch").onclick=()=>{$("#searchInput").value="";searchTerm="";renderHome()};
  $("#searchBtn").onclick=()=>{$("#searchPanel").scrollIntoView({behavior:"smooth"});setTimeout(()=>$("#searchInput").focus(),400)};
  $("#menuBtn").onclick=()=>$("#mobileMenu").classList.add("open");
  $("#closeMenu").onclick=()=>$("#mobileMenu").classList.remove("open");
  $$("[data-close]").forEach(x=>x.onclick=closeProduct);
  $("#modalOrder").onclick=()=>currentProduct&&orderProduct(currentProduct.id);
  $("#modalShare").onclick=()=>shareProduct();
  renderHome();
}
updateFavCount();
