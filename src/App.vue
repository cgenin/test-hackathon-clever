<template>
  <!--<knacss-demo></knacss-demo>-->
  <layout >
    <router-view></router-view>
  </layout>
</template>

<script>
  import Layout from './layout/Layout';
  import KnacssDemo from './components/pages/KnacssDemo';
  export default {
    name: 'app',
    components: {Layout,KnacssDemo}
  }
</script>

<style>

</style>
