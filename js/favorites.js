const FAVORITES_KEY="tutibreath_favorites";
function getFavorites(){return JSON.parse(localStorage.getItem(FAVORITES_KEY)||"[]")}
function isFavorite(id){return getFavorites().includes(id)}
function toggleFavorite(id){
  let list=getFavorites();
  list=list.includes(id)?list.filter(x=>x!==id):[...list,id];
  localStorage.setItem(FAVORITES_KEY,JSON.stringify(list));
  return list;
}
function favoriteCount(){return getFavorites().length}
