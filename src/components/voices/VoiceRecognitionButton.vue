<template>
  <div class="grid">
    <button-raised v-if="!error" type="info" :click="doClick" :disabled="!srOk">
      <i :class="iconClass"></i>
      <slot></slot>
    </button-raised>
    <paper v-if="error" class="error-panel">
      <h4><i class="fa fa-warning"></i> {{msgError}}</h4>
      <button-fab type="danger" :click="doReset" icon="fa-refresh "></button-fab>
    </paper>
  </div>

</template>
<script>
  import ButtonRaised from '../ButtonRaised';
  import ButtonFab from '../ButtonFab';

  import Paper from '../Paper';
  export default{
    props: ['callback'],
    data(){
      const srOk = window.SpeechRecognition || window.webkitSpeechRecognition;
      const speechRecognition = (srOk) ? new (window.SpeechRecognition || window.webkitSpeechRecognition)() : {};
      speechRecognition.continuous = true;
      speechRecognition.interimResults = true;
      speechRecognition.lang = 'fr-FR';

      return {
        srOk, text: '', started: false,
        speechRecognition, msgError: '', error: false

      }
    },
    methods: {
      doReset(){
        this.$data.text = '';
        this.$data.started = false;
        this.$data.error = false;
      },
      doClick(){
        if (this.$data.started) {
          this.$data.speechRecognition.stop();
          this.$data.started = false;
          return;
        }
        this.$data.text = '';
        this.$data.speechRecognition.start();
        this.$data.started = true;

      }
    },
    mounted(){
      console.log(this.$data.speechRecognition);
      this.$data.speechRecognition.onstart = () => {
        this.$data.text = '';

      };
      this.$data.speechRecognition.onerror = (event) => {
        console.error(event);
        this.$data.started = false;
        this.$data.error = true;
        switch (event.error) {
          case 'network':
            this.$data.msgError = `Le réseau est nécessaire pour la reconnaissance vocale`;
              break;
          default:
            this.$data.msgError = `Une erreur s'est produite`;
        }

      };
      this.$data.speechRecognition.onresult = (event) => {

        const res = event.results[event.resultIndex][0];
        if (res) {
          this.$data.text = res.transcript;
        } else {
          const newText = res.transcript;
          this.$data.text += newText;
        }
        console.log(this.$data.text);
        if (this._props.callback) {
          this._props.callback(this.$data.text);
        }
      };
    },
    computed: {
      iconClass: function () {
        return {
          'fa': true,
          'fa-microphone': this.srOk && !this.started,
          'fa-microphone-slash': !this.srOk,
          'fa-stop': this.srOk && this.started,
        };
      }
    },

    components: {ButtonRaised, Paper, ButtonFab}
  }
</script>
<style>
  .error-panel {
    background-color: white;
    padding: 10px 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: red;
  }

  .error-panel > h4 {
    margin-bottom: .5em;
  }

  .error-panel > button {
    margin-bottom: .5em;
  }
</style>
