(function(){
    "use strict";

    var MapsApp = function(){

        if(MapsApp.instance){
            return MapsApp.instance;
        }
        MapsApp.instance = this;

        this.container = null;

        this.init();
    };

    window.MapsApp = MapsApp;

    MapsApp.prototype = {

        init: function(){

            console.log('MapsApp started');

            this.container = document.querySelector('#map-container');

      var awesomeType = new google.maps.StyledMapType([ { "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "stylers": [ { "hue": "#00aaff" }, { "color": "#00aaff" } ] },{ "featureType": "transit", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road.local", "stylers": [ { "hue": "#5eff00" } ] },{ "featureType": "landscape" } ], {name: "Awesome"});
     var options ={
    center: {lat: 59.4388708, lng: 24.7714843},
    zoom: 18,
    streetViewControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ["Awesome", google.maps.MapTypeId.ROADMAP]
    }
     };


// viide teegile
     var map = new google.maps.Map(this.container, options);

     // teen uue kaarditüübi
     map.mapTypes.set("Awesome", awesomeType);
     map.setMapTypeId("Awesome");
        },
    };

    window.onload = function(){
        var app = new MapsApp();
    };

})();
