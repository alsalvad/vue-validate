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
import { defineComponent } from "vue";
import { emitter } from "./form";

export default defineComponent({
  name: "vrButton",
  props: {
    id: { type: String, required: false },
    class: { type: String, required: false },
    title: { type: String, required: false },
    disabled: { type: Boolean, required: false },
    completed: { type: Boolean }
  },
  data() {
    return {
      _disabled: this.disabled,
      loading: this.state,
    };
  },
  watch: {
    completed(val){
      console.log('watch', val)
      this.onCompleted();
    }
  },
  mounted(){
    emitter.on("btCompleted", (id) => {
      if (this.id != id) return;
      this.completed();
    });
  },
  // emits: ['click'],
  methods: {
    clicked() {
      this.loading = true;
      this._disabled = true;
      // this.$emit("click", true);
      // let $this = this
      // setTimeout(function(){
      //   $this.completed($this)
      // }, 1000)

      //this.testeFuncao();
    },
    onCompleted() {
      console.log('dasda');
      this.loading = false;
      this._disabled = false;
      this._state = false;
    },
  },
});
</script>
