<template>
  <input
    v-if="type != 'textarea' && type != 'select'"
    :value="modelValue"
    :type="type"
    :class="{ [classe]: classe, 'is-invalid': fails }"
    v-bind="{
      type,
      id,
      placeholder,
      autocomplete,
      autofocus,
      checked,
      disabled,
      readonly,
      required,
      minlength: min,
      maxlength: max
    }"
    @input="updateValue"
  />

  <textarea
    v-if="type == 'textarea'"
    :class="{ [classe]: classe, 'is-invalid': fails }"
    :value="modelValue"
    v-bind="{
      id,
      placeholder,
      autocomplete,
      autofocus,
      checked,
      disabled,
      readonly,
      required,
      minlength: min,
      maxlength: max
    }"
    @input="updateValue"
  />

  <template v-if="type == 'select'">
    <div
      @click="expandSelectOptions"
      class="vue__form-select"
      :class="{ [classe]: classe, 'is-invalid': fails, expand: selectOptionsExpanded }"
      v-bind="{
        id,
        placeholder,
        autocomplete,
        autofocus,
        checked,
        disabled,
        multiple,
        readonly,
        required,
        search,
      }"
    >
      <span class="vue__form-select_selected-option-text">{{selectedOptionsText}}</span>
      <ul class="vue__form-select_options" :class="{expand: selectOptionsExpanded, search: search}">
        <li @click.stop class="vue__form-select_options_search" v-if="search">
          <input type="text" class="form-control" placeholder="Pesquisar..." v-model="selectOptionsSearch">
        </li>
        <li
          v-for="option in _options"
          :value="option.value"
          @click.stop="selectOption(option)"
          :class="{ selected: selectedOptions[option.value] }"
        >
          {{option.label}}
        </li>
      </ul>
    </div>
  </template>
  <span class="invalid-feedback" :class="{ show: fails, hide: !fails }">{{ fails }}</span>
</template>

<script>
import { defineComponent } from "vue";
import { emitter } from "./form";

export default defineComponent({
  name: "FInput",
  props: {
    modelValue: { type: [String, Array], required: true },
    id: { type: String, required: true },
    type: { type: String, required: true },
    validate: { type: Object, required: false },
    class: { type: String, required: false },
    rules: { type: String, required: false },
    placeholder: { type: String, required: false },
    autocomplete: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    checked: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    multiple: { type: Boolean, required: false },
    search: { type: Boolean, required: false },
    readonly: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    min: { type: Number, required: false },
    max: { type: Number, required: false },
    options: { type: Array, required: false },
    noneOptionSelected: { Type: String, required: false, default: 'Nenhuma opção selecionada' }
  },
  data() {
    return {
      fails: false,
      classe: this.class,
      selectedOptions: [],
      _options: this.options,
      selectOptionsExpanded: false,
      selectOptionsSearch: '',
      selectedOptionsText: this.noneOptionSelected
    };
  },
  mounted() {
    if(this.type == 'select' && typeof this.options == 'undefined') console.warn(`The component '${this.id}' was defined as a select but no options was given`);

    let shouldValidate = typeof this.rules == "undefined";
    this.validate[this.id] = shouldValidate;

    emitter.on("doValidate", (modelName) => {
      if (this.id != modelName) return;
      this.doValidate(this.idValue);
    });
  },
  watch: {
    options(){
      this._options = this.options;
    },
    selectOptionsSearch(){
      let options = [];
      let i = 0;
      this.options.map((item) => {
        let value = String(item.label).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if(value.indexOf(this.selectOptionsSearch.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) > -1) {
          options[i] = item;
          i++;
        }
      });

      this._options = options;
    }
  },
  methods: {
    expandSelectOptions(){
      this.selectOptionsExpanded = !this.selectOptionsExpanded;
    },
    selectOption(option){
      this.selectedOptions[option.value] = !this.selectedOptions[option.value] ? option.label : false;
      let selected = null;

      if(this.multiple){
        let i = 0;
        let options = [];
        selected = [];
        for(let item in this.selectedOptions){
          if(this.selectedOptions[item]){
            options[i] = this.selectedOptions[item];
            selected[i] = item;
            i++;
          }
        }
        this.selectedOptionsText = (options.length > 3) ? `${options.length} itens selecionados` : options.join(', ');
        if(!options.length) this.selectedOptionsText = this.noneOptionSelected;
      }else{
        selected = Object.keys(this.selectedOptions);
        this.selectedOptionsText = Object.values(this.selectedOptions);
        console.log(this.selectedOptions)
      }

      console.log(selected)

      this.updateValue(selected);
    },
    updateValue(e) {
      let value = (e.target && typeof e.target.value !== 'undefined') ? e.target.value : e;
      this.$emit("update:modelValue", value);
      this.doValidate(value);
    },
    doValidate(value) {
      if (!this.rules) return;

      let fails = "";
      if(!Array.isArray(value)) value = value.trim();
      let rules = this.rules.split("|");

      for (let i = 0; rules.length > i; i++) {
        let item = rules[i];
        if (item == "required" && value.length <= 0) {
          fails = "Este campo é obrigatório";
          break;
        }
        if (item == "numeric" && isNaN(value)) {
          fails = "Este campo aceita somente números";
          break;
        }
        if (item == "email" && emailValidate(value)) {
          fails = "Este campo deve ser um e-mail válido";
          break;
        }
        if (item == "notspeacial") {
          let ban = format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
          if(value.test(ban)) fails = 'Este campo não aceita caracteres especiais';
          break;
        }
        if (item.includes("min") || this.min) {
          let min = this.min || item.split(":")[1];
          if (value.length < min) {
            fails = `Este campo deve ter, pelo menos, ${min} caracteres`;
            break;
          }
        }
        if (item.includes("max") || this.max) {
          let max = this.max || item.split(":")[1];
          if (value.length > max) {
            fails = `Este campo não pode ter mais que ${max} caracteres`;
            break;
          }
        }
      }

      this.fails = fails;
      this.validate[this.id] = !fails;
    },
  },
  emits: ["update:modelValue"],
});
</script>

<style src="./select.scss" lang="scss" scoped></style>

<style scoped>
.show {
  display: block;
}
.hide {
  display: none;
}
</style>
