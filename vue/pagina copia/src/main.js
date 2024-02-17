import './assets/main.css'
import { createApp } from 'vue';
import VueCryptojs from 'vue-cryptojs';
import router from './router'
import App from './App.vue'


const app = createApp(App).use(VueCryptojs)

app.use(router)

app.mount('#app')
