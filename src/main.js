import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

require("./assets/style.scss")
//require("@creativebulma/bulma-collapsible")
// require("../node_modules/bulma-carousel/dist/js/bulma-carousel.min.js")

import { library, dom} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/vue-fontawesome'

dom.watch()

library.add(fas)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
