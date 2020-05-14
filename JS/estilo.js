
    var mario = document.getElementById("mario");
    

    document.addEventListener("mousemove", getMouseEvent);

   
    var cursorMario = { x:0, y:0 };
    var mouse = { x:0, y:0 };
    
   
    setInterval(followMario, 70);

    
    var directionMario = "right";

    function getMouseEvent(e) {
      mouse.x = e.pageX;
      mouse.y = e.pageY;

      if (mouse.x > cursorMario.x) {
        directionMario = "right";
      } else {
        directionMario = "left";
      }
    }


    function followMario() {
      var dX = mouse.x - cursorMario.x;
      var dY = mouse.y - cursorMario.y;

      cursorMario.x += dX / 5;
      cursorMario.y += dY / 5;

      mario.style.left = cursorMario.x + "px";
      mario.style.top = cursorMario.y + "px";

      if (directionMario == "right") {
        mario.classList.remove("-left");
        mario.classList.add("-right");
      } else {
        mario.classList.remove("-right");
        mario.classList.add("-left");
      }


      if((mario.classList.contains("-right") && ghost.classList.contains("-left")) | (mario.classList.contains("-left") && ghost.classList.contains("-right"))) {
        hands.classList.add("-close");
        mouth.classList.add("-close");
      } else {
        hands.classList.remove("-close");
        mouth.classList.remove("-close");
      }
    }