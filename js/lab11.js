(function(){
  angular.module('Lab11', ['ngMaterial'])

  .factory('Canvas', function(){
    const CANVAS = {
      getCanvas: function(){
        const CANVAS = document.getElementById('canvas');
        return CANVAS
      },
      getContext: function(){
        const CANVAS = document.getElementById('canvas');
        const CONTEXT = CANVAS.getContext('2d');
        return CONTEXT
      }
    };
    return CANVAS;

  })

  .controller('MainController', function($scope){

  })
  .controller('CanvasController', function($scope, Canvas){


    const CANVAS = Canvas.getCanvas();
    const CONTEXT = Canvas.getContext();
    const c = CONTEXT;

    const drawHex = function(style, lineWidth){

      const x = Math.floor(Math.random() * 1000);
      const y = Math.floor(Math.random() * 1000);



      c.fillStyle = style;
      c.lineWidth = lineWidth;

      c.moveTo(x + 10, y + 50); // = x + 10
      c.lineTo(x + 10, y + 120);
      c.lineTo(x + 70, y + 150);
      c.lineTo(x + 130,y + 120);
      c.lineTo(x + 130,y + 50);
      c.lineTo(x + 70, y + 20);
      c.lineTo(x + 10, y + 50);
      c.fill();

    }

    let strokeStyle = "#000000";
    let lineWidth = 5;
    let palette = [
      "#000000",
      "#FF0000",
      "#FFFF00"
    ];

    function random(){
      let random = Math.floor(Math.random() * 3);
      return random;
    }
    for(i = 0; i < 300; i++){
      console.log(random());
      drawHex(palette[random()], 5);
    }


  });

})();
