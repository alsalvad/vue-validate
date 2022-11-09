<template>
  <button
    type="button"
    :class="class"
    :title="title"
    :disabled="_disabled"
    @click="clicked"
  >
    <template v-if="loading">
      <i class="fa fa-spinner fa-spin"></i>
    </template>
    <template v-else><slot /></template>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FButton',
  props: {
    class: { type: String, required: false, default: '' },
    title: { type: String, required: false, default: '' },
    disabled: { type: Boolean, required: false, default: false },
    state: null
  },
  data(){
    return{
      _disabled: this.disabled,
      loading: false,
    }
  },
  watch: {
    state(val){
      setTimeout(() => {
        if(val)
          this.completed();

      })
    }
  },
  methods: {
    clicked(){
      this.loading = true;
      this._disabled = true;
    },
    completed(){
      setTimeout(() => {
        this.loading = false;
        this._disabled = false;
      });
    }
  }
});
</script>
