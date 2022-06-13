<template>
  <div class="col-lg-12">
    <div class="row">
      <div class="form-group col-md-6">
        <FInput v-model="form.nome" :validate="validate" id="nome" type="text" class="form-control mt-3" rules="required|min:5|max:10"/>
        <!-- <FInput v-model="form.nome" :validate="validate" id="nome" type="textarea" class="form-control mb-3" :min="5" :max="10" rules="required"/> -->
        <FInput v-model="form.estados" :validate="validate" id="nome" type="select" class="form-control mt-3" multiple search rules="required" :options="options" />
      </div>
      <div class="form-group col-md-6">
        <h6>Input: </h6>
        {{form.nome}}
        <hr>
        <h6>Opções selecionadas: </h6>
        {{form.estados}}
        <!-- <FButton class="btn btn-primary" @click="load" id="teste">Clica aqui</FButton> -->
      </div>
    </div>
    <!-- <FButton v-for="item in itens" @click="teste(item.id)" class="btn btn-info">
      {{item.id}}
    </FButton> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import api from '@/services/api';

export default defineComponent({
  data(){
    return{
      form: {
        nome: '',
        estados: []
      },
      validate: [],
      itens: [
        {id: '1'},
        {id: '2'},
        {id: '3'},
        {id: '4'},
      ],
      btnState: [],
      options: []
    }
  },
  mounted(){
    api.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/').then(({data}) => {
      let options = [];
      data.map((item, i) => {
        options[i] = { value: item.sigla, label: item.nome };
      });
      this.options = options;
    });
  },
  methods: {
    load(){

    },
    teste(id){
      this.btnState[id] = true;
    },
  }
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
