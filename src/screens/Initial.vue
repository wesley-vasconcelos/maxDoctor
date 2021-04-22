<template>
    <div id='initial'>
     <h1>Avaliação de Wesley</h1>
   <router-link id="direct" class="btn btn-outline-primary" to="/maxdoctor">Acessar MaxDoctor</router-link>
  </div>
</template>

<script>
export default({
    name:'Initial'
})
</script>
<style scoped>
#initial{
    width: 100%;
    padding-top: 10%;
    text-align: center;
}
#direct{
    background-color: #9c83be;
    border-color: transparent ;
    margin-top: 5%;
    color:  #ffff;
    font-weight: bold;
}

</style>