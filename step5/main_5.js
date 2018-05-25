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



var yCoor = [];
for(var num = 0; num < 10; num++){
  yCoor[num] = Math.floor(Math.random()*600);
}

/*
  yCoor[0] = Math.floor(Math.random()*600);
  yCoor[1] = Math.floor(Math.random()*600);
  yCoor[2] = Math.floor(Math.random()*600);
  yCoor[3] = Math.floor(Math.random()*600);
  yCoor[4] = Math.floor(Math.random()*600);
  yCoor[5] = Math.floor(Math.random()*600);
  yCoor[6] = Math.floor(Math.random()*600);
  yCoor[7] = Math.floor(Math.random()*600);
  yCoor[8] = Math.floor(Math.random()*600);
  yCoor[9] = Math.floor(Math.random()*600);*/

  setInterval(function(){　//一定時間ごとに実行する　ループ　関数
      clearCanvas();//canvasをクリアにする
      for(var num = 0; num < 10; num++){
        yCoor[num]++;

      }

      /*yCoor[0]++;
      yCoor[1]++;
      yCoor[2]++;
      yCoor[3]++;
      yCoor[4]++;
      yCoor[5]++;
      yCoor[6]++;
      yCoor[7]++;
      yCoor[8]++;
      yCoor[9]++;*/

    for(var num = 0; num < 10; num++){
      drawStar(xCoor+50*num, yCoor[num]);
    }
    /*  drawStar(xCoor+50*0, yCoor[0]);
      drawStar(xCoor+50*1, yCoor[1]);
      drawStar(xCoor+50*2,yCoor[2]);
      drawStar(xCoor+50*3, yCoor[3]);
      drawStar(xCoor+50*4, yCoor[4]);
      drawStar(xCoor+50*5, yCoor[5]);
      drawStar(xCoor+50*6, yCoor[6]);
      drawStar(xCoor+50*7, yCoor[7]);
      drawStar(xCoor+50*8, yCoor[8]);
      drawStar(xCoor+50*9, yCoor[9]);*/

    for(var num = 0; num <10; num++){
      if (yCoor[num]>600){　//
        yCoor[num]=0;
      }

    }

    /*  if (yCoor[0]>600){　//
        yCoor[0]=0;
      }
      if (yCoor[1]>600){　//
        yCoor[1]=0;
      }
      if (yCoor[2]>600){　//
        yCoor[2]=0;
      }
      if (yCoor[3]>600){　//
        yCoor[3]=0;
      }
      if (yCoor[4]>600){　//
        yCoor[4]=0;
      }
      if (yCoor[5]>600){　//
        yCoor[5]=0;
      }
      if (yCoor[6]>600){　//
        yCoor[6]=0;
      }
      if (yCoor[7]>600){　//
        yCoor[7]=0;
      }
      if (yCoor[8]>600){　//
        yCoor[8]=0;
      }
      if (yCoor[9]>600){　//
        yCoor[9]=0;
      }*/
    },10);
};
