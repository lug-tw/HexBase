$(document).ready(function() {
  var logo = function () {
    var width = $(window).width(),
        height = $(window).height(),
        maxWidth = function () {
          return Math.min(width / 16, height / 8.66) * 16
        },
        maxHeight = function () {
          return Math.min(width / 16, height / 8.66) * 8.66
        },
        maxFont = function () {
          return Math.min(width / 16, height / 8.66)
        }

    $('.h').css({
      position : 'absolute',
      left : maxWidth() / 5,
      top : -1 * maxHeight() / 3.958,
      'font-size' : maxFont() * 8
    });

    $('.ex').css({
      position : 'absolute',
      left : maxWidth() / 2,
      top : -1 * maxHeight() / 7.9,
      'font-size' : maxFont() * 5
    });

    $('.base').css({
      position : 'absolute',
      left : maxWidth() / 2,
      top : maxHeight() / 2.6,
      'font-size' : maxFont() * 2.55
    });

    $('.coming').css({
      position : 'absolute',
      left : maxWidth() / 2.55,
      top : maxHeight() / 1.5,
      'font-size' : maxFont() * 0.8
    });

    $('.git').css({
      position : 'absolute',
      left : maxWidth() / 2.8,
      top : maxHeight() / 1.25,
    });

    $('.goo').css({
      position : 'absolute',
      left : maxWidth() / 1.8,
      top : maxHeight() / 1.25,
    });

    $('.button').css({
      'font-size' : maxFont() * 0.2,
      width  : maxFont() * 2.5,
      height : maxFont() / 2
    });
  }
  logo();
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

      var panorama = new google.maps.StreetViewPanorama($('#map-canvas')[0], panoOptions);
    }

    // Return a pano image given the panoID.
    var getCustomPanoramaTileUrl = function (pano, zoom, tileX, tileY) {
      // Note: robust custom panorama methods would require tiled pano data.
      // Here we're just using a single tile, set to the tile size and equal
      // to the pano "world" size.
      return 'assets/img/pano4.png';
    }

    // Construct the appropriate StreetViewPanoramaData given
    // the passed pano IDs.
    var getCustomPanorama = function (pano, zoom, tileX, tileY) {
      if (pano == 'reception') {
        return {
          location: {
            pano: 'reception',
            description: 'Google Sydney - Reception'
          },
          links: [],
          // The text for the copyright control.
          copyright: 'Imagery (c) 2010 Google',
          // The definition of the tiles for this panorama.
          tiles: {
            tileSize: new google.maps.Size(1024, 512),
            worldSize: new google.maps.Size(1024, 512),
            // The heading in degrees at the origin of the panorama
            // tile set.
            centerHeading: 105,
            getTileUrl: getCustomPanoramaTileUrl
          }
        };
      }
    }

    google.maps.event.addDomListener(window, 'load', initialize);
  }
  map();
  $(window).resize(logo);
});
