<template>
    <header>
      <img alt="mac Doctor logo" id="logo" src="../assets/logo_maxi_doctor.png">
      <div id='subTitle'>
      <h6>
        A PLATAFORMA DE COMPRA DIRETA
      </h6>
      <h6>
        DO SEU ANESTÉSICO TÓPICO
      </h6>
      </div>
  </header>
</template>

<script>

export default({
    name:'Header'
})
</script>
<style scoped>
header{
    width: 100%;
    text-align: center;
}
#logo{
    margin-top: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto
}
#subTitle{
    padding-top: 20px;
}
</style>