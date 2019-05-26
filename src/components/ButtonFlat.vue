<template>
  <button @click="click" :class="classA">
    <slot></slot>
  </button>
</template>
<script>
  export default{
    props: ['type', 'click'],
    name: 'buttonFab',
    computed: {
      classA: function () {
        const primary = this._props.type === 'primary';
        const inverse = this._props.type === 'inverse';
        const success = this._props.type === 'success';
        const info = this._props.type === 'info';
        const warning = this._props.type === 'warning';
        const danger = this._props.type === 'danger';
        return {
          'button-flat': true,
          'button-flat-inverse':inverse,
          'button-flat-primary':primary,
          'button-flat-success':success,
          'button-flat-info':info,
          'button-flat-warning':warning,
          'button-flat-danger':danger,
        };
      },

    }
  }
</script>
<style scoped>
  .button-flat {
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    border-radius: 2px;
    position: relative;
    padding: 8px 30px;
    margin: 10px 1px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0;
    will-change: box-shadow, transform;
    -webkit-transition: -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    -o-transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: 0;
    cursor: pointer;
    text-decoration: none;
    background: transparent;
  }

  .button-flat::-moz-focus-inner {
    border: 0;
  }

  .button-flat,
  .button-flat.button-flat-default {
    color: rgba(0, 0, 0, 0.87);
  }

  .button-flat.button-flat-inverse {
    color: #3f51b5;
  }

  .button-flat.button-flat-primary {
    color: #009688;
  }

  .button-flat.button-flat-success {
    color: #4caf50;
  }

  .button-flat.button-flat-info {
    color: #03a9f4;
  }

  .button-flat.button-flat-warning {
    color: #ff5722;
  }

  .button-flat.button-flat-danger {
    color: #f44336;
  }

  .button-flat:hover,
  .button-flat:focus {
    background-color: rgba(153, 153, 153, 0.2);
  }
</style>
