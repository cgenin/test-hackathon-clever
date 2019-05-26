<template>
  <button  @click="click" :class="classA">
    <i :class="classIcon"></i>
  </button>
</template>
<script>
  export default{
    props: ['type', 'click', 'icon', 'size'],
    name: 'buttonFab',
    computed: {
      classA: function () {
        const primary = this._props.type === 'primary';
        const inverse = this._props.type === 'inverse';
        const success = this._props.type === 'success';
        const info = this._props.type === 'info';
        const warning = this._props.type === 'warning';
        const danger = this._props.type === 'danger';
        const large = this._props.size === 'large';
        return {
          'button-fab': true,
          'button-lg': large,
          'button-inverse': inverse,
          'button-primary': primary,
          'button-success': success,
          'button-info': info,
          'button-warning': warning,
          'button-danger': danger,
        };
      },
      classIcon: function () {
        const def = {
          fa: true,
        };
        def[this._props.icon] = true;
        return def;
      }
    }
  }
</script>
<style scoped>
  .button-fab {
    border-radius: 1em;
    font-size: 1.5em;
    padding: 0;
    outline:0;
    cursor: pointer;
    overflow: hidden;
    /*-webkit-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);*/
    /*box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);*/
    will-change: box-shadow, transform;
    -webkit-transition: -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    -o-transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    border: 0;
    line-height: 1em;
    width: 2em;
    min-width: 2em;
    height: 2em;
    min-height: 2em;

    background-color: #EEEEEE;
    color: rgba(0, 0, 0, 0.87);
  }

  .button-fab.button-lg {
    border-radius: 1em;
    font-size: 2em;
    line-height: 2em;
    width: 2em;
    min-width: 2em;
    height: 2em;
    min-height: 2em;
  }



  .button-fab.button-inverse {
    background-color: #3f51b5;
    color: #ffffff;
  }

  .button-fab.button-primary {
    background-color: #009688;
    color: rgba(255, 255, 255, 0.84);
  }

  .button-fab.button-success {
    background-color: #4caf50;
    color: rgba(255, 255, 255, 0.84);
  }

  .button-fab.button-info {
    background-color: #03a9f4;
    color: rgba(255, 255, 255, 0.84);
  }

  .button-fab.button-warning {
    background-color: #ff5722;
    color: rgba(255, 255, 255, 0.84);
  }

  .button-fab.button-danger {
    background-color: #f44336;
    color: rgba(255, 255, 255, 0.84);
  }

  .button-fab {
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .button-fab:hover,
  .button-fab:focus,
  .button-fab:active {
    outline: 0;
  }

  .button-fab:hover,
  .button-fab:focus,
  .button-fab:active {
    background-color: #e4e4e4;
  }

  .button-fab:hover.button-inverse,
  .button-fab:focus.button-inverse,
  .button-fab:active.button-inverse {
    background-color: #495bc0;
  }

  .button-fab:hover.button-primary,
  .button-fab:focus.button-primary,
  .button-fab:active.button-primary {
    background-color: #00aa9a;
  }

  .button-fab:hover.button-success,
  .button-fab:focus.button-success,
  .button-fab:active.button-success {
    background-color: #59b75c;
  }

  .button-fab:hover.button-info,
  .button-fab:focus.button-info,
  .button-fab:active.button-info {
    background-color: #0fb2fc;
  }

  .button-fab:hover.button-warning,
  .button-fab:focus.button-warning,
  .button-fab:active.button-warning {
    background-color: #ff6736;
  }

  .button-fab:hover.button-danger,
  .button-fab:focus.button-danger,
  .button-fab:active.button-danger {
    background-color: #f55549;
  }

  .button-fab:active,
  .button-fab:active:hover {
    -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }

  .button-fab:focus,
  .button-fab:focus:active,
  .button-fab:focus:hover,
  .button-fab:focus:active:hover {
    -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36);
  }
</style>
