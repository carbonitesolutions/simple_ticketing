import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import {
  FrappeUI,
  setConfig,
  frappeRequest,
} from 'frappe-ui'

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(FrappeUI)

app.mount('#app')
