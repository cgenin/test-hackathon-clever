<template>
  <page-container>
    <h1>Components Demo</h1>
    <h2>
      Buttons
    </h2>
    <div class="grid">
      <div class="w10  center">
        <button>TEST</button>
      </div>
      <div class="w10  center">
        <button class="btn">TEST</button>
      </div>
    </div>
    <h2>
      Buttons Fab
    </h2>
    <div class="grid">
      <div class="w10 center">
        <button-fab v-bind:click="doClick" icon="fa-play"></button-fab>
      </div>
      <div class="w10 center">
        <button-fab type="primary" v-bind:click="doClick" icon="fa-chevron-left"></button-fab>
      </div>
      <div class="w10 center">
        <button-fab type="inverse" v-bind:click="doClick" icon="fa-home"></button-fab>
      </div>
      <div class="w10 center">
        <button-fab type="info" v-bind:click="doClick" icon="fa-home"></button-fab>
      </div>
      <div class="w10 center">
        <button-fab type="warning" v-bind:click="doClick" icon="fa-home"></button-fab>
      </div>
      <div class="w10 center">
        <button-fab type="danger" v-bind:click="doClick" icon="fa-home"></button-fab>
      </div>
      <div class="w10 center">
        <button-fab size="large" type="danger" v-bind:click="doClick" icon="fa-trash"></button-fab>
      </div>
    </div>
    <h2>
      Buttons Flat
    </h2>
    <div class="grid">

      <div class="w10 center">
        <button-flat v-bind:click="doClick">Default</button-flat>
      </div>
      <div class="w10 center">
        <button-flat type="primary" v-bind:click="doClick">Primary</button-flat>
      </div>
      <div class="w10 center">
        <button-flat type="inverse" v-bind:click="doClick">Inverse</button-flat>
      </div>
      <div class="w10 center">
        <button-flat type="info" v-bind:click="doClick">Info</button-flat>
      </div>
      <div class="w10 center">
        <button-flat type="warning" v-bind:click="doClick">Warning</button-flat>
      </div>
      <div class="w10 center">
        <button-flat type="danger" v-bind:click="doClick">Danger</button-flat>
      </div>
    </div>
    <h2>
      Buttons Raised
    </h2>
    <div class="grid">

      <div class="w10 center">
        <button-raised v-bind:click="doClick">Default</button-raised>
      </div>
      <div class="w10 center">
        <button-raised type="primary" v-bind:click="doClick">Primary</button-raised>
      </div>
      <div class="w10 center">
        <button-raised type="inverse" v-bind:click="doClick">Inverse</button-raised>
      </div>
      <div class="w10 center">
        <button-raised type="info" v-bind:click="doClick">Info</button-raised>
      </div>
      <div class="w10 center">
        <button-raised type="warning" v-bind:click="doClick">Warning</button-raised>
      </div>
      <div class="w10 center">
        <button-raised type="danger" v-bind:click="doClick">Danger</button-raised>
      </div>
    </div>
    <div class="grid">

      <div class="w10 center">
        <button-raised disabled="true" v-bind:click="doClick">Default</button-raised>
      </div>
    </div>
    <h2>
      Paper
    </h2>
    <paper class="txtcenter w200p">
      <strong>Paper Example</strong>
    </paper>
    <h2>
      Form
    </h2>
    <div>
      <form>
        <fieldset>
          <div class="grid">
            <label for="input" class="one-quarter">Input text</label>
            <input id="input" placeholder="test" class="formulaire" type="text">
          </div>
        </fieldset>
        <fieldset>
          <div class="grid">
            <label for="input2" class="one-quarter">Input number</label>
            <input id="input2" class="formulaire" type="number">
          </div>
        </fieldset>
        <fieldset>
          <div class="grid">
            <label for="input3" class="one-quarter">Input File</label>
            <input id="input3" class="formulaire" type="file">
          </div>
        </fieldset>
        <fieldset>
          <div class="grid">
            <div class="one-quarter">checkboxes</div>
            <label><input type="checkbox">Check 1</label>
            <label><input type="checkbox">Check 2</label>
          </div>
        </fieldset>
        <fieldset>
          <div class="grid">
            <div class="one-quarter">radio</div>
            <label><input type="radio" name="value">Check 1</label>
            <label><input type="radio" name="value">Check 2</label>
          </div>
        </fieldset>
        <fieldset>
          <div class="grid">
            <label for="input4" class="one-quarter">Select</label>
            <select id="input4" class="formulaire">
              <option></option>
              <option value="1">Value 1</option>
              <option value="2">Value 2</option>
              <option value="2">Value </option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div class="grid">
            <label for="input5" class="one-quarter">Select Multiple</label>
            <select id="input5" class="formulaire" multiple>
              <option></option>
              <option value="1">Value 1</option>
              <option value="2">Value 2</option>
              <option value="2">Value </option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div class="grid">
            <label for="input6" class="one-quarter">Textarea</label>
            <textarea id="input6" class="formulaire">
            </textarea>
          </div>
        </fieldset>
      </form>
    </div>
  </page-container>
</template>
<script>
  import PageContainer from'../PageContainer';
  import ButtonFab from'../ButtonFab';
  import ButtonFlat from'../ButtonFlat';
  import ButtonRaised from'../ButtonRaised';
  import Paper from'../Paper';

  export default {
    name: 'componentsDemo',
    data () {
      return {};
    },
    methods: {
      doClick(){
        alert('on click');
      }
    },
    components: {PageContainer, ButtonFab, ButtonFlat, ButtonRaised, Paper}
  }
</script>
<style>

  .formulaire {
    outline: 0;
    border: 0;
    background-image: -webskit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));
    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#D2D2D2, #D2D2D2);
    background-image: -o-linear-gradient(#009688, #009688), -o-linear-gradient(#D2D2D2, #D2D2D2);
    background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);
    -webkit-background-size: 0 2px, 100% 1px;
    background-size: 0 2px, 100% 1px;
    background-repeat: no-repeat;
    background-position: center bottom, center -webkit-calc(100% - 1px);
    background-position: center bottom, center calc(100% - 1px);
    background-color: rgba(0, 0, 0, 0);
    -webkit-transition: background 0s ease-out;
    -o-transition: background 0s ease-out;
    transition: background 0s ease-out;
    float: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0;
  }

  .formulaire::-moz-placeholder {
    color: #BDBDBD;
    font-weight: 400;
  }

  .formulaire:-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 400;
  }

  .formulaire::-webkit-input-placeholder {
    color: #BDBDBD;
    font-weight: 400;
  }

  .formulaire:active,
  .formulaire:focus {
    background-image: -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2)), -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688));
    background-image: -webkit-linear-gradient(#D2D2D2, #D2D2D2), -webkit-linear-gradient(#009688, #009688);
    background-image: -o-linear-gradient(#D2D2D2, #D2D2D2), -o-linear-gradient(#009688, #009688);
    background-image: linear-gradient(#D2D2D2, #D2D2D2), linear-gradient(#009688, #009688);

    transition: background 0.3s ease;
  }

  .formulaire[readonly],
  .formulaire[disabled],
  fieldset[disabled] .formulaire {
    background-color: rgba(0, 0, 0, 0);
  }

  .formulaire[disabled],
  fieldset[disabled] .formulaire, {
    background-image: none;
    border-bottom: 1px dotted #D2D2D2;
  }

  .formulaire {
    height: 38px;
    padding: 7px 0;
    font-size: 16px;
    line-height: 1.42857143;
  }

  select[multiple].formulaire {
    height: auto;
  }

  textarea.formulaire:active,
  textarea.formulaire:focus {
    background-color: white;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type="date"].formulaire,
    input[type="time"].formulaire,
    input[type="datetime-local"].formulaire,
    input[type="month"].formulaire {
      line-height: 38px;
    }
  }

  .radio label,
  .checkbox label {
    min-height: 22px;
  }

  /*select.formulaire {*/
  /*height: 24px;*/
  /*line-height: 24px;*/
  /*}*/

</style>
