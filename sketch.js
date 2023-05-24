/*Esta es mi obra inspirada en On White II por Vasili Kandinski
                          ;)
                          
http://www.arsmundi.de/de/805949/Bild-Auf-Weiss-II-1923-gerahmt/805949.html */

function setup() {
    createCanvas(500, 500);
    background(220);
  }
  
  function draw() {
    console.log("X: " + mouseX + " Y:" + mouseY);
   //console.log(frameCount)
    
  
  
    //PAR BEZIER CON 3 LÍNEAS A LA IZQUIERDA
    noFill(2);
    bezier(94, 235, 94, 209, 90, 185, 130, 197);
    bezier(104, 238, 85, 213, 110, 185, 132, 207);
    line(83, 220, 104, 224);
    line(112, 216, 93, 191);
    line(117, 208, 116, 186);
    noStroke(1);
    fill("#2196F3");
    triangle(176, 158, 188, 127, 205, 142);
    strokeWeight(2);
    stroke("#E78B02");
    line(184, 103, 175, 124);
  
    //TRIÁNGULOS
    noStroke(1);
    fill("#F44336");
    quad(209, 33, 208, 48, 232, 60, 241, 54);
    triangle(186, 68, 210, 33, 222, 48);
    noStroke(1);
    fill("#F44336");
    triangle(280, 89, 251, 60, 243, 68);
    fill(0);
    triangle(275, 30, 208, 84, 223, 93);
    fill(255);
    quad(244, 56, 234, 63, 242, 67, 250, 59);
  
    //COSO AZUL AL LADO DEL OJO
    fill("orange");
    quad(357, 235, 320, 301, 359, 312, 389, 239);
    fill("#222E6D");
    bezier(351, 222, 393, 226, 367, 331, 285, 334);
    fill(255);
    ellipse(357, 237, 10, 10);
    fill(0);
    triangle(414, 444, 304, 303, 296, 309);
    fill("#7B965B");
    quad(121, 230, 200, 325, 326, 283, 254, 144, 326, 283);
    fill("#F0E335");
    triangle(360, 237, 395, 224, 391, 206);
    fill(0);
    quad(397, 204, 401, 219, 408, 220, 404, 204);
  
    //GARABATOSSS
    strokeWeight(2);
    fill(0);
    triangle(412, 92, 50, 424, 56, 431);
    noStroke(2);
    fill("#EED926");
    triangle(83, 66, 141, 230, 204, 201);
    fill("#E02918");
    triangle(177, 225, 53, 229, 82, 287);
    strokeWeight(1);
    stroke(0);
    line(127, 63, 115, 117);
    line(122, 121, 137, 67);
    ellipse(152, 82, 10, 10);
    fill(0);
    quad(151, 158, 185, 210, 167, 232, 145, 192);
    quad(151, 160, 136, 222, 144, 226, 154, 183);
    fill("#043466");
    quad(136, 274, 138, 298, 179, 295, 163, 261);
  
    //RELOJ
    strokeWeight(10);
    stroke(0);
    fill(255);
    ellipse(287, 156, 60, 60);
    noStroke(2);
    fill("#E02918");
    ellipse(294, 152, 10, 10);
    strokeWeight(3);
    stroke(0);
    line(235, 111, 279, 149);
    strokeWeight(2);
    stroke(0);
    line(328, 98, 286, 167);
    noFill();
    strokeWeight(1);
    stroke("#FD9904");
    bezier(238, 105, 222, 92, 213, 107, 225, 113);
    bezier(336, 99, 346, 81, 322, 64, 316, 91);
    stroke("black");
    line(289, 134, 288, 142);
    line(274, 161, 269, 164);
    line(300, 162, 307, 165);
  
    //OJO
    
    strokeWeight(4);
    stroke(0);
  
    line(277, 319, 292, 343);
    line(259, 323, 261, 353);
    line(238, 323, 238, 341);
    fill(255);
    ellipse(250, 250, 150, 150);
    fill("#3587CE");
    ellipse(map(mouseX,186, width,-10, 10)+250, 250, 100, 100);
    noStroke();
    fill(0);
    ellipse(map(mouseX, 186, width, -14, 20)+250, 250, 50, 50);
    fill(255);
    ellipse(map(mouseX, 186, width, -14, 20)+260, 260, 10, 10);
    
    
    //PARPADEO-CLICK IZQ
    if(mouseIsPressed) {
      if (mouseButton == LEFT ){
  push();
    fill(150);
    ellipse(250, 250, 150, 150);
    ellipse(map(mouseX,186, width,-10, 15)+250, 250, 100, 100);
    ellipse(map(mouseX, 186, width, -14, 30)+250, 250, 50, 50);
    ellipse(map(mouseX, 186, width, -14, 30)+260, 260, 10, 10);
  pop();
      }  
    }
    
    //QUAD ABAJO DEL OJO
    noStroke(1);
    fill("#D0861A");
    quad(170, 352, 166, 455, 267, 393, 237, 325);
    strokeWeight(4);
    stroke("black");
    fill(255);
    bezier(190, 301, 222, 336, 117, 480, 54, 428);
    noStroke();
    ellipse(222, 386, 10, 10);
    ellipse(185, 414, 10, 10);
    ellipse(203, 356, 10, 10);
    stroke("#0A5C0D");
    ellipse(222, 386, 1, 1);
    ellipse(185, 414, 1, 1);
    ellipse(203, 356, 1, 1);
    noStroke();
    fill("#F7E973");
    triangle(232, 365, 221, 374, 230, 380);
    triangle(207, 402, 211, 390, 220, 395);
    triangle(193, 373, 195, 363, 204, 365);
    triangle(217, 346, 205, 345, 211, 355);
    triangle(188, 393, 183, 402, 191, 405);
    fill("#F44336");
    ellipse(229, 342, 4, 4);
    ellipse(247, 384, 4, 4);
    ellipse(203, 421, 4, 4);
  
    //BEZIER ABAJO DEL OJO
    stroke("#2196F3");
    fill(255);
    bezier(141, 343, 154, 380, 98, 446, 54, 428);
    strokeWeight(3);
    stroke("orange");
    strokeCap("square");
    bezier(106, 382, 129, 408, 92, 459, 58, 429);
    bezier(141, 348, 164, 371, 133, 401, 107, 382);
    bezier(173, 318, 193, 343, 172, 367, 144, 347);
  
    //LÍNEAS ESQ.INFERIOR DERECHA
    strokeWeight(3);
    stroke(0);
    line(324, 404, 372, 461);
    line(318, 410, 365, 466);
    line(312, 416, 356, 470);
    
  
        
  
  document.oncontextmenu = function () 
     {return false;}
      
    
  }