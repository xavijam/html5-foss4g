  var map;
  var sheraton,
      madrid;     // Locations
  var marker;     // Map elements
  var slides = new Array();

  function startPresentation() {
    
    // LOOP OVER ALL SLIDES
    $('.slide').each(function(i,ele){
      slides.push($(ele).attr('id'));
    });
    
    // MAP STUFF
    sheraton = new google.maps.LatLng(39.7420445, -104.98923159);
    madrid = new google.maps.LatLng(40.4166909, -3.7003454);
    
    // map style
    var style = [{stylers:[{saturation:-100},{lightness:0}]}];
    var mapOptions = {
  	 	zoom: 15,
  	 	center: sheraton,
  	 	mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'foss4g']},
  		draggable: false,
  		streetViewControl: false,
  		disableDefaultUI: true
  	};
    // init map
    map = new google.maps.Map(document.getElementById("map"),mapOptions);
    var styledMapOptions = {name: "foss4g"}
    var xavijamMapType = new google.maps.StyledMapType(style, styledMapOptions);
    map.mapTypes.set('foss4g', xavijamMapType);
    map.setMapTypeId('foss4g');
    
    
    // DECK STUFF
    var $d = $(document);
    // if deck changes...
  	$d.bind('deck.change', function(event, from, to) {onChange(to,from)});
  	// init deck
  	$d.bind('deck.init', function() {
  	  $('span.loader').fadeOut();
  	  $('.deck-current').animate({opacity:1},600,function(){
  	    $('.slide').css({opacity:1});
  	  });
  	});
  	// start deck
  	$.deck('.slide');
  	
  	// if there is no hash, start the first slide
    if (!window.location.hash) {
      onChange(0,0);
    }

  	$('#style-themes').change(function() {
  		$('#style-theme-link').attr('href', $(this).val());
  	});

  	$('#transition-themes').change(function() {
  		$('#transition-theme-link').attr('href', $(this).val());
  	});
  }
  
  
  // CHANGE SLIDE
  function onChange(to,from) {
    removeAllOverlays();
    var id_ = slides[to];
    
    /* map stuff*/
    if (to<2) {
      $('div#map').animate({opacity:1},500);
    } else {
      $('div#map').animate({opacity:0},500);
    }
    
    /* first slide */
    if (to==0) {
      var image = new google.maps.MarkerImage('../img/marker.png',new google.maps.Size(24, 33),new google.maps.Point(0,0),new google.maps.Point(12, 33));
      marker = new google.maps.Marker({position: sheraton,map: map,icon: image});
      map.setCenter(sheraton);
      map.setZoom(15);
      map.panBy(0,-120);
    }
    
    /* me slide */
    if (to==1) {
      var image = new google.maps.MarkerImage('../img/marker.png',new google.maps.Size(24, 33),new google.maps.Point(0,0),new google.maps.Point(12, 33));
      marker = new google.maps.Marker({position: madrid,map: map,icon: image});
      map.setCenter(madrid);
      map.setZoom(6);
      map.panBy(170,0);
    }
  }
  
  function removeAllOverlays() {
    if (marker!=null) marker.setMap(null);
  }