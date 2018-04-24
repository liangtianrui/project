<template>
  <div>
    <div class="nav">
      <div @click.prevent="active = 'tab-container1'">tab 1</div>
      <div @click.prevent="active = 'tab-container2'">tab 2</div>
      <div @click.prevent="active = 'tab-container3'">tab 3</div>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          fdkfldflkdjflkds
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          dfdsfdfds
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          dfsdfdsfdsfdsfd
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-tab-container',
    data() {
      return {
        active: 'tab-container1'
      };
    }
  };
</script>

<style lang="css" scoped>
  .item {
    display: inline-block;
  }
  .nav {
    padding: 10px;
  }
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
</style>
