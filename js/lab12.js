(function(){
  angular.module('Lab12', ['ngMaterial'])
  .controller('MainController', function($scope){
    // Angular stuff
    console.log("Main Controller Loaded OK");

  });
  $(document).ready(function(){
    // JQuery stuff
    var images = ['http://i0.kym-cdn.com/photos/images/facebook/000/632/652/6ca.jpg',
                  'https://i.imgur.com/yho9pgM.jpg',
                  'http://i1.kym-cdn.com/photos/images/facebook/000/632/613/42d.jpg'
                  ];

    var index = 0;
    $('#slideshow').on('click', function(){
      var image = $('#slideshow #image img');
      if(index == images.length - 1){
        index = 0;
        image.attr('src', images[index]);

      } else {
        index++;
        image.attr('src', images[index]);
      }


    });

  });
})();
