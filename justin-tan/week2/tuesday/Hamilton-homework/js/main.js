function initMap() {
// The location of Paoli indiana
const paoli = { lat: 38.555897, lng: -86.469600 };
// The map, centered at Paoli indiana
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 4,
  center: paoli,
});
const marker = new google.maps.Marker({
    position: paoli,
    map: map,
})

}
window.initMap = initMap;