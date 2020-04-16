import Ajax from './ajax';

const Request = {
  User: {
    info() {
      return Ajax.get('/account/info');
    }
  },
  Dict: {
    //获取字典信息
    get() {
      return Ajax.get('/dict');
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
      return Ajax.post('/pub/login.do', param);
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
  },
  //获取素材列表
  Library: {
    getLibrary(params) {
      return Ajax.post('/ad/library/list.do', params)
    },
    deleteLibrary(params){ 
      return Ajax.post('/ad/library/delete.do',params)
    },
    getAdType(params) {
      //       Integer parentId ： 父级ID（顶级传0）
      
      // Integer appType ： 应用类型（1：app，2：web）
      return Ajax.post('/base/ad/type/list.do', params)
    },
    /** 
     * 添加样式下的创意列表
     * ideaId 创意Id
     * adType 类型  adTypeStyle 样式
     * @param {object} params 
     */
    addView(params){
      return Ajax.post('/ad/idea/view/add.do',params)
    },
     /** 
      * 删除样式下的创意列表
     * ideaId 创意Id
     * adType 类型  adTypeStyle 样式
     * @param {object} params 
     */
    removeView(params){
      return Ajax.post('/ad/idea/view/delete.do',params)
    },
     /**
      * getView  获取样式下的创意列表
     * ideaId	Integer	是	创意Id
     * adType	Integer	是	类型
     * adTypeStyle	Integer	是	类型 二级
     * @param {object} params 
     */
    getView(params){
      return Ajax.post('/ad/idea/view/list.do',params)
    },
    /**
     * id:'' || int 计划ID
     * @param {object} param 
     */
    getIdea(param){
      return Ajax.post('/ad/idea/get.do',param);
    }

  }
};

export default Request;
