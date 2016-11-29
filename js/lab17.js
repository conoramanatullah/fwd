(function(){
  angular.module('Lab17', ['ngMaterial'])
  .controller('MainController', function($scope, Data){
    // Angular stuff
    console.log(Data);

  })
  .factory('Data', function(){
    // Connect to firebase
    const database = firebase.database();
    return database.ref();
  });


  $(document).ready(function(){


  });
})();
