window.onload = function(){ //全部読み込んでから実行する
  var xCoor = 0, yCoor = 0; //座標のスタート位置
  var cv = document.getElementById('cv');　//htmlのcanvasタグのID取得して動かせるようにする
  var ctx = cv.getContext('2d');　//canvasに描画するためのAPIにアクセスできるようにする

  var wd_width = window.innerWidth; //横の画面サイズ取得
  var wd_height = window.innerHeight;　//縦の画面サイズ取得
  console.log(window.innerWidth, window.innerHeight)
  cv.width  = wd_width;　//横の画面サイズをctxに代入 画面サイズに合わせた大きさにする
  cv.height = wd_height;//縦の画面サイズをctxに代入

  function clearCanvas(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);}

  function drawStar(xCoor,yCoor){　//☆の造形まとめた関数
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
  }　
  setInterval(function(){　//一定時間ごとに実行する　ループ　関数
    clearCanvas();//canvasをクリアにする
    for(i = 0; i<100; i++){

      var min = 0 ;
      var max = 600 ;
      var x = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      var y = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      xCoor = x;
      yCoor = y;
      drawStar(xCoor,yCoor);}
    //xCoor++; yCoor++;　//消して描いて新しく描く位置の座標を書いてくりかえし

  },100);

}
