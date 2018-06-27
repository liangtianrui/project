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
<style lang="css" scoped>
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
</style>

<style lang="css">
  @keyframes pop {
    from {
      transform: translate(0%);
    }
    to {
      transform: translate(-50%);
    }
  }
</style>
