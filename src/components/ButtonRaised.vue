<template>
  <button @click="doClick" :class="classA" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script>
  export default{
    props: ['type', 'click', 'disabled'],
    name: 'buttonRaised',
    computed: {
      classA: function () {
        const primary = this._props.type === 'primary';
        const inverse = this._props.type === 'inverse';
        const success = this._props.type === 'success';
        const info = this._props.type === 'info';
        const warning = this._props.type === 'warning';
        const danger = this._props.type === 'danger';
        return {
          'button-raised': true,
          'button-inverse': inverse,
          'button-primary': primary,
          'button-success': success,
          'button-info': info,
          'button-warning': warning,
          'button-danger': danger,
        };
      },

    }, methods: {
      doClick(){
          console.log(this)
        if (this._props.click) {
          this._props.click();
        }
      }
    }
  }
</script>
<style>
  .button-raised {
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

    background-color: #EEEEEE;
    color: rgba(0, 0, 0, 0.87);
  }

  .button-raised.button-inverse {
    background-color: #3f51b5;
    color: #ffffff;
  }

  .button-raised.button-primary {
    background-color: #009688;
    color: rgba(255, 255, 255, 0.84);
  }

  .button-raised.button-success {
    background-color: #4caf50;
    color: rgba(255, 255, 255, 0.84);
  }

  .button-raised.button-info {
    background-color: #03a9f4;
    color: rgba(255, 255, 255, 0.84);
  }

  .button-raised.button-warning {
    background-color: #ff5722;
    color: rgba(255, 255, 255, 0.84);
  }

  .button-raised.button-danger {
    background-color: #f44336;
    color: rgba(255, 255, 255, 0.84);
  }

  .button-raised {
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .button-raised:hover,
  .button-raised:focus,
  .button-raised:active {
    outline: 0;
  }

  .button-raised:hover,
  .button-raised:focus,
  .button-raised:active {
    background-color: #e4e4e4;
  }

  .button-raised:hover.button-inverse,
  .button-raised:focus.button-inverse,
  .button-raised:active.button-inverse {
    background-color: #495bc0;
  }

  .button-raised:hover.button-primary,
  .button-raised:focus.button-primary,
  .button-raised:active.button-primary {
    background-color: #00aa9a;
  }

  .button-raised:hover.button-success,
  .button-raised:focus.button-success,
  .button-raised:active.button-success {
    background-color: #59b75c;
  }

  .button-raised:hover.button-info,
  .button-raised:focus.button-info,
  .button-raised:active.button-info {
    background-color: #0fb2fc;
  }

  .button-raised:hover.button-warning,
  .button-raised:focus.button-warning,
  .button-raised:active.button-warning {
    background-color: #ff6736;
  }

  .button-raised:hover.button-danger,
  .button-raised:focus.button-danger,
  .button-raised:active.button-danger {
    background-color: #f55549;
  }

  .button-raised:active,
  .button-raised:active:hover {
    -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }

  .button-raised:focus,
  .button-raised:focus:active,
  .button-raised:focus:hover,
  .button-raised:focus:active:hover {
    -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36);
  }
</style>
