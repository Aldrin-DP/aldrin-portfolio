import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

library.add(
  faEnvelope,
  faGithub, 
  faLinkedin,
  faExchangeAlt,
  faArrowRightLong
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')