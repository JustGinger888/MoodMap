mapboxgl.accessToken = 'pk.eyJ1IjoianVzdGdpbmdlcjg4OCIsImEiOiJjazYzcDY5bHIwOHZyM2VwYWdvdGJlaDF1In0.ZmNto6y6i31WnRnwKotQIw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/justginger888/ck63pee8t0qz31is0la9etg8m',
    center: [-2.44153, 54.59181],
    zoom: 5
});

document.getElementById('fly').addEventListener('click', 
function() {

    map.flyTo({
        center: [ -1.963983,50.726139],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        zoom: 10
    });
});
 
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());



//Heatbox
map.on('load', function() {

  map.addSource('trees', {
    type: 'geojson',
    data: './trees.geojson'
  });
  // add heatmap layer here
  // add circle layer here
});