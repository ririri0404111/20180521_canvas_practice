window.onload = function(){ //全部読み込んでから実行する
  var cv = document.getElementById('cv');　//htmlのcanvasタグのID取得して動かせるようにする
  var ctx = cv.getContext('2d');　//canvasに描画するためのAPIにアクセスできるようにする


  var xCoor = 0;
  var yCoor= 0; //座標のスタート位置

  var starColor = ['#f0e68c','#ffb6c1','#dda0dd','#fffaf0','#afeeee','#ff69b4','#7fffd4','#add8e6','#ffe4b5'];
  var change = Math.floor(Math.random()*starColor.length);
  //☆の色をセットして更新都度ランダムで色チェンジ



  var wd_width = window.innerWidth; //横の画面サイズ取得
  var wd_height = window.innerHeight;　//縦の画面サイズ取得
  cv.width  = wd_width;　//横の画面サイズをctxに代入 画面サイズに合わせた大きさにする
  cv.height = wd_height;//縦の画面サイズをctxに代入

  function clearCanvas(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  function drawStar(xCoor,yCoor){　//☆の造形まとめた関数
    ctx.fillStyle = starColor[change];　//☆の色
    ctx.strokeStyle = '#f0e68c';　//☆の線の色

    ctx.beginPath();　//いまのパスをいったんリセット
    ctx.moveTo(10+xCoor,20+yCoor);　//線の開始位置セット
    ctx.lineTo(50+xCoor, 20+yCoor);　//線を引く
    ctx.lineTo(17+xCoor, 42+yCoor);　//線を引く
    ctx.lineTo(30+xCoor,6+yCoor);　　//線を引く
    ctx.lineTo(43+xCoor, 42+yCoor);　//線を引く
    ctx.lineTo(10+xCoor,20+yCoor);　//線を引く
    ctx.fill();　//塗りつぶし
  }　//star関数終わり\


  var kaisuu = 0;

  yCoor1 = Math.floor(Math.random()*600);
  yCoor2 = Math.floor(Math.random()*600);
  yCoor3 = Math.floor(Math.random()*600);
  yCoor4 = Math.floor(Math.random()*600);
  yCoor5 = Math.floor(Math.random()*600);
  yCoor6 = Math.floor(Math.random()*600);
  yCoor7 = Math.floor(Math.random()*600);
  yCoor8 = Math.floor(Math.random()*600);
  yCoor9 = Math.floor(Math.random()*600);
  yCoor10 = Math.floor(Math.random()*600);

  console.log(yCoor1,yCoor2,yCoor3,yCoor4,yCoor5,yCoor6,yCoor7,yCoor8,yCoor9,yCoor10);

  setInterval(function(){　//一定時間ごとに実行する　ループ　関数
      clearCanvas();//canvasをクリアにする
      yCoor1++;
      yCoor2++;
      yCoor3++;
      yCoor4++;
      yCoor5++;
      yCoor6++;
      yCoor7++;
      yCoor8++;
      yCoor9++;
      yCoor10++;

      drawStar(xCoor+50*0, yCoor1);
      drawStar(xCoor+50*1, yCoor2);
      drawStar(xCoor+50*2, yCoor3);
      drawStar(xCoor+50*3, yCoor4);
      drawStar(xCoor+50*4, yCoor5);
      drawStar(xCoor+50*5, yCoor6);
      drawStar(xCoor+50*6, yCoor7);
      drawStar(xCoor+50*7, yCoor8);
      drawStar(xCoor+50*8, yCoor9);
      drawStar(xCoor+50*9, yCoor10);

      if (yCoor1>600){　//
        yCoor1=0;
      }
      if (yCoor2>600){　//
        yCoor2=0;
      }
      if (yCoor3>600){　//
        yCoor3=0;
      }
      if (yCoor4>600){　//
        yCoor4=0;
      }
      if (yCoor5>600){　//
        yCoor5=0;
      }
      if (yCoor6>600){　//
        yCoor6=0;
      }
      if (yCoor7>600){　//
        yCoor7=0;
      }
      if (yCoor8>600){　//
        yCoor8=0;
      }
      if (yCoor9>600){　//
        yCoor9=0;
      }
      if (yCoor10>600){　//
        yCoor10=0;
      }

      /*for(p=0; p<10; p++) {
        var star_x = xCoor + 50*p;
        var random = 100;//Math.floor(Math.random()*600);
        var star_y = yCoor;
        if(p==0){
          yCoor = yCoor1;
        }

        drawStar(star_x, star_y);
      //  console.log(star_x, star_y);
      }
      yCoor++;


      if (yCoor>600){　//
        xCoor=0,yCoor=0;
      }
*/
    },10);


};






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
//}
