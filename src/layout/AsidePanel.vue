<template>
  <div id="aside" v-bind:class="classAside">
    <div class="menu one-third flex-container-v">
      <div class="header dark-primary-color text-primary-color">
        <h3>Menu</h3>
      </div>
      <aside-item v-for="r in ListRoutes" v-bind:key="r.path" v-bind:cb="doRoute(r)" v-bind:label="r.label"></aside-item>
    </div>
    <div class="layer-close" v-on:click.stop.prevent="doClose">&nbsp;</div>
  </div>
</template>
<script>
  import ListRoutes from '../list-routes';
  import AsideItem from './AsideItem';
  export default {
    props: ['visible', 'onClose'],
    name: 'asidePanel',
    data(){
      return {ListRoutes};
    },
    methods: {
      doClose(){
        this._props.onClose();
      },
      doRoute(route){
        return () => {
          this.$router.push(route.path);
          this.doClose();
        };
      }
    },
    computed: {
      classAside: function () {
        const {visible} = this._props;
        return {grid: true, visible};
      }
    },
    components: {AsideItem}
  }
</script>
<style>
  #aside {
    position: fixed;
    top: -100vh;
    left: -100vw;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
  }

  #aside.visible {
    top: 0;
    left: 0;
  }

  #aside > .menu {
    background-color: white;
    opacity: 1;
  }

  #aside > .menu > .header {
    padding-top: 1.5em;
    padding-left: 2em;
  }

  #aside > .layer-close {
    background-color: rgb(0, 0, 0);
    opacity: 0.5;
    cursor: pointer;
  }


</style>
