import { createApp } from 'vue'
import App from './App.vue'
import helloAPI from '@/services/helloAPI'

let app = createApp(App)

app.config.globalProperties.$hello_api = helloAPI//helloAPI methods are now available for use to the rest of the app 

app.mount('#app')









