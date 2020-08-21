import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


import DesignSystem from 'alllit-design-system'
import 'alllit-design-system/dist/system/system.css'

Vue.use(DesignSystem)

Vue.config.productionTip = false


import AllContainer from '@/components/AllContainer.vue'
import ImageText from '@/components/ImageText.vue'
import Background from "@/components/Background.vue"
import MiddleText from '@/components/MiddleText.vue'
import Doutone from '@/components/Duotone.vue'
Vue.component("all-container", AllContainer)
Vue.component("image-text", ImageText)
Vue.component("background", Background)
Vue.component("middle-text", MiddleText)
Vue.component("duotone", Doutone)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
