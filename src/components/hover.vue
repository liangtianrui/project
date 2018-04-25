<template>
  <div class="big">
    <div class="div1">中间开始中间结束</div>
    <div class="div2">左边开始右边结束</div>
    <div class="div3">左边开始右边结束</div>
    <div class="div4">左上开始右下结束</div>
    <div class="div5">上中开始下中结束</div>
  </div>
</template>

<script>
  export default {
    name: "hover"
  }
</script>

<style lang="css">
  .big>div {
    font-size: 20px;
    position: relative;
    width: 200px;
    height: 60px;
    line-height: 60px;
    margin: 20px;
  }
  .big>div::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200px;
    background: aquamarine;

  }
  .div1:before {
    height: 2px;
    transition: transform .5s;
    transform: scaleX(0);
  }
  .div1:hover::before {
    transform: scaleX(1);
  }
  .div2:before {
    height: 2px;
    transition: transform .5s;
    transform: scaleX(0);
    transform-origin: 100% 0;
  }
  .div2:hover::before {
    transform: scaleX(1);
    transform-origin: 0 0;
  }
  .div3:before {
    height: 60px;
    z-index: -1;
    transform: scale3d(0, 1, 1);
    transform-origin: 100% 50%;
    transition: transform .5s;
  }
  .div3:hover::before {
    transform: scale3d(1, 1, 1);
    transform-origin: 0% 50%;
    transition-timing-function: ease-in;
  }
  .div4::before {
    z-index: -1;
    height: 60px;
    transform: scale3d(0, 0, 1);
    transform-origin: 100% 100%;
    transition: transform .5s;
  }
  .div4:hover::before {
     transform: scale3d(1, 1, 1);
     transform-origin: 0% 0%;
   }
  .div5::before {
    z-index: -1;
    height: 60px;
    transform: scale3d(0, 0, 1);
    transform-origin: 50% 100%;
    transition: transform .5s;
  }
  .div5:hover::before {
    transform: scale3d(1, 1, 1);
    transform-origin: 50% 0%;
  }
</style>
