window.onload = function(){
  var x = 10, y = 10;
  var cv = document.getElementById('cv');
  var ctx = cv.getContext('2d');


  var wd_width = window.innerWidth;
  var wd_height = window.innerHeight;
  ctx.canvas.width  = wd_width;
  ctx.canvas.height = wd_height;

     function star(x,y){
        ctx.fillStyle = '#f0e68c';
        ctx.strokeStyle = '#f0e68c';

        ctx.beginPath();
        ctx.moveTo(10+x,20+y);
        ctx.lineTo(50+x, 20+y);
        ctx.lineTo(17+x, 42+y);
        ctx.lineTo(30+x,6+y);
        ctx.lineTo(43+x, 42+y);
        ctx.lineTo(10+x,20+y);
        ctx.fill();
    }

  function onClick(e) {
    console.log("click");
    var x = e.clientX - cv.offsetLeft;
    var y = e.clientY - cv.offsetTop;
    console.log("x:", x, "y:", y);
    star(x,y);
}
cv.addEventListener('click', onClick, false);


};
step();





/*ctx.fillStyle = '#f0e68c';
ctx.strokeStyle = '#f0e68c';

ctx.beginPath();
ctx.moveTo(50,  100);
ctx.lineTo(250, 100);
ctx.lineTo(85, 210);
ctx.lineTo(150,30);
ctx.lineTo(215, 210);
ctx.lineTo(50,100);
ctx.fill();*/

  /*setInterval(function(){

    ctx.fillStyle = '#ff69b4';
    ctx.fillRect(10,10,50,60);
    ctx.fillStyle = '#ff69b4';
    ctx.fillRect(x,y,100,100);
    x++; y++;
    console.log(x,y);
    /*if (y>600){
      x=0,y=0;
    }
  },10);*/
}
