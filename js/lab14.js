(function(){
  angular.module('Lab14', ['ngMaterial'])
  .controller('MainController', function($scope){
    // Angular stuff

    console.log("Main Controller Loaded OK");


    $.getJSON('js/json/lab14.json', function( data ){
      console.log('success loading json');
      updateView(data);

    });
    function updateView(data){
      $scope.data = data;
      $scope.name = data.name;
      console.log($scope.name);
      $scope.$apply();
    };


  });
  $(document).ready(function(){


  });
})();
