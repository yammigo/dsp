const fullMenus = [
  {
    title: '首页',
    key: 'Home',
    icon: 'icon-monitor',
    count: 1,
  },
  {
    title: 'Icons',
    key: 'Icons',
    icon: 'icon-heart'
  },
  {
    title: '列表应用',
    key: 'tablelist',
    icon: 'icon-grid-2',
    children: [
      {
        title: '基础表格',
        key: 'TableBasic'
      },
      {
        title: '查询列表',
        key: 'TableSearch'
      }
    ]
  },
  {
    title: '表单应用',
    key: 'form-folder',
    icon: 'icon-paper',
    children: [
      {
        title: '基础表单',
        key: 'Form'
      },
      {
        title: '表单详情',
        key: 'FormDetail'
      }
    ]
  },
  {
    title: '模糊匹配',
    key: 'AutoComplete-folder',
    icon: 'icon-disc',
    children: [
      {
        title: '模糊搜索',
        key: 'Autocomplete1'
      },
      {
        title: '场景应用',
        key: 'Autocomplete2'
      },
      {
        title: '复杂场景',
        key: 'Autocomplete3'
      }
    ]
  },
  {
    title: '扩展组件',
    key: 'Advance-folder',
    icon: 'icon-bar-graph-2',
    children: [
      {
        title: '图表',
        key: 'Chart'
      },
      {
        title: '富文本编辑器',
        key: 'RicktextEditor'
      },
      {
        title: '代码编辑器',
        key: 'CodeEditor'
      },
      {
        title: 'Markdown编辑器',
        key: 'MarkdownEditor'
      }, {
        title: '百度地图',
        key: 'BaiduMap'
      }
    ]
  },
  {
    title: '系统设置',
    key: 'SysSetting',
    icon: 'icon-cog',
    children: [
      {
        title: '个人中心',
        key: 'AccountBasic'
      },
      {
        title: '安全设置',
        key: 'SecuritySetting'
      },
      {
        title: '权限设置',
        key: 'Authorization'
      },
      {
        title: '用户管理',
        key: 'Users'
      },
      //测试不渲染
      {
        title: '接口测试',
        authCode:'test/auto',
        key:'1',
        type:'2',
      },
      {
        title: '接口测试2',
        authCode:'test/auto2',
        key:'2',
        type:'2',
      },
      //测试不渲染end
      {
        title: '组件测试',
        key: 'testvue',
      }
    ]
  }
];
const getMenus = function (menuIdList = []) {
  //换成异步获取
  return getAuthMenu(fullMenus, menuIdList);
};

let getAuthMenu = (menus, menuIdList) => {
  let configMenu = [];
 
  for (let menu of menus) {
    if(menu.type==2) continue;
    let m = Utils.copy(menu);
    // console.log(menuIdList,m.key)
    if (menuIdList.indexOf(m.key) > -1 ) {
       configMenu.push(m);
    }
    if (menu.children && menu.children.length) {

      m.children = getAuthMenu(menu.children, menuIdList);
    }
  }
  return configMenu;
};

//深度遍历获取菜单
const getKeys = function (menus) {
  let keys = [];
  for (let menu of menus) {
    //添加key判断
     keys.push(menu.key);
    if (menu.children && menu.children.length) {
      keys.push(...getKeys(menu.children));
    }
  }
  return keys;
};

//遍历所有的权限表
let fullMenuKeys = getKeys(fullMenus);
//路由鉴权
const isAuthPage = function (name) {
  // console.log(fullMenuKeys,"鉴权")
  let menus = G.get('SYS_MENUS') || [];
  // console.log(menus,"鉴权菜单");
  if (fullMenuKeys.indexOf(name) > -1 && menus.indexOf(name) == -1) {
    return false;
  }
  return true;
};

export { getMenus, fullMenus, fullMenuKeys, isAuthPage };
