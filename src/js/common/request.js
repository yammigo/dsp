import Ajax from './ajax';

const Request = {
  User: {
    info() {
      return Ajax.get('/account/info');
    }
  },
  Dict: {
    get() {
      return Ajax.get(`/dict`);
    }
  },
  Home: {
    getMessageList() {
      return Ajax.get(`/home/messages`);
    }
  },
  Account: {
    menus() {
      return Ajax.get(`/getmenuList`)
    }
  },
  Login: {
    //登录
    login(param) {
      return Ajax.postJson('/login', param);
    },
    //登出
    logout(param) {
      return Ajax.post('/logout', param);
    }
  },
  Management: {
    //获取用户
    users(params) {
      return Ajax.get('/management/users', params);
    },
    //获取权限
    roles(params) {
      return Ajax.get('/management/roles', params);
    }
  }
};

export default Request;
