<template>
  <div id="app">
    <router-view/>
    <tab-bar/>
  </div>
</template>

<script>
import TabBar from '@/components/tabBar/tabBar.vue'
export default {
  name:"App",
  components:{TabBar}
}
</script>
<style lang="less">
#app {
  // width: 100%;
  // height: 100%;
  border: 1px solid #f00;
}

</style>
