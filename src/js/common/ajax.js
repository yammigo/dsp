import axios from 'axios';
import qs from 'qs';
import Utils from './utils';

// admin：10.0.0.15
// user：10.0.0.84
const DefaultParam = { repeatable: true };
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = G.get("env").apiDomin

let ajax = {
  PREFIX: '', //前缀
  Author: Utils.getAuthor() || 'fanjiantao',
  requestingApi: new Set(),
  extractUrl: function (url) {
    return url ? url.split('?')[0] : '';
  },
  isRequesting: function (url) {
    let api = this.extractUrl(url);
    return this.requestingApi.has(api);
  },
  addRequest: function (url) {
    let api = this.extractUrl(url);
    this.requestingApi.add(api);
  },
  deleteRequest: function (url) {
    let api = this.extractUrl(url);
    this.requestingApi.delete(api);
  },
  get: function (url, param, extendParam) {
    let params = {
      url,
      method: 'GET'
    };
    if (param) {
      ;
      params.params = param;
    }
    return this.ajax(params, extendParam);
  },
  post: function (url, param, extendParam) {
    var params = {
      url,
      method: 'POST'
      
    };
     let paramA = {
      body: param,
      header: {
          token:  Utils.getCookie('token'),
          cmdType:'1'
      }
  };
    if (param) params.data = JSON.stringify(paramA);
    return this.ajax(params,extendParam);
  },
  postJson: function (url, paramJson, extendParam) {
    return this.ajax({
      url,
      method: 'POST',
      data: paramJson
    },extendParam);
  },
  patchJson: function (url, paramJson, dataType, extendParam) {
    return this.ajax({
      url,
      method: 'PATCH',
      data: paramJson
    }, extendParam);
  },
  delete: function (url, extendParam) {
    return this.ajax({
      url: url,
      method: 'DELETE'
    }, extendParam);
  },
  ajax: function (param, extendParam) {
    let params = Utils.extend({}, DefaultParam, param, extendParam || {});
   
    params.crossDomain = params.url.indexOf('http') === 0;
    let url = params.url;
    if (!params.crossDomain) {
      url = params.url = this.PREFIX + params.url;
    }
    if (params.method != 'GET') {
      if (this.isRequesting(url)) {
        return new Promise((resolve, reject) => { resolve({ ok: false, msg: '重复请求' }); });
      }
      if (params.repeatable === false) {
        this.addRequest(url);
      }
    }
    let header = {
      // author: this.Author,
      // Authorization: Utils.getLocal('token'),
      // author: 'fanjiantao',
      // Authorization: 'fanjiantao',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    let defaultParam = {
      headers: header,
      responseType: 'json',
      validateStatus: function (status) {
        return true;
      },
      paramsSerializer: (params) => {
       
        return qs.stringify(params, { allowDots: true });
      }
    };
    if (params.crossDomain) {
      defaultParam.headers = {};
    }
    let that = this;
    params = Utils.extend({}, defaultParam, params);
    return new Promise((resolve) => {
      return axios.request(params).then((response) => {
        that.deleteRequest(params.url);
        let data = response.data;
        let status = response.status;
        if (status != 200) {
          if (status == 401) {
            window.top.location = '/login';
            return;
          }
          if (status == 500) {
            HeyUI.$Message.error('后台异常');
          } else if (status == 404) {
            HeyUI.$Message.error('请求不存在');
          } else if (status != 200) {
            HeyUI.$Message.error(data._msg || '请求异常');
          }
        }
        if(data.code==-2){
            Utils.clearCookie();
            Utils.removeCookie('token');
            window.location.reload();
        }
        data.ok = data.code == 0;
        if(!data.ok){
          HeyUI.$Message.error(data.msg);
        }
        resolve(data);
      }).catch(() => {
        that.deleteRequest(params.url);
        resolve({
          ok: false
        });
      });
    });
  }
};
export default ajax;
