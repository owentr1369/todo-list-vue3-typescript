import { createApp } from "vue";

// Use Element Plus lib
import ElementPlus from "element-plus";
import "element-plus/lib";

import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(ElementPlus).use(store).use(router).mount("#app");
