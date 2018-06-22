<template>
  <div>
    <canvas id="canvas" width="500" height="500"></canvas>
    <a href="" id="down">下载</a>
  </div>
</template>

<script>
  export default {
    name: 'downimg',
    mounted() {
      this.downImg()

    },
    methods: {
      downImg() {
        var canvas = document.getElementById('canvas'),
          down = document.getElementById('down'),
          ctx = canvas.getContext('2d'),
          img = new Image()

        img.src = require('../assets/images/logo.png')
        img.onload = function () {
          ctx.drawImage(img, 150, 150, 200, 200)

          ctx.moveTo(0,0);
          ctx.lineTo(500,500);
          ctx.lineWidth = 5;
          ctx.strokeStyle = "red";
          ctx.stroke();
          ctx.moveTo(500, 0)
          ctx.lineTo(0, 500)
          ctx.stroke()
          down.href = canvas.toDataURL("image/png");
          down.download = "logo.png";
        }

      }
    }
  }
</script>

<style lang="css">
  canvas {
    border: 1px solid black;
    z-index: 2;
  }
</style>
