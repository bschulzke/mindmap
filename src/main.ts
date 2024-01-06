import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia()
pinia.use(piniaPersist)


createApp(App).use(pinia).mount('#app')
