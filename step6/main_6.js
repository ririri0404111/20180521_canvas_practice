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



var yCoor = []; //y座標の箱を用意
for(var num = 0; num < 10; num++){　//num=回る回数、10まで回す
  yCoor[num] = Math.floor(Math.random()*600);　//y座標[num回目]＝ランダム*600
}

  setInterval(function(){　//一定時間ごとに実行する　ループ　関数
      clearCanvas();//canvasをクリアにする⇒y座標を1プラスする⇒星を描く、ループ
      for(var num = 0; num < 10; num++){　
        yCoor[num]++;　　　　　　//y座標を1プラスする

      }

    for(var num = 0; num < 10; num++){
      drawStar(xCoor+50*num, yCoor[num]);　//星を1つ描く、x座標＋50y座標⁺num分ずれて星を描くループ
    }

    for(var num = 0; num <10; num++){
      if (yCoor[num]>600){　//星がy座標1追加ずつ描かれていって600まできたら0にするループ
        yCoor[num]=0;
      }

    }
  },10);
};
