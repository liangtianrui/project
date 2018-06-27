<template>
  <div class="header">
    <ul>
      <router-link to="/" active-class="active" exact>{{$t('message.header.h1')}}</router-link>
      <router-link to="/downLoadImg" active-class="active">{{$t('message.header.h2')}}</router-link>
      <router-link to="/myCanvas" active-class="active">{{$t('message.header.h3')}}</router-link>
      <router-link to="/swiper" active-class="active">{{$t('message.header.h4')}}</router-link>
      <router-link to="/moveLeft" active-class="active">{{$t('message.header.h5')}}</router-link>
      <router-link to="/hover" active-class="active">{{$t('message.header.h6')}}</router-link>
      <router-link to="/preview" active-class="active">{{$t('message.header.h7')}}</router-link>
      <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        {{defaultlanguage}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown" @command="handleCommand">
          <el-dropdown-item command="cn">{{langs.cn}}</el-dropdown-item>
          <el-dropdown-item command="en">{{langs.en}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "headers",
    data() {
      return {
        defaultlanguage: 'English',
        langs: {
          cn: '中文',
          en: 'English',
        }
      }
    },
    methods: {
      handleCommand(command) {
        console.log(command)
        this.defaultlanguage = this.langs[command]
        this.$i18n.locale = command
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 222;
    border: 1px dashed black;
    font-size: 24px;
    background-color: rgba(255, 255, 255, 0.3);
    ul {
      margin: 0 auto;
      border-radius: 5px;
      user-select: none;
      a {
        display: inline-block;
        padding: 30px 20px;
        color: #ffffff;
        text-decoration: none;
        user-select: none;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          margin: auto;
          width: 100%;
          background: aquamarine;
          height: 2px;
          transition: transform .5s;
          transform: scaleX(0);
          transform-origin: 100% 0;
        }
        &:hover::before {
          transform: scaleX(1);
          transform-origin: 0 0;
        }
      }
      .active {
        color: aquamarine;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          margin: auto;
          width: 100%;
          background: aquamarine;
          height: 2px;
          transition: transform .5s;
          transform: scaleX(1);
          transform-origin: 100% 0;
        }
      }
    }
    .el-dropdown {
      color: #ffffff !important;
      font-size: 24px !important;
      .el-dropdown-link {
        user-select: none;
      }
    }
  }
</style>
