<template>
  <button-raised type="success" :click="doSpeak" :show="show" :disabled="started">
    <i :class="classIcon"></i>
    <slot></slot>
  </button-raised>
</template>
<script>
  import ButtonRaised from '../ButtonRaised';
  export default{
    props: ['text'],
    data(){
      const show = window.speechSynthesis && window.SpeechSynthesisUtterance;
      return {started: false, show};
    },
    methods: {
      doSpeak(){
        if (!this._props.text || this._props.text === '' || this.$data.started) {
          console.log('do nothing');
          return;
        }

        this.$data.started = true;
        const msg = new SpeechSynthesisUtterance(this._props.text);
        msg.onend = () => this.$data.started = false;
        msg.lang = 'fr-FR';
        window.speechSynthesis.speak(msg);

      }
    },
    computed: {
      classIcon: function () {
        const {started} = this.$data;
        return {fa: true,  'fa-comment': !started, 'fa-ban': started};
      }
    },
    components: {
      ButtonRaised
    }
  }
</script>
