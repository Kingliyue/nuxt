import Vue from 'vue'
import css from 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
export default () => {
  Vue.use(VueAwesomeSwiper, {css})
}
