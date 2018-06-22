<template>
  <div id="app">
    <vheader></vheader>
    <div id="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import vheader from '@/components/header'

  export default {
    name: 'App',
    components: {
      vheader
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    height: 100vh;
    background: url("http://area.sinaapp.com/bingImg/") no-repeat;
    background-size: cover;
    color: #ffffff;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @keyframes scale {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  #container {
    width: 90%;
    height: 70vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 0;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    padding: 50px;
    box-sizing: border-box;
    animation: scale 2s ease-out;
  }
  #container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(8px);
    z-index: -3;
    margin: -30px;
    background-image: url("http://area.sinaapp.com/bingImg/");
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;
  }

</style>
