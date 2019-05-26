<template>
  <page-container>
    <h1>Knacss Demo</h1>
    <div style="display: block">
      <h2>Centrer verticalement</h2>
      <div class="flex-container-v border">
        <div class="center w50 border txtcenter">
          Centrer des deux cotés
        </div>
      </div>
    </div>
    <div>
      <h2>flottant</h2>
      <div class="clearfix">
        <div class="fl w300p border">Premier</div>
        <div class="fl w300p border">Deuxième</div>
      </div>
    </div>
    <div>
      <h2>in-bock</h2>
      <div class="inbl border">Premier</div>
      <div class="inbl border">Deuxième</div>
    </div>

    <h2>flottant et mod</h2>
    <div class="border clearfix">
      <div class="fl w300p border">Premier</div>
      <div class="mod w300p border">Deuxième</div>
    </div>
    <h1>Grillade</h1>
    <h2>mono-lign</h2>
    <div class="">
      <div class="clearfix border grid">
        <div class="border">Un div</div>
        <div class="border">2 div</div>
        <div class="border">3 div</div>
        <div class="border">4 div</div>
      </div>
    </div>
    <h2>with gutter</h2>
    <div class="border grid-2 w500p">
    <div class="border w200p" >Un div</div>
    <div class="border w300p">2 div</div>
    <div class="border w400p">3 div</div>
    <div class="border">4 div</div>
    </div>
    <h2>with width</h2>
    <div class="border grid ">
    <div class="one-sixth border">Un div</div>
    <div class="border">2 div</div>
    <div class="border">3 div</div>
    <div class="border">4 div</div>
    </div>
    <div style="width:100%">
      <h2>Grid 3</h2>
      <div class="border grid-3">
        <div class="one-half border">Un div</div>
        <div class="one-half border">one-half div</div>
        <div class="one-third border">one-third div</div>
        <div class="two-thirds border">two-thirds div</div>
        <div class="one-quarter border push">one-quarter div</div>
      </div>
    </div>
  </page-container>
</template>
<script>
  import PageContainer from'../PageContainer';

  export default {
    name: 'knacssDemo',
    data () {
      return {};
    },
    components: {PageContainer}
  }
</script>
<style>
  .border {
    border: 1px solid black;
    padding: 5px;
  }
</style>
