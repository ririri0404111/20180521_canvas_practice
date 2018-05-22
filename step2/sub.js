window.onload = function(){ //全部読み込んでから実行する
  var xCoor = 0, yCoor = 0; //座標のスタート位置
  var cv = document.getElementById('cv');　//htmlのcanvasタグのID取得して動かせるようにする
  var ctx = cv.getContext('2d');　//canvasに描画するためのAPIにアクセスできるようにする

  var wd_width = window.innerWidth; //横の画面サイズ取得
  var wd_height = window.innerHeight;　//縦の画面サイズ取得
  console.log(window.innerWidth, window.innerHeight)
  cv.width  = wd_width;　//横の画面サイズをctxに代入 画面サイズに合わせた大きさにする
  cv.height = wd_height;//縦の画面サイズをctxに代入
  if(ctx.canvas == cv){
    console.log('同じ');
  }

  function star(xCoor,yCoor){　//☆の造形まとめた関数
    ctx.fillStyle = '#f0e68c';　//☆の色
    ctx.strokeStyle = '#f0e68c';　//☆の線の色

    ctx.beginPath();　//いまのパスをいったんリセット
    ctx.moveTo(10+xCoor,20+yCoor);　//線の開始位置セット
    ctx.lineTo(50+xCoor, 20+yCoor);　//線を引く
    ctx.lineTo(17+xCoor, 42+yCoor);　//線を引く
    ctx.lineTo(30+xCoor,6+yCoor);　　//線を引く
    ctx.lineTo(43+xCoor, 42+yCoor);　//線を引く
    ctx.lineTo(10+xCoor,20+yCoor);　//線を引く
    ctx.fill();　//塗りつぶし
  }　//star関数終わり

  var flag = false;　//マウスクリックイベントのフラグの箱を用意
  console.log(flag);
  var sideX; //　横
  var lengthY; //　縦
  function onClick(e) { //オンクリックイベント関数

      console.log("click");　//クリックをconsoleに表示
      var x = e.clientX - cv.offsetLeft;　//x座標の水平座標‐
      var y = e.clientY - cv.offsetTop;　//y座標の垂直座標‐
      console.log(cv.offsetLeft,cv.offsetTop);
      console.log("x:", x, "y:", y);//座標をconsoleに表示
      flag = true;　//フラグを立てる
      sideX = x;　　//xの座標を代入
      lengthY = y;　//yの座標を代入
  }

  cv.addEventListener('click', onClick, false);　//クリックイベントを用意

  setInterval(function(){　//一定時間ごとに実行する　ループ　関数
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);//描画をクリアにする
    star(xCoor,yCoor);　//☆の座標をセットして関数実行すr
    xCoor++; yCoor++;　//座標を1ずつ足して右下へ動かしてく
    //console.log(x,y);
      if (flag==true){　//もしフラグがtrueなら
        star(sideX,lengthY);　//クリックしたときstar関数を実行
      }

      if (yCoor>600){　//
        xCoor=0,yCoor=0;
        }
    },100);

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
