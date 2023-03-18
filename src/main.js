import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router  from './router'
import './style.css'
import './assets/icon/iconfont.css'
import './assets/icon/iconfont'

const pinia = createPinia();
createApp(App).use(router).use(pinia).mount('#app')
