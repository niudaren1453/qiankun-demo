import { createApp } from "vue";
import App from "./App.vue";
import { registerMicroApps, start } from "qiankun";
import router from "@/router/index";
import ls from '@/utils/ls'

// import store from './store'
import {createPinia } from 'pinia'
const Pinia = createPinia()
const userInfo= ls.get('userInfo').value || {}
registerMicroApps([
    // {
    //   name: "app-seed",
    //   entry: "//localhost:8081",
    //   container: "#micro-wrapper",
    //   activeRule: "/app-seed/",
    // },
    {
        name: "app-vite",
        entry: "//localhost:4884",
        container: "#micro-wrapper",
        activeRule: "/app-vite/",
        props: {
            userInfo
        }
    },
]);
start();

createApp(App)
.use(router)
// .use(store)
.use(Pinia)
.mount("#app");
