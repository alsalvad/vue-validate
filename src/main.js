import { createApp } from "vue";
import { createPinia } from "pinia";
import FInput from "./components/forms/FInput.vue";

import App from "./App.vue";
import router from "./router";


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('FInput', FInput);
app.mount("#app");
