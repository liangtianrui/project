<template>
  <div>
    <div class="list" showCloseButton="true" v-for="(n, index) in imageList" :data-index="index">
      <img @click="open($event)" :src="n.url">
    </div>
    <vue-preview :slides="slide1" @close="handleClose"></vue-preview>

    <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100">
  </div>
</template>

<script>
  import fancyBox from 'vue-fancybox';
  export default {
    data () {
      return {
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ],
        list: [{
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }],
        imageList: [
          { width: 900, height: 675, url: 'http://ocm0knkb1.bkt.clouddn.com/1-1.jpg' },
          { width: 601, height: 1024, url: 'http://ocm0knkb1.bkt.clouddn.com/1-2.jpg' },
          { width: 1024, height: 700, url: 'http://ocm0knkb1.bkt.clouddn.com/1-3.jpg' }
        ]
      }
    },
    methods: {
      open (e) {
        fancyBox(e.target, this.imageList);
      }
    }
  }
</script>
