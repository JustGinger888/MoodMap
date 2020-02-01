/* This will let you use the .remove() function later on */
if (!('remove' in Element.prototype)) {
Element.prototype.remove = function() {
    if (this.parentNode) {
    this.parentNode.removeChild(this);
    }
};
}

mapboxgl.accessToken = 'pk.eyJ1IjoianVzdGdpbmdlcjg4OCIsImEiOiJjazYzcGh1dGwwODFpM25tcHpxcXE2dDB5In0.CTmAALwYJmMeAtBJL-3-xA';

/**
 * Add the map to the page
 */
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [-2.44153, 54.59181],
zoom: 5
});

/**
 * Assign a unique id to each store. You'll use this `id`
 * later to associate each point on the map with a listing
 * in the sidebar.
 */


/**
 * Wait until the map loads to make changes to the map.
 */
map.on('load', function(e) {
/**
 * This is where your '.addLayer()' used to be, instead
 * add only the source without styling a layer
 */
map.addSource('places', {
    'type': 'geojson',
    'data': 'ADD_DATA_HERE_LATER'
});

/**
 * Add all the things to the page:
 * - The location listings on the side of the page
 * - The markers onto the map
 */
buildLocationList(stores);
addMarkers();
});

/**
 * Add a listing for each store to the sidebar.
 **/
function buildLocationList(data) {
data.features.forEach(function(store, i) {
    /**
     * Create a shortcut for `store.properties`,
     * which will be used several times below.
     **/
    var prop = store.properties;

    /* Add a new listing section to the sidebar. */
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    /* Assign a unique `id` to the listing. */
    listing.id = 'listing-' + prop.id;
    /* Assign the `item` class to each listing for styling. */
    listing.className = 'item';

    /* Add the link to the individual listing created above. */
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.id = 'link-' + prop.id;
    link.innerHTML = prop.address;

    /* Add details to the individual listing. */
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.city;
    if (prop.phone) {
    details.innerHTML += ' &middot; ' + prop.phoneFormatted;
    }

    /**
     * Listen to the element and when it is clicked, do four things:
     * 1. Update the `currentFeature` to the store associated with the clicked link
     * 2. Fly to the point
     * 3. Close all other popups and display popup for clicked store
     * 4. Highlight listing in sidebar (and remove highlight for all other listings)
     **/
    link.addEventListener('click', function(e) {
    for (var i = 0; i < data.features.length; i++) {
        if (this.id === 'link-' + data.features[i].properties.id) {
        var clickedListing = data.features[i];
        flyToStore(clickedListing);
        createPopUp(clickedListing);
        }
    }
    var activeItem = document.getElementsByClassName('active');
    if (activeItem[0]) {
        activeItem[0].classList.remove('active');
    }
    this.parentNode.classList.add('active');
    });
});
}

/**
 * Use Mapbox GL JS's `flyTo` to move the camera smoothly
 * a given center point.
 **/
function flyToStore(currentFeature) {
map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
});
}

/**
 * Create a Mapbox GL JS `Popup`.
 **/
function createPopUp(currentFeature) {
var popUps = document.getElementsByClassName('mapboxgl-popup');
if (popUps[0]) popUps[0].remove();
var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
    '<h3>Sweetgreen</h3>' +
        '<h4>' +
        currentFeature.properties.address +
        '</h4>'
    )
    .addTo(map);
}
        

 
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());