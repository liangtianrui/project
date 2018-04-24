<template>
  <div class="pop">
    <ul :style='{width:ulWidth,animation:animation}'>
      <li v-for='item in popList' class='popItem'>{{item}}</li>
    </ul>
  </div>
</template>
<script>
  export default  {
    name: 'moveLeft',
    data() {
      return {
        ulWidth: '100%',
        animation: '',
        popList: ['133****0006获得10元抵扣券奖励','133****0006获得10元抵扣券奖励','133****0006获得10元抵扣券奖励','133****0006获得10元抵扣券奖励','133****0006获得10元抵扣券奖励', '133****0006获得10元抵扣券奖励', '133****0006获得10元抵扣券奖励', '133****0006获得10元抵扣券奖励', '133****0006获得10元抵扣券奖励', '133****0006获得10元抵扣券奖励', '133****0006获得10元抵扣券奖励', '133****0006获得10元抵扣券奖励', '133****0006获得10元抵扣券奖励', '133****0006获得10元抵扣券奖励', '133****0006获得10元抵扣券奖励'],
      }
    },
    mounted() {
      var u = navigator.userAgent;
      console.log(u)
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isAndroid) {

      } else {
        location.href = 'https://itunes.apple.com/cn/app/id1318643225'
      }
      // alert('是否是Android：'+isAndroid);
      // alert('是否是iOS：'+isiOS);
      this.move()
    },
    methods: {
      move() {
        var self = this
        self.popList = self.popList.concat(self.popList);
        setTimeout(function() {
          self.ulWidth = 0;
          let itemList = document.querySelectorAll('.popItem');

          for (var i = 0; i < itemList.length; i++) {
            self.ulWidth += Number(itemList[i].offsetWidth);
            self.ulWidth += 40;
          }
          self.ulWidth += 'px';
          if (itemList.length < 4) {
            self.animation = ' ';
          } else {
            var time = Math.abs(parseInt(self.ulWidth) / 2 / 60);
            self.animation = 'pop ' + time + 's linear infinite';
          }
        }, 300)
      }
    }
  }
</script>
<style lang="css">
  .pop {
    width: 670px;
    height: 65px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }

  ul {
    width: auto;
    height: 33px;
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 24px;
    color: #FF534C;
    float: left;
    margin-right: 40px;
  }

  @keyframes pop {
    from {
      transform: translate(0%);
    }
    to {
      transform: translate(-50%);
    }
  }


</style>
