<template>
  <div class="page-container full">
    <div class="container center">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'pageContainer'
  };
</script>
<style>
  .page-container {
    /*align-items: stretch;*/
    /*width: calc(100% - 1px);*/
  }

  .page-container > .container {
    padding: 5px;
  }

  @media screen and (min-width:544px) and (max-width: 620px){
    body {
      line-height: 1;
    }
  }

  @media screen and (min-width:768px){
    .page-container > .container {
      padding: 20px;
      max-width: 896px;
    }
  }

</style>
