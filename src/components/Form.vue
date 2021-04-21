<template>
<div  class="d-flex justify-content-center">
    <form  class="w-25">

    <div class="row d-flex justify-content-center">
        <div class="w-100">
       <b-form-group
       class="col"
      id="fieldset-1"
      label="CRM"
      label-for="input-1"
      valid-feedback="Thank you!"
    :invalid-feedback="invalid_feedback"

    >
      <b-form-input 
       placeholder="000000" 
       id="input-1" v-model="form.crm" :state="state" trim></b-form-input>
    </b-form-group>
    </div>
    <div class="w-100">
     <b-form-group 
     label="UF:"
      class="col"
       valid-feedback="Thank you!"
      :invalid-feedback="invalid_feedback"
      label-for="id_machinePartner">
              <b-form-select
                :options="UF"
                required
                v-model="form.UF_SELECTED"
                :state="state"
              >
                <template v-slot:sigla>
                  <option :value="null" disabled
                    >-- Selecione uma opção --</option
                  >
                </template>
              </b-form-select>
            </b-form-group>
    </div>
   </div>
   <div id="form" style="flex-direction:column; padding-top: 20px">
    <b-button style="background-color:#9c83be; border: none; width:400px" variant="success" @click="submit">
            Salvar
    </b-button>
  
    <h6 style="padding-top:20px">
        CANAL DE COMPRA EXCLUSIVO
    </h6>
     <h6>
        PARA CLASSE MÉDICA
    </h6>
    </div>
  </form>

  </div>
</template>

<script>
import axios from 'axios';

export default({
    name:'Form',
     computed: {
      state() {
        return this.form.crm.length >= 5
      },
    },
    data() {
      return {
      invalid_feedback: 'Este campo é obrigatório.',
      UF: [],
    form: {
        crm: '',
        UF_SELECTED: '',
      }
      }
    },
mounted () {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => response.data.forEach(element => {
         element.value = element.sigla,
          element.text = element.sigla
       this.UF = response.data
      }))
  },
methods:{
     submit() {
     if(this.form.UF_SELECTED == '' && this.form.crm == ''){
         this.$toast.error({
          title: 'Existem campo(s) obrigatório(s) sem preenchimento',
          message: 'Favor preencher'
        })
     }else{
         this.$toast.success({
          title: 'Operação concluída!',
          message: 'Perfil criado com sucesso.'
        })
         this.$router.push({
          name: 'initial'
        })
     }
    },
}
})

</script>
<style scoped>
#form{
    text-align: center;
};
#button-color{
    background-color: #9c83be !important;
};
#text-exclusiv{
    text-align: center;
    padding-top: 20px;

}

</style>