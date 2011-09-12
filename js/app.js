
  function onComplete() {
    var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/22677/256/{z}/{x}/{y}.png',
        cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
        cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18, attribution: cloudmadeAttribution});
    var map = new L.Map('map');
    map.setView(new L.LatLng(39.7420445, -104.98923159), 15).addLayer(cloudmade);
    // Panby correctly
    var y_offset;
    if (($(window).height()/2)<480) {
      y_offset = 480 - ($(window).height()/2);
    } else {
      y_offset = 0;
    }
    map.panBy(new L.Point(0,-y_offset));
    var marker = new L.Marker(new L.LatLng(39.7420445, -104.9892315));
    map.addLayer(marker);
    marker.bindPopup("1550 Court Place <br/> Denver, Colorado 80202 <br/> United States");
    
    
    // Bind hotel direction link
    $('section.info p a.foss4g').click(
      function(ev) {
        ev.preventDefault();
        marker.openPopup();
      }
    );
  }