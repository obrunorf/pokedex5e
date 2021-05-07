import { createApp } from "vue";
import App from "./App.vue";
import { Tabs, Tab } from "vue3-tabs-component";

import "./index.css";

createApp(App).component("tabs", Tabs).component("tab", Tab).mount("#app");
