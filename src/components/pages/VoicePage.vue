<template>
  <page-container id="voice-page">
    <h1>Voices</h1>
    <div class="section grid">
      <voice-recognition-button v-bind:callback="doListen">
        Cliquez içi pour remplir la zone de texte en parlant.
      </voice-recognition-button>
    </div>
    <div class="section grid">
      <div class="one-quarter label-container"><label>Texte : </label></div>
      <div><textarea class="field" v-model="texte"></textarea></div>
    </div>
    <div class="section grid">
      <voice-speak v-bind:text="texte">
        Cliquez içi pour lire le texte.
      </voice-speak>
    </div>
  </page-container>
</template>
<script>
  import PageContainer from'../PageContainer';
  import VoiceRecognitionButton from'../voices/VoiceRecognitionButton';
  import VoiceSpeak from'../voices/VoiceSpeak'

  export default{
    name: 'voicePage',
    data(){
      return {texte: ''};
    },
    methods: {
      doListen(txt){
        this.$data.texte = txt;
      }
    },
    components: {
      PageContainer, VoiceRecognitionButton, VoiceSpeak
    }
  }
</script>
<style>
  #voice-page div.section {
    margin-bottom:10px;
  }
  #voice-page .label-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #voice-page .field {
    width: 100%;
  }
</style>
