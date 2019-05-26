<template>
  <div id="layout" class="flex-container-v has-gutter-x2">
    <div class="nav-bar dark-primary-color text-primary-color">
      <div style="max-width: 3em"><a href="#" v-on:click.stop.prevent="doVisibleMenu"><i
        class="fa text-primary-color fa-bars fa-2x btn-menu"></i></a></div>
      <div class="title txtleft" style="vertical-align: middle"><h2>&nbsp;Test-app</h2></div>
    </div>
    <slot></slot>
    <aside-panel v-bind:visible="visibleMenu" v-bind:on-close="doVisibleMenu"></aside-panel>
  </div>
</template>
<script>
  import AsidePanel from './AsidePanel';
  export default {
    name: 'layout',
    data () {
      return {visibleMenu: false};
    },
    methods: {
      doVisibleMenu(){
        this.$data.visibleMenu = !this.$data.visibleMenu;
      }
    },
    components: {
      AsidePanel
    }
  }
</script>
<style>
  body {
    min-height: 100vh;
    position: relative;
    background-color: whitesmoke;
  }

  #layout {
    min-height: 100vh;
    /*max-height: 100vh;*/
    /*height: 100vh;*/
    /*width: 100vw;*/
    /*max-width: 100vw;*/
    /*min-width: 100vw;*/
    background-color: whitesmoke;
  }

  #layout > .nav-bar,
  #layout > .nav-bar a,
  #layout > .nav-bar a:hover {
    text-decoration: none;
  }

  #layout > .nav-bar {
    height: 2.75em;
    padding-bottom: 5px;
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  #layout > .nav-bar .fa.btn-menu {
    border: 1px solid whitesmoke;
    margin: 2px;
    padding: 3px;
    border-radius: 5px;
  }
  #layout > .nav-bar > .title{
    margin-left: 10px;
    text-overflow: ellipsis;
  }
  #layout > .nav-bar h2 {
    margin-top: auto;
    margin-bottom: auto;
  }

</style>
