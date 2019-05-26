<template>
  <button-flat :click="cb">
    <div class="grid">
      <div class="push">{{label}}&nbsp;&nbsp;</div>
      <div class="one-fifth push"><i class="fa fa-chevron-right"></i></div>
    </div>
  </button-flat>
</template>
<script>
  import ButtonFlat from '../components/ButtonFlat';
  export default {
    props: ['label', 'cb'],
    name: 'asideItem',
    data(){
      return {};
    },
    components: {
      ButtonFlat
    }
  }
</script>
<style>
  /*.aside-item {*/
  /*font-size: 1.5em;*/
  /*cursor: pointer;*/
  /*margin: 10px;*/
  /*padding-left: 10px;*/
  /*padding-right: 10px;*/
  /*}*/
</style>
