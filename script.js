mapboxgl.accessToken = 'pk.eyJ1IjoianVzdGdpbmdlcjg4OCIsImEiOiJjazYzcDY5bHIwOHZyM2VwYWdvdGJlaDF1In0.ZmNto6y6i31WnRnwKotQIw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/justginger888/ck63pee8t0qz31is0la9etg8m',
    center: [-2.44153, 54.59181],
    zoom: 5
});

document.getElementById('fly').addEventListener('click', 
function() {

    sendAJAX();

    map.flyTo({
        center: [ -1.963983,50.726139],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        zoom: 10
    });
});
var pos = [];
function sendAJAX(){

    var ajaxConnection = new XMLHttpRequest();

    ajaxConnection.addEventListener("load",e =>{
        
        var allAcc = JSON.parse(JSON.stringify(e.target.responseText));
        allAcc.forEach(element => {
            pos = [element.longitude, element.latitude];
            console.log(pos);
        });

    });

    ajaxConnection.open('GET','https://api.postcodes.io/postcodes/BH140BN');

    ajaxConnection.send();
}

var postcode = document.getElementById("postcode").value;


//Mapbox Add HeatMap
map.on('load', function() {

    map.addSource('trees', {
      type: 'geojson',
      data: './trees.geojson'
    });
    /* add heatmap layer here */
    /* add circle layer here */
  });

  map.addLayer({
    id: 'trees-heat',
    type: 'heatmap',
    source: 'trees',
    maxzoom: 15,
    paint: {
      // increase weight as diameter breast height increases
      'heatmap-weight': {
        property: 'dbh',
        type: 'exponential',
        stops: [
          [1, 0],
          [62, 1]
        ]
      },
      // increase intensity as zoom level increases
      'heatmap-intensity': {
        stops: [
          [11, 1],
          [15, 3]
        ]
      },
      // assign color values be applied to points depending on their density
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0, 'rgba(236,222,239,0)',
        0.2, 'rgb(208,209,230)',
        0.4, 'rgb(166,189,219)',
        0.6, 'rgb(103,169,207)',
        0.8, 'rgb(28,144,153)'
      ],
      // increase radius as zoom increases
      'heatmap-radius': {
        stops: [
          [11, 15],
          [15, 20]
        ]
      },
      // decrease opacity to transition into the circle layer
      'heatmap-opacity': {
        default: 1,
        stops: [
          [14, 1],
          [15, 0]
        ]
      },
    }
  }, 'waterway-label');



 
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());