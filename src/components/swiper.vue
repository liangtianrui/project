<template>
  <div>
    请在移动模式下查看
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img src="../assets/images/shouye_nvsheng_washblow_one.png" class="main-img">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/shouye_nvsheng_washcutblow_two.png" class="main-img">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/shouye_nvsheng_hairperm_three.png" class="main-img">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/shouye_nvsheng_hairdye_four.png" class="main-img">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/shouye_nvsheng_haircare_five.png" class="main-img">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/shouye_nvsheng_packeage_six.png" class="main-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          loop: true,
          slidesPerView : 2,
          centeredSlides : true,
          pagination: {
            el: '.swiper-pagination',
          },
        },
      }
    }
  }
</script>
<style lang="css">
  .swiper-container {
    width: 100%;
  }
  .swiper-slide {
    width: 50% !important;
    height: 630px;
    margin: 0 auto;
    transform-style: preserve-3d;
    text-align: center;
    position: relative;
  }

  .swiper-slide-active img {
    transform: scale(1.2);
  }

  .swiper-slide img {
    display: block;
    width: 80%;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    transition: all ease .4s;
  }

  .swiper-slide-next {
    position: relative;
  }

  .swiper-slide-next img, .swiper-slide-prev img {
    z-index: 3;
    transition: all ease .4s;
    color: transparent;
  }
</style>
