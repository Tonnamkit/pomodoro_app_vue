import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {far } from '@fortawesome/free-regular-svg-icons'


library.add(far)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
