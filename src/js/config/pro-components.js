//业务路由
export default [
    //推广
    {
        path: '/extension',
        name: 'extension',
        component: (resolve) => require(['components/pro-components/extension'], resolve),
        meta: { title: '推广', icon: 'icon-paper' },
    }, 
    {
        path: '/adGroup',
        component: (resolve) => require(['components/pro-components/originality'],resolve),
        children: [
            {
                path:'/adGroup',
                name:'adGroup',
                meta: { title: '广告组', icon: 'icon-paper' },
                component: (resolve) => require(['components/pro-components/child/adGroup'], resolve),
            },
            {
                path:'/adPlan/:id',
                name:'adPlan',
                props:true,
                meta: { title: '计划', icon: 'icon-paper' },
                component: (resolve) => require(['components/pro-components/child/adPlan'], resolve),

            },
            {
                path:'/adOriginality',
                name:'adOriginality',
                meta: { title: '创意', icon: 'icon-paper' },
                component: (resolve) => require(['components/pro-components/child/adOriginality'], resolve),

            }
        ]
    }
];