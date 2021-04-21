<template>
    <div id='painel'>
      <Header/>
      <Form/>
      <Description/>
    </div>
</template>

<script>
import Header from '../components/Header'
import Form from '../components/Form'
import Description from '../components/Description'

export default({
    name:'Home',
    components: { 
      Header,
      Form,
      Description
    }
})
</script>
<style scoped>
#painel{
    width: 100%;
}

</style>