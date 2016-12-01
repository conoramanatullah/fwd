(function(){



  angular.module('Lab17', ['ngMaterial'])

  .controller('MainController', function($scope, Data, User, Auth){
    // Angular stuff
    $scope.submitMessage = function(user){
      Data.push(user);
    };

  })
  .controller('ChatController', function($scope, Data){
    // Pull data from database
    Data.on('value', function(snapshot){
      $scope.data = snapshot.val();
      console.log(snapshot.val())
    });
  })

  .factory('Data', function(){
    const CONFIG = {
      apiKey: "AIzaSyC7Gh2no_l6bH7P8ujOndCB_ItbPo_I0dY",
      authDomain: "fwd-data-b24db.firebaseapp.com",
      databaseURL: "https://fwd-data-b24db.firebaseio.com",
      storageBucket: "fwd-data-b24db.appspot.com",
      messagingSenderId: "706980049468"
    };
    firebase.initializeApp(CONFIG);
    const DATABASE = firebase.database();
    console.log("Connection to database successful.");
    return DATABASE.ref();
  })

  .factory('User', function(Data, Auth){
    return Data;
  })

  .factory('Auth', function(){
    return true;
  });


  $(document).ready(function(){
    // Most jquery stuff can go here
  });
})();
