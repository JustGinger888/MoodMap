mapboxgl.accessToken = 'pk.eyJ1IjoianVzdGdpbmdlcjg4OCIsImEiOiJjazYzcDY5bHIwOHZyM2VwYWdvdGJlaDF1In0.ZmNto6y6i31WnRnwKotQIw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/justginger888/ck63pee8t0qz31is0la9etg8m',
    center: [-2.44153, 54.59181],
    zoom: 5
});

var postcode = document.getElementById("postcode").value;

document.getElementById('fly').addEventListener('click', 
function() {
    /*
    var json = api.postcodes.io/postcodes/BH140BN
    var res = JSON.parse(json);
    res.forEach(curr => {
        var pos = [curr.latitude, curr.longitude]; 
    });
    */
    map.flyTo({
        center: [-1.965669, 50.725626],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        zoom: 10
    });
});


 
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());