<template>
<div>
  <canvas id="myCanvas" style='border:1px solid black'></canvas>
</div>
</template>

<script>
  export default {
    name: 'myCanvas',
    mounted() {
      this.draw()
    },
    methods: {
      draw() {
        // var canvas = document.getElementById('myCanvas') // 获取元素
        // canvas.width = '100'
        // canvas.height = '244'
        // var  ctx = canvas.getContext('2d') // 生成画布
        // ctx.beginPath() // 开始
        // ctx.strokeStyle  = '#000'
        // ctx.lineWidth = 10
        // var canvaL=canvas.getBoundingClientRect().left
        // var canvaT=canvas.getBoundingClientRect().top
        // console.log(canvaL, canvaT)
        // let startX = 0,
        //   startY = 0,
        //   moveX = 0,
        //   moveY = 0
        // canvas.ontouchstart = function (e) {
        //   startX = e.touches[0].pageX
        //   startY = e.touches[0].pageY
        //   ctx.moveTo(startX - canvaL, startY - canvaT) // 线条开始
        //   console.log(startX - canvaL, startY - canvaT)
        // }
        //
        // canvas.ontouchmove = function (e) {
        //   moveX = e.touches[0].pageX
        //   moveY = e.touches[0].pageY
        //   ctx.lineTo(moveX - canvaL, moveY - canvaT) // 线条到达位置
        //   console.log(moveX - canvaL, moveY - canvaT)
        //   ctx.stroke() // 结束
        // }
        //
        // canvas.ontouchend = function (e) {
        //   console.log(e.changedTouches[0].pageX, e.changedTouches[0].pageY)
        //   ctx.stroke() // 结束
        //
        // }
        var canvas = document.getElementById('myCanvas') // 获取元素
        canvas.width = '560'
        canvas.height = '244'
        var img = new Image()
        img.src = require('../assets/mask.png') // 默认的背景图片
        var ctx = canvas.getContext('2d') // 生成画布
        img.onload = function() {
          ctx.drawImage(img, 0, 0)
          ctx.globalCompositeOperation = 'destination-out' // 橡皮擦
        }
        // ctx.strokeStyle = '#FDF5EA' // 线的颜色
        let pos = 0, // 手指总共划过的距离
          x = 0, // x轴走过的距离
          y = 0 // y轴走过的距离
        ctx.beginPath() // 开始
        ctx.lineWidth = 120  // 线的宽度
        var canvaL = canvas.getBoundingClientRect().left //
        var canvaT = canvas.getBoundingClientRect().top  // 160是margin-top的距离
        var _this = this
        function bodyScroll(event) { // 默认事件 点击canvas时屏幕不跳动
          event.preventDefault();
        }

        let startX = 0, // 手指开始的位置
          startY = 0,
          moveX = 0, // 手指移动的位置
          moveY = 0,
          num = 0 // 用他来做数据请求的条件
        canvas.ontouchstart = function (e) {
          // 手指按下位置
          startX = e.touches[0].pageX
          startY = e.touches[0].pageY
          ctx.moveTo(startX - canvaL, startY - canvaT) // 线条开始
          document.body.addEventListener('touchmove', bodyScroll, false);

        }

        canvas.ontouchmove = function (e) {
          // 手指移动位置
          moveX = e.touches[0].pageX
          moveY = e.touches[0].pageY
          ctx.lineTo(moveX - canvaL, moveY - canvaT) // 线条到达位置
          // 计算手指移动的距离
          x = (startX - moveX)
          y = (startY - moveY)
          pos += Math.abs(x)
          pos += Math.abs(y)
          num++
          if (num === 1) {
            _this.shaveData() // 数据请求
          }
          ctx.stroke() // 结束
        }
        canvas.ontouchend = function (e) {
          ctx.stroke() // 结束
          document.body.removeEventListener('touchmove', bodyScroll, false);
          // 手指抬起的位置
          let endX = startX - e.changedTouches[0].pageX,
            endY = startY - e.changedTouches[0].pageY
          if (pos >= 3000) {
            _this.state = 4
            _this.$refs.canvas.style.zIndex = '-20'
            _this.$refs.canvas.style.visibility = 'hidden'
            canvas.width = canvas.width
            canvas.height = canvas.height
            ctx.lineWidth = 120
            var img = new Image()
            img.src = require('../assets/mask.png')
            img.onload = function () {
              ctx.drawImage(img, 0, 0)
              ctx.globalCompositeOperation = 'destination-out';
            }

            pos = 0
            x = 0
            y = 0
            num = 0
          }
        }
      },
    }
  }
</script>
