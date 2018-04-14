function CallbackAcceptsPosition(position){
  var long_lat = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  var options = {
    zoom: 8,
    center: long_lat,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    disableDefaultUI: true
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), options);
};

navigator.geolocation.getCurrentPosition(CallbackAcceptsPosition);

var paragraph = document.querySelector('p');
paragraph.textContent = "Replacement text!"
// Elements can be appened, text can be delted and elements can be moved

var map = document.querySelector('div');

window.onresize = function(){
  let window_width = window.innerWidth;
  let window_height = window.innerHeight;
  
  map.style.width = window_width / 2 + 'px';
  map.style.height = window_height / 2 + 'px';
};
