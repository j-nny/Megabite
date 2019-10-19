var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(43.644190,-79.402022),
    mapTypeId: 'roadmap'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');
  script.src = '../scripts/restaurantMarkers.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
window.restofeed_callback = function(results) {
  for (var i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[0],coords[1]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}

var script = document.createElement("script")
script.type = "text/javascript";
script.src = `https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&callback=initMap`;
document.getElementsByTagName("head")[0].appendChild(script);
