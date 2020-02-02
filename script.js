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

  map.addSource('tst', {
    type: 'geojson',
    data: 'tst.geojson'
  });

  // add heatmap layer here
  map.addLayer({
    id: 'tst-heat',
    type: 'heatmap',
    source: 'tst',
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
  
  // add circle layer here
  map.addLayer({
    id: 'tst-point',
    type: 'circle',
    source: 'tst',
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

  map.addSource('tst', {
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
          [11, 1],
          [15, 3]
        ]
      },
      // assign color values be applied to points depending on their density
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0, 'rgba(151, 17, 17, 1)',
        0.2, 'rgba(179, 20, 20)',
        0.4, 'rgba(193, 21, 21)',
        0.6, 'rgba(230, 25, 25)',
        0.8, 'rgba(233, 53, 53'
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