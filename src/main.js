import { createApp } from "vue";
import App from "./App.vue";
import vue3GoogleLogin from "vue3-google-login";

import "./assets/main.css";


const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
});

app.mount("#app");
