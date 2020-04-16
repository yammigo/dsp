// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import '@babel/polyfill';
import Vue from 'vue';
import App from 'components/App';
import heyuiConfig from 'js/config/heyui-config';
import routerConfig from 'js/config/router-config';
// import "../src/js/lib/mmGridTable.js"
import store from 'js/vuex/store';
import 'js/vue/components';
import 'js/vue/filters';
import './css/app.less';
import waterfall from 'vue-waterfall2'
Vue.use(waterfall);
G.set('env', {
  // apiDomin:process.env.NODE_ENV == 'development' ? '//10.0.0.84' : '//103.22.43.12:8000'
  apiDomin:process.env.NODE_ENV == 'development' ? '//10.0.0.111:8084' : '//103.22.43.12:8000'
});
// require('./css/app.less');
// 开发环境判断
// process.env.NODE_ENV == 'development'
// 使用mock文件， 自己开发的时候请删除
// require('./mock/index');
// HeyUI已经设定为全局变量，无需引用
// 设定全局变量请参考根目录下的hey.conf.js文件
heyuiConfig();

Vue.use(HeyUI);

const router = routerConfig();

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
