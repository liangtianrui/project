<template>
  <div>
    <div class="contents">
      <button class="contentsBtn click" v-if="isShow" @click="shave">点我刮奖</button>
      <div v-if="state == 4">
        <p>恭喜您获得{{money||0}}元现金券</p>
        <p>已发放到您的券包,请及时领取</p>
        <button class="contentsBtn" @click="oneAgain">再刮一次</button>
      </div>
      <div v-else-if="state == 5">
        <p>暂无刮奖机会</p>
        <p>快去投资一笔吧！</p>
        <button class="contentsBtn" @click="immediately">立即投资</button>
      </div>
      <canvas id="canvas" ref="canvas"></canvas>
      <footer>
        <div>今日剩余次数：{{count||0}}次</div>
        <p>小贴士：单笔投资金额越大，奖金越多哦！</p>
      </footer>
    </div>

  </div>
</template>

<script>
  export default {
    name: "contents",
    data() {
      return {
        money: 0,
        count: 5, // 次數
        state: 6, // 0活动还没开始 1活动结束 2点击开始刮奖 3开始刮奖 4刮完得奖 5没有机会 6初始
        isShow: true // 点我刮奖
      }
    },
    mounted() {
      this.hua()
    },
    methods: {
      hua() {
        var canvas = document.getElementById('canvas') // 获取元素
        canvas.width = '560'
        canvas.height = '244'
        var img = new Image()
        img.src = require('../assets/images/mask.png')
        var ctx = canvas.getContext('2d') // 生成画布
        img.onload = function() {
          ctx.drawImage(img, 0, 0)
          ctx.globalCompositeOperation = 'destination-out' // 橡皮擦
        }
        let pos = 0, // 手指总共划过的距离
          x = 0, // x轴走过的距离
          y = 0 // y轴走过的距离
        ctx.beginPath() // 开始
        ctx.lineWidth = 120  // 线的宽度
        var canvaL = canvas.getBoundingClientRect().left //
        var canvaT = canvas.getBoundingClientRect().top  // 160是margin-top的距离
        var _this = this

        let startX = 0, // 手指开始的位置
          startY = 0,
          moveX = 0, // 手指移动的位置
          moveY = 0,
          num = 0 // 用他来做数据请求的条件
        canvas.onmousedown = function (e) {
          // 手指按下位置
          startX = e.pageX
          startY = e.pageY
          console.log(startX,startY)
          ctx.moveTo(startX - canvaL, startY - canvaT) // 线条开始

        }

        canvas.onmousemove = function (e) {
          // 手指移动位置
          moveX = e.pageX
          moveY = e.pageY
          ctx.lineTo(moveX - canvaL, moveY - canvaT) // 线条到达位置
          // 计算手指移动的距离
          x = (startX - moveX)
          y = (startY - moveY)
          pos += Math.abs(x)
          pos += Math.abs(y)
          num++
          if (num === 1) {
            _this.money = 10
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
            img.src = require('../assets/images/mask.png')
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
      // 点我刮奖
      shave() {
        if (this.state <= 1) {
          this.isAlert = true
          return
        }
        if (this.count > 0) {
          this.state = 4
          this.isShow = false
          this.$refs.canvas.style.visibility = 'visible'
          this.$refs.canvas.style.zIndex = '1'
        } else {
          this.isShow = false
          this.state = 5
        }
      },
      // 再一次
      oneAgain() {
        if (this.count > 0) {
          this.state = 4
          this.$refs.canvas.style.zIndex = '1'
          this.$refs.canvas.style.visibility = 'visible'
        } else {
          this.state = 5
        }
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .contents
    width 560px
    height 244px
    background url('../assets/images/mask.png') no-repeat
    background-size contain
    position absolute
    left 95px
    top 186px
    font-size 30px
    font-family PingFangSC-Regular
    text-align center
    canvas
      /*position relative*/
      visibility hidden
      user-select none
      z-index -100
      position absolute
      top 0
      left 0
      background transparent
    .contentsBtn
      width 230px
      height 70px
      border-radius 100px
      color #fff
      line-height 70px
      background-image linear-gradient(-90deg, #FF9D9B 0%, #EF6766 100%)
      font-size 30px
    .click
      text-align center
      margin-top 87px
    > div
      width 100%
      height 100%
      background-color #FDF5EA
      text-align center
      padding 35px
      > p:nth-of-type(1)
        color #D3473E
        font-size 40px
      > p:nth-of-type(2)
        color #D6524A
        font-size 24.2px
        margin 20px 0
    footer
      width 100%
      text-align center
      position absolute
      top 250px
      >div
        color #EF6765
        font-size 30px
        margin 60px 0 20px
      >p
        color #999999
        font-size 24px

</style>
