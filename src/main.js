import { createApp } from "vue";
import { createPinia } from "pinia";
import vrInput from "./components/forms/vrInput.vue";
import vrButton from "./components/forms/vrButton.vue";

import 'highlight.js/styles/atom-one-dark.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component('vrInput', vrInput);
app.component('vrButton', vrButton);
app.mount("#app");
