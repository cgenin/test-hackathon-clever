<template>
  <div :class="classPaper">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: ['class'],
    name: 'Paper',
    computed: {
      classPaper: function () {
        const def = {'paper-panel': true,};
        if (this._props.class) {
          def[this._props.class] = true;
        }
        return def;
      }
    }
  }
</script>
<style>
  .paper-panel {
    border-radius: 2px;
    border: 0;
    -webkit-box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
  }
</style>
