window.onload = function(){
  var x = 10, y = 10;
  var cv = document.getElementById('cv');
  var ctx = cv.getContext('2d');

  var wd_width = window.innerWidth;
  var wd_height = window.innerHeight;
  ctx.canvas.width  = wd_width;
  ctx.canvas.height = wd_height;


s = star(50,100);

function star(x,y){
    ctx.fillStyle = '#f0e68c';
    ctx.strokeStyle = '#f0e68c';

    ctx.beginPath();
    ctx.moveTo(50+x,100+y);
    ctx.lineTo(250+x, 100+y);
    ctx.lineTo(85+x, 210+y);
    ctx.lineTo(150+x,30+y);
    ctx.lineTo(215+x, 210+y);
    ctx.lineTo(50+x,100+y);
    ctx.fill();

}

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
