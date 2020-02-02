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
document.getElementById('hap').addEventListener('click', function() {

  map.addSource('tst1', {
    type: 'geojson',
    data: 'tst1.geojson'
  });

  // add heatmap layer here
  map.addLayer({
    id: 'tst1-heat',
    type: 'heatmap',
    source: 'tst1',
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
          [3, 1],
          [5, 1]
        ]
      },
      // assign color values be applied to points depending on their density
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0, 'rgba(236,222,239,0)',
        0.2, 'rgb(0, 153, 0)',
        0.4, 'rgb(26, 255, 26)',
        0.6, 'rgb(77, 255, 77)',
        0.8, 'rgb(28,144,153)'
      ],
      // increase radius as zoom increases
      'heatmap-radius': {
        stops: [
          [1, 4],
          [3, 7]
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
  
  // add circle layer here
  map.addLayer({
    id: 'tst1-point',
    type: 'circle',
    source: 'tst1',
    minzoom: 14,
    paint: {
      // increase the radius of the circle as the zoom level and dbh value increases
      'circle-radius': {
        property: 'dbh',
        type: 'exponential',
        stops: [
          [{ zoom: 15, value: 1 }, 5],
          [{ zoom: 15, value: 62 }, 10],
          [{ zoom: 22, value: 1 }, 20],
          [{ zoom: 22, value: 62 }, 50],
        ]
      },
      'circle-color': {
        property: 'dbh',
        type: 'exponential',
        stops: [
          [0, 'rgba(236,222,239,0)'],
          [10, 'rgb(236,222,239)'],
          [20, 'rgb(208,209,230)'],
          [30, 'rgb(166,189,219)'],
          [40, 'rgb(103,169,207)'],
          [50, 'rgb(28,144,153)'],
          [60, 'rgb(1,108,89)']
        ]
      },
      'circle-stroke-color': 'white',
      'circle-stroke-width': 1,
      'circle-opacity': {
        stops: [
          [14, 0],
          [15, 1]
        ]
      }
    }
  }, 'waterway-label');
});


//Heatbox 
document.getElementById('sad').addEventListener('click', function() {

  map.addSource('tst3', {
    type: 'geojson',
    data: 'tst3.geojson'
  });

  // add heatmap layer here
  map.addLayer({
    id: 'tst3-heat',
    type: 'heatmap',
    source: 'tst3',
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
          [3, 1],
          [5, 1]
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
          [1, 4],
          [3, 7]
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
  
  // add circle layer here
  map.addLayer({
    id: 'tst3-point',
    type: 'circle',
    source: 'tst3',
    minzoom: 14,
    paint: {
      // increase the radius of the circle as the zoom level and dbh value increases
      'circle-radius': {
        property: 'dbh',
        type: 'exponential',
        stops: [
          [{ zoom: 15, value: 1 }, 5],
          [{ zoom: 15, value: 62 }, 10],
          [{ zoom: 22, value: 1 }, 20],
          [{ zoom: 22, value: 62 }, 50],
        ]
      },
      'circle-color': {
        property: 'dbh',
        type: 'exponential',
        stops: [
          [0, 'rgba(236,222,239,0)'],
          [10, 'rgb(236,222,239)'],
          [20, 'rgb(208,209,230)'],
          [30, 'rgb(166,189,219)'],
          [40, 'rgb(103,169,207)'],
          [50, 'rgb(28,144,153)'],
          [60, 'rgb(1,108,89)']
        ]
      },
      'circle-stroke-color': 'white',
      'circle-stroke-width': 1,
      'circle-opacity': {
        stops: [
          [14, 0],
          [15, 1]
        ]
      }
    }
  }, 'waterway-label');
});



//Heatbox 
document.getElementById('ang').addEventListener('click', function() {

  map.addSource('tst2', {
    type: 'geojson',
    data: 'tst2.geojson'
  });

  // add heatmap layer here
  map.addLayer({
    id: 'tst2-heat',
    type: 'heatmap',
    source: 'tst2',
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
          [3, 1],
          [5, 1]
        ]
      },
      // assign color values be applied to points depending on their density
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0, 'rgba(236,222,239,0)',
        0.2, 'rgb(230, 0, 0)',
        0.4, 'rgb(255, 51, 51)',
        0.6, 'rgb(223, 47, 47)',
        0.8, 'rgb(179, 0, 0)',
      ],
      // increase radius as zoom increases
      'heatmap-radius': {
        stops: [
          [1, 4],
          [3, 7]
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
  
  // add circle layer here
  map.addLayer({
    id: 'tst2-point',
    type: 'circle',
    source: 'tst2',
    minzoom: 14,
    paint: {
      // increase the radius of the circle as the zoom level and dbh value increases
      'circle-radius': {
        property: 'dbh',
        type: 'exponential',
        stops: [
          [{ zoom: 15, value: 1 }, 5],
          [{ zoom: 15, value: 62 }, 10],
          [{ zoom: 22, value: 1 }, 20],
          [{ zoom: 22, value: 62 }, 50],
        ]
      },
      'circle-color': {
        property: 'dbh',
        type: 'exponential',
        stops: [
          [0, 'rgba(236,222,239,0)'],
          [10, 'rgb(236,222,239)'],
          [20, 'rgb(208,209,230)'],
          [30, 'rgb(166,189,219)'],
          [40, 'rgb(103,169,207)'],
          [50, 'rgb(28,144,153)'],
          [60, 'rgb(1,108,89)']
        ]
      },
      'circle-stroke-color': 'white',
      'circle-stroke-width': 1,
      'circle-opacity': {
        stops: [
          [14, 0],
          [15, 1]
        ]
      }
    }
  }, 'waterway-label');
});



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_gDRyoovEOadKGzOdN2I55jAvkyu3BWQ",
  authDomain: "flowing-lead-266910.firebaseapp.com",
  databaseURL: "https://flowing-lead-266910.firebaseio.com",
  projectId: "flowing-lead-266910",
  storageBucket: "flowing-lead-266910.appspot.com",
  messagingSenderId: "725842439734",
  appId: "1:725842439734:web:94c8d49a4d639610def297",
  measurementId: "G-NY4X0QG4WG"
};

module.exports = firebaseConfig;


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


var storage = firebase.storage();