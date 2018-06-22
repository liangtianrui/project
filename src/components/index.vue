<template>
  <div class="index">
    <h1>{{$t('message.index.i1')}}</h1>
    <p>{{$t('message.index.i2')}}</p>
    <p>{{$t('message.index.i3')}}</p>
    <p>{{$t('message.index.i4')}}</p>
  </div>
</template>

<script>
  export default {
    name: 'index',
  }
</script>

<style lang="scss" scoped>
  .index {
    >h1 {
      font-size: 50px;
      margin: 30px 0 50px;
    }
    >p {
      font-size: 35px;
      margin: 50px 0;
    }
  }
</style>
