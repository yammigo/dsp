import Vue from 'vue';
import VueRouter from 'vue-router';
import demoComponents from './demo-components';
import proComponents from "./pro-components"
import { isAuthPage } from 'js/config/menu-config';
Vue.use(VueRouter);
const initRouter = () => {
  const routerParam = {
    mode: 'hash',
    routes:
      [
        { path: '/', redirect: '/home' },
        {
          path: '/login',
          name: 'Login',
          component: (resolve) => require(['components/login/index'], resolve)
        },
        {
          path: '/register',
          name: 'Register',
          component: (resolve) => require(['components/register/index'], resolve)
        },
        {
          path: '/home',
          component: (resolve) => require(['components/app/app-frame'], resolve),
          children: [{
            path: '/home',
            name: 'Home',
            component: (resolve) => require(['components/home/index'], resolve),
            meta: { title: '首页', icon: 'icon-monitor' }
          }, {
            path: '/system-error',
            name: 'SystemError',
            component: (resolve) => require(['components/error-pages/500'], resolve),
            meta: { title: '系统错误' }
          }, {
            path: '/permission-error',
            name: 'PermissionError',
            component: (resolve) => require(['components/error-pages/403'], resolve),
            meta: { title: '权限错误' }
          },
          {
            path: '/notfound-error',
            name: 'NotfoundError',
            component: (resolve) => require(['components/error-pages/404'], resolve),
            meta: { title: '页面找不到' }
          },
          {
            path: '/users',
            name: 'Users',
            component: (resolve) => require(['components/management/users'], resolve),
            meta: { title: '用户管理' }
          },
          ...demoComponents,
          {
            path: '/account-basic',
            name: 'AccountBasic',
            component: (resolve) => require(['components/demo-components/account/account'], resolve),
            meta: { title: '个人中心', icon: 'icon-head' }
          },
          ...proComponents,
          {
            path: '*',
            name: 'CommonNotfoundError',
            component: (resolve) => require(['components/error-pages/404'], resolve),
            meta: { title: '页面找不到' }
          }]
        }
      ]
  };

  let router = new VueRouter(routerParam);
  let isFirstRouter = true;
  router.beforeEach((to, from, next) => {
    // if (!isFirstRouter && !isAuthPage(to.name)) {
    //   next({ name: 'PermissionError' });
    //   return;
    // }
    let eRouter = ["Login", "Register"]
    let token =Utils.getCookie('token');
    if (!token && eRouter.indexOf(to.name)==-1) {
      next({
        name: 'Login'
      });
      return false
    } else {
      if (token && eRouter.indexOf(to.name)>0) {
        next({
          name: from.name
        });
        return false;
      }
    }

    HeyUI.$LoadingBar.start();
    if (to.meta && to.meta.title) {
      document.title = to.meta.title + ' - 广源引擎';
    } else {
      document.title = '广源引擎广告投放系统';
    }
    // isFirstRouter = false;
    next();
  });
  router.afterEach(() => {
    HeyUI.$LoadingBar.success();
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    let layoutContent = document.querySelector('.h-layout-content');
    if (layoutContent) {
      layoutContent.scrollTop = 0;
    }
    // baidu 统计，如果有自己的统计，请至index.html修改至自己的埋点
    if (window._hmt) {
      // window._hmt.push(['_trackPageview', window.location.pathname]);
    }
  });
  return router;
};

export default initRouter;
