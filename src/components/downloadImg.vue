<template>
  <div>
    <input type="file" accept="audio/*|video/*|image/*|MIME_type">

    <canvas id="canvas" width="500" height="500"></canvas>
    <a href="" id="down">下载</a>
    <input type="button" value="Save picture to Gallery" @click="savePicture()">
  </div>
</template>

<script>
  export default {
    name: 'downimg',
    mounted() {
      this.downImg()
      document.addEventListener("plusready", this.onPlusReady, false);
      var r = null;
    },
    methods: {
      // 扩展API加载完毕，现在可以正常调用扩展API

      onPlusReady() {
      },
      // 保存图片到相册中
      savePicture() {
        // plus.gallery.save( "../assets/logo.png", function () {
        //   alert( "保存图片到相册成功" );
        // } );
        alert(plus)
      },
      downImg() {
        var canvas = document.getElementById('canvas'),
          down = document.getElementById('down'),
          ctx = canvas.getContext('2d'),
          img = new Image()

        img.src = require('../assets/logo.png')
        img.onload = function () {
          ctx.drawImage(img, 150, 150, 200, 200)
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
  }
</style>
