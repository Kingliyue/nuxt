import Vue from 'vue'
import css from 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import Cookies from 'js-cookie'
export default () => {
  Vue.use(VueAwesomeSwiper, {css})
  Vue.use(ElementUI)
  Vue.use(Cookies)
}
