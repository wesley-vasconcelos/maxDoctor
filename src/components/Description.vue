<template>
<div id="description">
<div class="row">
  <div  id="icon" class="col ">
      <img alt="icon FACILIDADE" src="../assets/ICONE FACILIDADE (1).png">
        <p>FACILIDADE DE COMPRA</p>
  </div>
  <div  id="icon" class="col ">
      <div style="flex-direction: column">
      <img  style="padding-top: 15px" alt="icon FACILIDADE" src="../assets/ICONE QUANTIDADE.png">
      <div style="padding-top: 4px">
      <img alt="icon FACILIDADE" src="../assets/ICONE QUANTIDADE.png">
      </div>
      </div>
        <p>QUANTIDADE NÃO LIMITADA</p>
  </div>

</div>

<div style="padding-top:20px" class="row">
  <div  id="icon" class="col ">
      <img alt="icon FACILIDADE" src="../assets/ICONE FRETE GRATIS.png">
        <p>FRETE GRÁTIS</p>
  </div>
  <div  id="icon" class="col ">
      <img alt="icon FACILIDADE" src="../assets/ICONE AGILIDADE.png">
        <p>AGILIDADE</p>
  </div>

    <div  id="icon" class="col ">
      <img alt="icon FACILIDADE" src="../assets/ICONE COMODIDADE.png">
        <p>COMODIDADE</p>
  </div>

</div>
</div>
</template>

<script>

export default({
    name:'Description'
})
</script>
<style scoped>
#description{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    flex-direction: column;
    margin-bottom: 50px;
}
#icon{
    text-align: center;
}

</style>