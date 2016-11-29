(function(){
  angular.module('Lab12', ['ngMaterial'])
  .controller('MainController', function($scope){
    // Angular stuff
    console.log("Main Controller Loaded OK");
    $.getJSON('js/json/lab14.json', function( data ){
      console.log('success loading json');
      
    })

  });
  $(document).ready(function(){


  });
})();
