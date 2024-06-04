<template>
  <!-- <LoginView></LoginView> -->
  <PaperManageView></PaperManageView>
</template>

<script>
// import LoginView from './views/LoginView.vue';
import PaperManageView from './views/PaperManageView.vue'

export default {
  name: 'App',
  components: {
    // LoginView,
    PaperManageView
  }
}
</script>

<style lang="less">
html,
body {
  width: 1920px;
  height: 919px;
}

li {
  list-style: none;
}
</style>
