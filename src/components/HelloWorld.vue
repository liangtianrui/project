<template>
  <div>
    <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
      <!--<el-menu-item index="1">处理中心</el-menu-item>-->
      <!--<el-submenu index="2">-->
        <!--<template slot="title">我的工作台</template>-->
        <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
        <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
        <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
        <!--<el-submenu index="2-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
        <!--</el-submenu>-->
      <!--</el-submenu>-->
      <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
      <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
    <!--</el-menu>-->
    <!--<div class="line"></div>-->
    <!--<el-menu-->
      <!--:default-active="activeIndex2"-->
      <!--class="el-menu-demo"-->
      <!--mode="horizontal"-->
      <!--@select="handleSelect"-->
      <!--background-color="#545c64"-->
      <!--text-color="#fff"-->
      <!--active-text-color="#ffd04b">-->
      <!--<el-menu-item index="1">处理中心</el-menu-item>-->
      <!--<el-submenu index="2">-->
        <!--<template slot="title">我的工作台</template>-->
        <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
        <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
        <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
        <!--<el-submenu index="2-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
        <!--</el-submenu>-->
      <!--</el-submenu>-->
      <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
      <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
    <!--</el-menu>-->
    <!--<preview></preview>-->
    <div class="input">
      <input :class="[{'error': isError == true}, {'ok': isOk == true}]" type="text" v-model="number">
    </div>
    <button @click="click">点击判断</button>
  </div>
</template>

<script>
  import preview from './preview'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isError: false,
        isOk: false,
        number: ''
      };
    },
    components: {
      preview
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      click() {
        console.log(this.number != 1)

        if (this.number != 1) {
          this.isError = true
        } else {
          this.isOk = true
        }
      }
    }
  }
</script>
<style lang="css">
  .input {
    width: 300px;
  }
  .input input {
    width: 100%;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    height: 50px;
    padding:  0 20px;
  }
  input:focus{
    outline:none;
    border: 1px solid #999999;
  }
  .error {
    color: #FF534C !important;
    border: 1px solid #FF534C !important;
    background: url("../../src/assets/error.png") no-repeat 320px center;
    background-size: 18px 18px ;
  }
  .ok {
    border: 1px solid #2196F3 !important;
    color: #333333 !important;
    font-size: 14px;
  }
</style>
