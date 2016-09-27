(function(){

  angular.module('Lab9', ['ngMaterial'])

  .controller('MainController', function($scope){
    $scope.pizzas = [
      "Cheese",
      "Pepperoni",
      "Hawaiian",
      "Cheeseless",
      "Sauceless",
      "Pizza Salad"
    ];
    $scope.toppings = [
      "Onion",
      "Green Peppers",
      "Pineapple",
      "Coffee Cake",
      "Extra Cheese",
      "Extra Sauce"
    ];

    $scope.drinks = [
      "Coke",
      "Sprite",
      "Apple Juice",
      "Milk",
      "Coffee"
    ];

    $scope.submitOrder = function(){
      $scope.submitted = true;
    }
  });

})();
