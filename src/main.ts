import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import pinia from '@/stores'
import router from './router'

import App from './App.vue'
import useLoinStore from '@/stores/login'

const app = createApp(App)
for (const [key, component] of (<any>Object).entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
const loginStore = useLoinStore()
loginStore.loadLocalCacheData()
app.use(router)

app.mount('#app')
