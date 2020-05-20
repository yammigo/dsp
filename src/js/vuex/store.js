import Vue from 'vue';
import Vuex from 'vuex';
// import { Utils } from 'hey-utils';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User: {},
    childUser:JSON.parse(Utils.getCookie('childUser'))||{ id: '', loginName: '' },
    msgCount: {
      messages: 2
    },

    searchCriteria: {

    },
    siderCollapsed: true
  },
  mutations: {
    updateAccount(state, data) {
      state.User = data;
    },
    updateSiderCollapse(state, isShow) {
      setTimeout(() => {
        G.trigger('page_resize');
      }, 600);
      state.siderCollapsed = isShow;
    },
    updateMsgCount(state, data) {
      state.msgCount = data;
    },
    setSearch(state, data) {
      state.searchCriteria = { ...data };
    },
    setChildUserInfo(state, data) {
      //将信息持久化
      state.childUser = { ...data };
      Utils.saveCookie('childUser', { ...data });
      Utils.saveCookie('childId', data.id);
    }
  },
  actions: {
    updateAccount(context, data) {
      context.commit('updateAccount', data);
    },
    updateSiderCollapse(context, data) {
      context.commit('updateSiderCollapse', data);
    },
    updateMsgCount(context, data) {
      context.commit('updateMsgCount', data);
    }
  },
  getters: {
    childUser: state => {
      return childUser;
    },
    account: state => {
      return state.User;
    },
    siderCollapsed: state => {
      return state.siderCollapsed;
    },
    msgCount: state => {
      return state.msgCount;
    },
    getSearch: state => {
      return state.searchCriteria;
    }
  }
});
