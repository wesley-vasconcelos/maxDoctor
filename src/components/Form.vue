<template>
<div  class="d-flex justify-content-center">
    <form  v-on:submit.prevent class="w-25">
    <div class="row d-flex justify-content-center">
        <div class="w-100">
       <b-form-group
       class="col"
      id="fieldset-1"
      label="CRM"
      label-for="input-1"  
       valid-feedback="Thank you!"
      :invalid-feedback="invalid_feedback"
       :state="checkForm()" 
    >
      <b-form-input 
       placeholder="000000" 
       id="input-1" 
       v-model="form.crm" 
       
       ></b-form-input>
    </b-form-group>
    </div>
    <div class="w-100">
     <b-form-group 
     label="UF:"
      class="col"
       valid-feedback="Thank you!"
       v-model="form.UF_SELECTED" 
      :invalid-feedback="invalid_feedback"
       :state=" 
        form.UF_SELECTED !== ''
        ? form.UF_SELECTED
        : false
        " 
      >
              <b-form-select
                :options="UF"
                v-model="form.UF_SELECTED" 
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
    <b-button id="send" type="submit" class="btn" v-on:click="submit">
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
   checkForm: function () {
      if (!this.form.crm) {
        return this.form.crm.length >= 5 ? this.form.crm : false
      }
   },
     submit() {
       console.log('this.form.UF_SELECTED');
   if(this.form.UF_SELECTED !== '' && this.form.crm >= 5){
         this.$toast.success({
          title: 'Operação concluída!',
          message: 'Perfil criado com sucesso.'  
        })
         this.$router.push({
          name: 'initial'
        })
     }else{
       this.checkForm()

       this.$toast.error({
            title: 'Existem campo(s) obrigatório(s) sem preenchimento',
            message: 'Favor preencher'
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
#send{
  width: 400px;
    background-color: #9c83be;
    border-color: transparent ;
    border: none;
    margin-top: 5%;
    color:  #ffff;
    font-weight: bold;
    outline: none;
}

</style>