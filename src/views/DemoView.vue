<template>
  <div class="col-lg-12">

    <div class="row mt-3">
      <div class="form-group col-md-6">
        <input
          v-model="form.default"
          type="text"
          class="form-control"
          placeholder="Default input text"
        >
      </div>
      <div class="form-group col-md-6 result">
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="hide.default = !hide.default" :class="{ active: !hide.default }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Default: </h6>
          {{form.default}}
        </span>
      </div>
      <div class="col-md-6" :class="{ hide: hide.default }">
<pre>
<code class="language-html"> &lt;input
  v-model=&quot;form.default&quot;
  type=&quot;text&quot;
  class=&quot;form-control&quot;
  placeholder=&quot;Default input text&quot;
&gt;
</code>
</pre>
      </div>
    </div>

    <div class="row mt-3">
      <div class="form-group col-md-6">
        <FInput
          v-model="form.text"
          :validate="validate"
          class="form-control"
          id="text"
          type="text"
          placeholder="Text"
          rules="required|min:5|max:10"
        />
      </div>
      <div class="form-group col-md-6 result">
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="hide.text = !hide.text" :class="{ active: !hide.text }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Text: </h6>
          {{form.text}}
        </span>
      </div>

      <div class="col-md-6" :class="{ hide: hide.text }">
<pre>
<code class="html"> &lt;FInput
  v-model=&quot;form.text&quot;
  :validate=&quot;validate&quot;
  class=&quot;form-control&quot;
  id=&quot;text&quot;
  type=&quot;text&quot;
  placeholder=&quot;Text&quot;
  rules=&quot;required|min:5|max:10&quot;
/&gt;
</code>
</pre>
      </div>
    </div>

    <div class="row mt-3">
      <div class="form-group col-md-6">
        <FInput
          v-model="form.notspecial"
          :validate="validate"
          class="form-control"
          id="notspecial"
          type="notspecial"
          placeholder="Not special"
          rules="required|notspecial"
        />
      </div>
      <div class="form-group col-md-6 result">
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="hide.notspecial = !hide.notspecial" :class="{ active: !hide.notspecial }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Not special: </h6>
          {{form.notspecial}}
        </span>
      </div>

      <div class="col-md-6" :class="{ hide: hide.notspecial }">
<pre>
<code class="html"> &lt;FInput
  v-model=&quot;form.notspecial&quot;
  :validate=&quot;validate&quot;
  class=&quot;form-control&quot;
  id=&quot;notspecial&quot;
  type=&quot;notspecial&quot;
  placeholder=&quot;Not special&quot;
  rules=&quot;required|notspecial&quot;
/&gt;
</code>
</pre>
      </div>
    </div>

    <div class="row mt-3">
      <div class="form-group col-md-6">
        <FInput
          v-model="form.email"
          :validate="validate"
          class="form-control"
          id="email"
          type="email"
          placeholder="E-mail"
          rules="required|email"
        />
      </div>
      <div class="form-group col-md-6 result">
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="hide.email = !hide.email" :class="{ active: !hide.email }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>E-mail: </h6>
          {{form.email}}
        </span>
      </div>

      <div class="col-md-6" :class="{ hide: hide.email }">
<pre>
<code class="html"> &lt;FInput
  v-model=&quot;form.email&quot;
  :validate=&quot;validate&quot;
  class=&quot;form-control&quot;
  id=&quot;email&quot;
  type=&quot;email&quot;
  placeholder=&quot;E-mail&quot;
  rules=&quot;required|email&quot;
/&gt;
</code>
</pre>
      </div>
    </div>

    <div class="row mt-3">
      <div class="form-group col-md-6">
        <FInput
          v-model="form.number"
          :validate="validate"
          class="form-control"
          id="number"
          type="number"
          placeholder="Number"
          rules="required|min:5|max:10|numeric"
        />
      </div>
      <div class="form-group col-md-6 result">
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="hide.number = !hide.number" :class="{ active: !hide.number }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Number: </h6>
          {{form.number}}
        </span>
      </div>

      <div class="col-md-6" :class="{ hide: hide.number }">
<pre>
<code class="html"> &lt;FInput
  v-model=&quot;form.number&quot;
  :validate=&quot;validate&quot;
  class=&quot;form-control&quot;
  id=&quot;number&quot;
  type=&quot;number&quot;
  placeholder=&quot;Number&quot;
  rules=&quot;required|min:5|max:10|numeric&quot;
/&gt;
</code>
</pre>
      </div>
    </div>

    <div class="row mt-3">
      <div class="form-group col-md-6">
        <FInput
          v-model="form.textarea"
          :validate="validate"
          id="textarea"
          type="textarea"
          placeholder="Textarea"
          :min="5"
          :max="10"
          rules="required"
        />
      </div>
      <div class="form-group col-md-6 result">
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="hide.textarea = !hide.textarea" :class="{ active: !hide.textarea }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Textarea: </h6>
          {{form.textarea}}
        </span>
      </div>

      <div class="col-md-6" :class="{ hide: hide.textarea }">
<pre>
<code class="html"> &lt;FInput
  v-model=&quot;form.textarea&quot;
  :validate=&quot;validate&quot;
  id=&quot;textarea&quot;
  type=&quot;textarea&quot;
  placeholder=&quot;Textarea&quot;
  :min=&quot;5&quot;
  :max=&quot;10&quot;
  rules=&quot;required&quot;
/&gt;
</code>
</pre>
      </div>
    </div>

    <div class="row mt-3">
      <div class="form-group col-md-6">
        <FInput
          v-model="form.select"
          :validate="validate"
          id="nome"
          type="select"
          rules="required"
          :options="options"
          search
        />
      </div>
      <div class="form-group col-md-6 result">
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="hide.select = !hide.select" :class="{ active: !hide.select }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Select: </h6>
          {{form.select}}
        </span>
      </div>

      <div class="col-md-6" :class="{ hide: hide.select }">
<pre>
<code class="html"> &lt;FInput
  v-model=&quot;form.select&quot;
  :validate=&quot;validate&quot;
  id=&quot;nome&quot;
  type=&quot;select&quot;
  rules=&quot;required&quot;
  :options=&quot;options&quot;
  search
/&gt;
</code>
</pre>
      </div>
    </div>

    <div class="row mt-3">
      <div class="form-group col-md-6">
        <FInput
          v-model="form.selectMultiple"
          :validate="validate"
          id="nome"
          type="select"
          rules="required|min:2|max:4"
          :options="options"
          search
          multiple
          checkAll
          placeholder="Custom none selected options"
          searchPlaceholder="Custom search placeholder..."
        />
      </div>
      <div class="form-group col-md-6 result">
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="hide.selectMultiple = !hide.selectMultiple" :class="{ active: !hide.selectMultiple }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Select multiple: </h6>
          {{form.selectMultiple}}
        </span>
      </div>

      <div class="col-md-6" :class="{ hide: hide.selectMultiple }">
<pre>
<code class="html"> &lt;FInput
  v-model=&quot;form.selectMultiple&quot;
  :validate=&quot;validate&quot;
  id=&quot;nome&quot;
  type=&quot;select&quot;
  rules=&quot;required|min:2|max:4&quot;
  :options=&quot;options&quot;
  search
  multiple
  checkAll
  placeholder=&quot;Custom none selected options&quot;
  searchPlaceholder=&quot;Custom search placeholder...&quot;
/&gt;
</code>
</pre>
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
import hljs from 'highlight.js/lib/common';
// console.log(hljs)
window.onload = function WindowLoad(event) {
  hljs.highlightAll();
}

export default defineComponent({
  data(){
    return{
      form: {
        default: '',
        text: '',
        notspecial: '',
        email: '',
        number: '',
        textarea: '',
        select: '',
        selectMultiple: [],
      },
      hide: {
        default: true,
        text: true,
        notspecial: true,
        email: true,
        number: true,
        textarea: true,
        select: true,
        selectMultiple: true
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
    // this.options = [
    //   { label: '01', value: 1 },
    //   { label: '02', value: 2 },
    //   { label: '03', value: 3 },
    //   { label: '04', value: 4 },
    //   { label: '05', value: 5 },
    //   { label: '06', value: 6 },
    // ]
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
    toggleCode(item){
      console.log(item)
      item = !item
    },
  }
});
</script>

<style>
pre{
  margin-bottom: -20px;

}
.result span,
.result button{
  display: inline;
  margin-right: 7px;
  float: left;
}
.result .expandCode{
  transition: all .2s;
}
.result .expandCode.active{
  box-shadow: inset 1px 1px 7px 0px #181818;
}
h6{
  margin-bottom: 0;
  color: rgb(209, 209, 209);
}
</style>
