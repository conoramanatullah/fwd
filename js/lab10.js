(function(){

  angular.module('Lab10', ['ngMaterial'])

  .controller('MainController', function($scope){

  });



})();





var map;

function initMap() {

  var marker;
  var geo = navigator.geolocation;

  geo.getCurrentPosition(function(location){

    const LATITUDE = location.coords.latitude;
    const LONGITUDE = location.coords.longitude;

    // Build Map
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: LATITUDE, lng: LONGITUDE},
      zoom: 15
    });

    // Place marker at users location
    marker = new google.maps.Marker({
      position: {lat: LATITUDE, lng: LONGITUDE},
      map: map,
      title: "Your Location"
    });


  }, function(){
    // Error Handler
    console.log("error: " + err.message);
  });
};
