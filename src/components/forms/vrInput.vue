<template>
  <input
    v-if="isInput"
    :value="modelValue"
    :type="type"
    :class="{ [classe]: classe, 'is-invalid': fails, 'vr_input-default': !removeDefaultClass }"
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
    v-else-if="type == 'textarea'"
    :class="{ [classe]: classe, 'is-invalid': fails, 'vr_input-default': !removeDefaultClass }"
    :value="modelValue"
    v-bind="{
      id,
      placeholder,
      autocomplete,
      autofocus,
      disabled,
      readonly,
      required,
      minlength: min,
      maxlength: max
    }"
    @input="updateValue"
  />

  <template v-else-if="type == 'select'">
    <div
      tabindex="0"
      @click.stop="expandSelectOptions"
      :class="{
        [classe]: classe,
        'is-invalid': fails,
        'vr_input-default': !removeDefaultClass,
        'vr_input-select': !removeDefaultClass,
        expand: selectOptionsExpanded,
        disabled: (readonly || disabled)
      }"
      v-bind="{
        id,
        autofocus,
        disabled,
        readonly,
        required
      }"
    >
      <span class="vr_input-select_selected-option-text" :class="{noneSelectedOptions: noneSelectedOptions}">{{selectedOptionsText}}</span>
      <ul class="vr_input-select_options" :class="{expand: selectOptionsExpanded, search: search}">
        <li @click.stop class="vr_input-select_actions" v-if="(checkAll && multiple)">
          <button @click.stop="doCheckAll" type="button">{{checkAllText}}</button>
          <button @click.stop="doUncheckAll" type="button">{{uncheckAllText}}</button>
        </li>
        <li @click.stop class="vr_input-select_options_search" v-if="search">
          <input type="text" class="vr_input-default" :class="searchClass" :placeholder="searchPlaceholder" v-model="selectOptionsSearch">
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
import langAssets from './langs.js';

const setLang = (typeof vrLang !== 'undefined') ? vrLang : 'pt_BR';

const aText = langAssets[setLang];

export default defineComponent({
  name: 'vrInput',
  props: {
    modelValue: { type: [String, Array], required: true },

    type: { type: String, required: true },
    validate: { type: Object, required: false },
    id: { type: String, required: true },
    class: { type: String, required: false },
    placeholder: { type: String, required: false },
    rules: { type: String, required: false },
    autocomplete: { type: String, required: false, default: 'off' },
    autofocus: { type: Boolean, required: false },
    checked: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    multiple: { type: Boolean, required: false },
    readonly: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    min: { type: Number, required: false },
    max: { type: Number, required: false },
    removeDefaultClass: { type: Boolean, required: false },

    options: { type: Array, required: false },
    searchPlaceholder: { type: String, required: false, default: aText.searchPlaceholder },
    search: { type: Boolean, required: false },
    searchClass: { Type: String, required: false },
    checkAll: { type: Boolean, required: false },
    checkAllText: { type: String, required: false, default: aText.checkAll },
    uncheckAllText: { type: String, required: false, default: aText.uncheckAll },
    maxSelectedDisplay: { type: Number, required: false, default: 4},
  },
  data() {
    return {
      fails: false,
      classe: this.class,
      selectedOptions: {},
      _options: this.options,
      selectOptionsExpanded: false,
      selectOptionsSearch: '',
      selectedOptionsText: this.placeholder || aText.noneSelectedText,
      noneSelectedOptions: true,
      aText: aText,
      isInput: false,
      arrReturn: [],
      hash: null,
    };
  },
  mounted() {
    this.hash = (Math.random() + 1).toString(36).substring(7);
    let type = this.type;
    this.isInput = (type == 'text' || type == 'email' || type == 'number');

    if(this.type == 'select') {
      if(typeof this.options == 'undefined')
        console.warn(`The component '${this.id}' was defined as a select but no options was given`);
    }

    let shouldValidate = typeof this.rules == 'undefined';
    this.validate[this.hash] = shouldValidate;

    emitter.on("doValidate", (modelName) => {
      if (this.hash != modelName) return;
      this.doValidate(this.modelValue);
    });
  },
  created(){
    document.addEventListener('click', this.documentClick);
  },
  destroyed(){
    document.removeEventListener('click', this.documentClick)
  },
  watch: {
    options(){
      this._options = this.options;
       if(this.modelValue){
        let selected = this.modelValue;
        if(!Array.isArray(selected)) selected = [selected];
        selected.map(sel => {
          let selectedIndex = this.options.findIndex(item => item.value == sel);
          if(selectedIndex >= 0) this.selectOption(this._options[selectedIndex]);
        });
      }
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
    },
    selectedOptionsText(text){
      if(typeof text == 'undefined')
        this.selectedOptionsText = this.placeholder || aText.noneSelectedText;
    }
  },
  methods: {
    documentClick(e){
      this.selectOptionsExpanded = false;
    },
    expandSelectOptions(){
      if(this.readonly || this.disabled) return this.selectOptionsExpanded = false;
      this.selectOptionsExpanded = !this.selectOptionsExpanded;
    },
    selectOption(option, checkAll=null){
      if(checkAll !== null){
        this.selectedOptions[option.value] = (checkAll) ? option.label : false;
      }else{
        this.selectedOptions[option.value] = !this.selectedOptions[option.value] ? option.label : false;
      }
      let selected = null;
      let dump = this.selectedOptions;

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
        this.selectedOptionsText = (options.length > this.maxSelectedDisplay) ? `${options.length} ${aText.selectedItems}` : options.join(', ');
        if(!options.length) this.selectedOptionsText = this.placeholder;
      }else{
        this.selectedOptions = {};
        selected = '';
        this.selectedOptionsText = false;
        for(let index in dump){
          if(index == option.value && dump[index]){
            this.selectedOptions[index] = dump[index];
            selected = index;
            this.selectedOptionsText = dump[index];
          }
        }
        this.selectedOptionsText = this.selectedOptionsText || this.placeholder;
      }

      this.noneSelectedOptions = (!selected.length);

      this.$emit('onSelect', selected);
      this.updateValue(selected);
    },
    doCheckAll(){
      this._options.map((item) => this.selectOption(item, true));
    },
    doUncheckAll(){
      this._options.map((item) => this.selectOption(item, false));
    },
    updateValue(e) {
      let value = (e.target && typeof e.target.value !== 'undefined') ? e.target.value : e;
      this.$emit('update:modelValue', value);
      this.doValidate(value);
    },
    doValidate(value) {
      if (!this.rules) return;

      let fails = '';
      let valid = true;
      if(!Array.isArray(value)) value = value.trim();
      let rules = this.rules.split('|');

      for (let i = 0; rules.length > i; i++) {
        let item = rules[i];
        if (item == 'required' && value.length <= 0) {
          fails = aText.rules.required;
          break;
        }
        if (item == 'numeric' && isNaN(value)) {
          fails = aText.rules.numeric;
        }
        if (item == 'email' && !this.emailValidate(value)) {
          fails = aText.rules.email;
          break;
        }
        if (item == 'notspecial') {
          let ban = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
          if(ban.test(value)) fails = aText.rules.notSpecial;
        }
        if (item.includes('min') || this.min) {
          let min = this.min || item.split(":")[1];
          valid = true;
          if(this.type == 'number'){
            if(parseFloat(value) < parseFloat(min)) valid = false;
          }else{
            if (value.length < min) valid = false;
          }
          if(!valid) fails = aText.rules.min[this.type].replace(':min', min);
        }
        if (item.includes('max') || this.max) {
          let max = this.max || item.split(":")[1];
          valid = true;
          if(this.type == 'number'){
            if(parseFloat(value) > parseFloat(max)) valid = false;
          }else{
            if (value.length > max) valid = false;
          }
          if(!valid) fails = aText.rules.max[this.type].replace(':max', max);
        }
      }

      this.fails = fails;
      this.validate[this.hash] = !fails;
    },
    emailValidate(email){
      return String(email).toLowerCase()
      .match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ );
    }
  },
  emits: ['update:modelValue', 'input', 'onSelect'],
});
</script>

<style src="./input.scss" lang="scss"></style>