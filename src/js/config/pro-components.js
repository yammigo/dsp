//业务路由
import adView from "components/pro-components/originality"
export default [
    //推广
    {
        path: '/extension',
        name: 'extension',
        component: (resolve) => require(['components/pro-components/extension'], resolve),
        meta: { title: '推广', icon: 'icon-paper' },
    },
    //子账号
    {
        path: '/childUsers',
        name: "childUsers",
        component: (resolve) => require(['components/childUsers/list.vue'], resolve ),
        meta: { title: '子账号管理', icon: 'icon-paper' }

    },
    //推广
    {
        path: '/adManage',
        component: adView,
        children: [
            {
                path: '/adGroup',
                name: 'adGroup',
                props: (route) => ({ ...route.query }),
                meta: { title: '广告组', icon: 'icon-paper' },
                component: (resolve) => require(['components/pro-components/child/adGroup'], resolve),
            },
            {
                path: '/adPlan',
                name: 'adPlan',
                props: (route) => ({ ...route.query }),
                meta: { title: '计划', icon: 'icon-paper' },
                component: (resolve) => require(['components/pro-components/child/adPlan'], resolve),

            },
            {
                path: '/adOriginality',
                name: 'adOriginality',
                props: (route) => ({ ...route.query }),
                meta: { title: '创意', icon: 'icon-paper' },
                component: (resolve) => require(['components/pro-components/child/adOriginality'], resolve),

            }
        ]
    }
];