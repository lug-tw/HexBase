var global = {};
var panorama;

var logo_resize = function () {
  var maxWidth = Math.min(global.width / 16, global.height / 8.66) * 16;
  var maxHeight = Math.min(global.width / 16, global.height / 8.66) * 8.66;
  var maxFont = Math.min(global.width / 16, global.height / 8.66);

  $('.h').css({
    position : 'absolute',
    left : maxWidth / 5,
    top : -1 * maxHeight / 3.958,
    'font-size' : maxFont * 8
  });

  $('.ex').css({
    position : 'absolute',
    left : maxWidth / 2,
    top : -1 * maxHeight / 7.9,
    'font-size' : maxFont * 5
  });

  $('.base').css({
    position : 'absolute',
    left : maxWidth / 2,
    top : maxHeight / 2.6,
    'font-size' : maxFont * 2.55
  });

  $('.coming').css({
    position : 'absolute',
    left : maxWidth / 2.55,
    top : maxHeight / 1.5,
    'font-size' : maxFont * 0.8
  });

  $('.git').css({
    position : 'absolute',
    left : maxWidth / 2.8,
    top : maxHeight / 1.25
  });

  $('.goo').css({
    position : 'absolute',
    left : maxWidth / 1.8,
    top : maxHeight / 1.25
  });

  $('.button').css({
    'font-size' : maxFont * 0.2,
    width  : maxFont * 2.5,
    height : maxFont / 2
  });
};

var map = function () {
  var initialize = function () {
    // Set up Street View and initially set it visible. Register the
    // custom panorama provider function. Set the StreetView to display
    // the custom panorama 'reception' which we check for below.
    var panoOptions = {
      pano: 'reception',
      zoomControl: false,
      addressControl: false,
      linksControl: false,
      panControl: false,
      visible: true,
      panoProvider: getCustomPanorama
    };

    panorama = new google.maps.StreetViewPanorama($('#map-canvas')[0], panoOptions);
  };

  var getCustomPanorama = function (pano, zoom, tileX, tileY) {
    if (pano == 'reception') {
      return {
        location: {
          pano: 'reception',
          description: 'Google Sydney - Reception'
        },
        links: [],
        copyright: 'Imagery (c) 2010 Google',
        tiles: {
          tileSize: new google.maps.Size(1024, 512),
          worldSize: new google.maps.Size(1024, 512),
          centerHeading: 105,
          getTileUrl: function(){
            return 'assets/img/pano4.png';
          }
        }
      };
    }
  };

  google.maps.event.addDomListener(window, 'load', initialize);
};

var onresize = function(){
  global.width = $(window).width();
  global.height = $(window).height();
  logo_resize();
};
var onmousemove = function(handler){
  var x;
  try{
    x = handler.clientX || handler.offsetX || handler.screenX;
  }catch(e){}
  
  if(x && global.last_x !== x){
    global.last_x = x;
  }
  var pitch = parseInt(global.last_x / global.width * 360) - 180;
  
  panorama.setPov({
    heading: pitch,
    pitch: 0,
    zoom: 1
  });
  
  console.log(percent , global.last_x , global.width);
};
$(document).ready(function() {
  onresize();
  map();
  $(window).resize(onresize).mousemove(onmousemove);
});
