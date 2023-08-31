<template>
  <div class="col-lg-12">
    <div class="row mt-3">
      <div class="col-md-6 offset-md-6">
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="Toggle All" @click="toggleAll">
          <i class="fa fa-code"></i>
        </button>
        <p>Clique nos botões para visualizar o código</p>
      </div>
    </div>
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
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="codeState.default = !codeState.default" :class="{ active: codeState.default }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Default: </h6>
          {{form.default}}
        </span>
      </div>
      <div class="col-md-6 code-details" :class="{ active: codeState.default }">
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
        <vrInput
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
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="codeState.text = !codeState.text" :class="{ active: codeState.text }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Text: </h6>
          {{form.text}}
        </span>
      </div>

      <div class="col-md-6 code-details" :class="{ active: codeState.text }">
<pre>
<code class="html"> &lt;vrInput
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
        <vrInput
          v-model="form.notspecial"
          :validate="validate"
          class="form-control"
          id="notspecial"
          type="text"
          placeholder="Not special"
          rules="required|notspecial"
        />
      </div>
      <div class="form-group col-md-6 result">
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="codeState.notspecial = !codeState.notspecial" :class="{ active: codeState.notspecial }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Not special: </h6>
          {{form.notspecial}}
        </span>
      </div>

      <div class="col-md-6 code-details" :class="{ active: codeState.notspecial }">
<pre>
<code class="html"> &lt;vrInput
  v-model=&quot;form.notspecial&quot;
  :validate=&quot;validate&quot;
  class=&quot;form-control&quot;
  id=&quot;notspecial&quot;
  type=&quot;text&quot;
  placeholder=&quot;Not special&quot;
  rules=&quot;required|notspecial&quot;
/&gt;
</code>
</pre>
      </div>
    </div>

    <div class="row mt-3">
      <div class="form-group col-md-6">
        <vrInput
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
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="codeState.email = !codeState.email" :class="{ active: codeState.email }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>E-mail: </h6>
          {{form.email}}
        </span>
      </div>

      <div class="col-md-6 code-details" :class="{ active: codeState.email }">
<pre>
<code class="html"> &lt;vrInput
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
        <vrInput
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
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="codeState.number = !codeState.number" :class="{ active: codeState.number }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Number: </h6>
          {{form.number}}
        </span>
      </div>

      <div class="col-md-6 code-details" :class="{ active: codeState.number }">
<pre>
<code class="html"> &lt;vrInput
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
        <vrInput
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
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="codeState.textarea = !codeState.textarea" :class="{ active: codeState.textarea }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Textarea: </h6>
          {{form.textarea}}
        </span>
      </div>

      <div class="col-md-6 code-details" :class="{ active: codeState.textarea }">
<pre>
<code class="html"> &lt;vrInput
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
        <vrInput
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
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="codeState.select = !codeState.select" :class="{ active: codeState.select }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Select: </h6>
          {{form.select}}
        </span>
      </div>

      <div class="col-md-6 code-details" :class="{ active: codeState.select }">
<pre>
<code class="html"> &lt;vrInput
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
        <vrInput
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
          searchClass="form-control"
          :maxSelectedDisplay="4"
          @onSelect="selectedOption"
        />
      </div>
      <div class="form-group col-md-6 result">
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="codeState.selectMultiple = !codeState.selectMultiple" :class="{ active: codeState.selectMultiple }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>Select multiple: </h6>
          {{form.selectMultiple}}
        </span>
      </div>

      <div class="col-md-6 code-details" :class="{ active: codeState.selectMultiple }">
<pre>
<code class="html"> &lt;vrInput
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
  seachClass=&quot;form-control&quot;
  :maxSelectedDisplay=&quot;2&quot;
/&gt;
</code>
</pre>
      </div>
    </div>

    <div class="row mt-3">
      <div class="form-group col-md-6">
        <vrInput
          v-model="form.noclass"
          :validate="validate"
          id="noclass"
          type="text"
          rules="required|min:2|max:4"
          placeholder="No class"
          removeDefaultClass
        />
      </div>
      <div class="form-group col-md-6 result">
        <button type="button" class="btn btn-sm btn-secondary expandCode" tabindex="-1" title="See code" @click="codeState.noclass = !codeState.noclass" :class="{ active: codeState.noclass }">
          <i class="fa fa-code"></i>
        </button>
        <span>
          <h6>No class: </h6>
          {{form.noclass}}
        </span>
      </div>

      <div class="col-md-6 code-details" :class="{ active: codeState.noclass }">
<pre>
<code class="html">&lt;vrInput
  v-model=&quot;form.noclass&quot;
  :validate=&quot;validate&quot;
  id=&quot;noclass&quot;
  type=&quot;text&quot;
  rules=&quot;required|min:2|max:4&quot;
  placeholder=&quot;No class&quot;
  removeDefaultClass
/&gt;
</code>
</pre>
      </div>
    </div>

    <button @click="submit" class="btn btn-primary">Submit</button>
    <!-- <vrButton @click="submit" :state="submitState" :validate="validate" class="btn btn-primary">
      Submit
    </vrButton> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import api from '@/services/api';
import hljs from 'highlight.js/lib/common';
import { doValidate } from "../components/forms/form";

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
        noclass: '',
        checkbox: [],
        radio: ''
      },
      codeState: {
        default: false,
        text: false,
        notspecial: false,
        email: false,
        number: false,
        textarea: false,
        select: false,
        selectMultiple: false,
        noclass: false
      },
      submitState: false,
      validate: {},
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
    submit(){
      setTimeout(() => this.submitState = true);
      doValidate(this.validate);
    },
    toggleAll(){
      for(let item in this.codeState){
        this.codeState[item] = !this.codeState[item];
      }
    },
    selectedOption(value){

    }
  }
});
</script>

<style>
pre{
  margin-bottom: -20px;
  border-radius: 3px;
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
.code-details{
  max-height: 0;
  overflow: hidden;
  transition: .3s;
  margin-top: 3px;
}
.code-details.active{
  transition: .9s;
  max-height: 1000px;
  /* overflow: unset; */
}
h6{
  margin-bottom: 0;
  color: rgb(209, 209, 209);
}
</style>
