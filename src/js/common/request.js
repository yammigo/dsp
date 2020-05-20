import Ajax from './ajax';

const Request = {
  Common:{
    //广告样式
    sityList(params){
      return Ajax.post("/base/city/list.do",params)
    },
    //最小投放金额
    getMinxMoney(params){
      return Ajax.post("/base/conf/bid/mini.do",params)
    },
    //获取子账号列表
    getChildUsers(params){
      return Ajax.post("/user/agent/user/list.do",params)
    },
    //添加子账户
    addChildUser(params){
      return Ajax.post("/user/agent/user/add.do",params)
    }
  },
  adGroup: {
    add(params) {
      return Ajax.post('/ad/group/add.do', params)
    },
    get(params) {
      return Ajax.post('/ad/group/list.do', params)
    },
    update(params) {
      return Ajax.post('/ad/group/update.do', params)
    },
    updateStatus(params) {
      return Ajax.post('/ad/group/update/status.do', params)
    }

  },
  adPlan: {
    add(params) {
      return Ajax.post('/ad/plan/add.do', params)
    },
    get(params) {
      return Ajax.post("/ad/plan/list.do", params)
    },
    update(params) {
      return Ajax.post("/ad/plan/update.do", params)
    },
    updateStatus(params) {
      return Ajax.post("/ad/plan/update/status.do", params)
    }
  },
  adIdea:{
    add(params){
      return Ajax.post('/ad/idea/add.do',params)
    },
    get(params){
      return Ajax.post('/ad/idea/list.do',params)
    },
    update(params){
      return Ajax.post('/ad/idea/update.do',params)
    },
    updateStatus(params){
      return Ajax.post('/ad/idea/update/status.do',params)
    }

  },
  User: {
    info(param) {
      return Ajax.post('/user/info.do',param);
    },
    //获取企业认证信息
    getCompany(param){
      return Ajax.post('/user/company/info.do',param)
    },
    //添加企业认证信息
    addCompany(param){
      return Ajax.post('/user/company/update.do',param)
    },
    //获取投放资质信息
    getAdput(param){
      return Ajax.post('/user/adput/info.do',param)
    },
    addAdput(param){
      return Ajax.post('/user/adput/update.do',param)
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
    },
    userIndex(param){
      return Ajax.post('/user/index.do',param);
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
      return Ajax.post('/user/logout.do', param);
    }
  },
  Register:{
    getSMS(param){
      return Ajax.post('/pub/send/verification/vode.do',param);
    },
    addUser(param){
      return Ajax.post('/pub/register.do',param);
    },
    resetPassword(param){
      return Ajax.post("/pub/rest/password.do",param)
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
    deleteLibrary(params) {
      return Ajax.post('/ad/library/delete.do', params)
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
    addViews(params) {
      return Ajax.post('/ad/idea/view/add.do', params)
    },
    /** 
     * 删除样式下的创意列表
    * ideaId 创意Id
    * adType 类型  adTypeStyle 样式
    * @param {object} params 
    */
    removeView(params) {
      return Ajax.post('/ad/idea/view/delete.do', params)
    },
    /**
     * getView  获取样式下的创意列表
    * ideaId	Integer	是	创意Id
    * adType	Integer	是	类型
    * adTypeStyle	Integer	是	类型 二级
    * @param {object} params 
    */
    getView(params) {
      return Ajax.post('/ad/idea/view/list.do', params)
    },

    /**
     * id:'' || int 计划ID
     * @param {object} param 
     */
    getIdea(param) {
      return Ajax.post('/ad/idea/get.do', param);
    },

    getViews(param) {
      return Ajax.post('/ad/idea/style/views.do', param)
    }

  }
};

export default Request;
