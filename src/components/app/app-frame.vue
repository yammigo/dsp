<style lang='less'>

</style>
<template>
<div>
    <Layout class="app-frame" v-if="!loading" :siderCollapsed="siderCollapsed" :siderFixed="layoutConfig.siderFixed">
        <!-- <Sider :theme="layoutConfig.siderTheme">
            <appMenu :theme="layoutConfig.siderTheme"></appMenu>
        </Sider> -->
        <Layout :headerFixed="layoutConfig.headerFixed">
            <HHeader theme="white" style="position:relative;z-index:999;background:#0A2140">
                <appHead @openSetting="openSetting=true" :layoutConfig="layoutConfig"></appHead>
            </HHeader>
            <SysTabs v-if="layoutConfig.showSystab" homePage="Home"></SysTabs>
            <Content>
                <div class="app-frame-content">
                    <!-- <keep-alive> -->
                    <!-- <transition name="fade" mode="out-in"> -->
                    <router-view v-if="isRouterAlive"></router-view>
                    <!-- </transition> -->
                    <!-- </keep-alive> -->
                </div>
                <HFooter>
                    <appFooter></appFooter>
                </HFooter>
            </Content>
        </Layout>
    </Layout>
    <Modal v-model="openSetting" type="drawer-right" style="background:#eee" :closeOnMask="false">
        <!-- <appLayoutSetting :layoutConfig="layoutConfig"></appLayoutSetting> -->
        <childUserList @close="close"></childUserList>
    </Modal>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
// import appLayoutSetting from './modules/app-layout-setting';
import childUserList from 'components/pro-components/drawerUserList.vue'
import appHead from './app-header';
import appMenu from './app-menu';
import appFooter from './app-footer';
import SysTabs from '../common/sys-tabs';
import store from 'js/vuex/store';
import {
    fullMenuKeys,
    isAuthPage
} from 'js/config/menu-config';
import { watch } from 'fs';

export default {
    provide() {
        return {
            reload: this.reload
        }
    },
    data() {
        return {
            isRouterAlive: true,
            loading: true,
            openSetting: false,
            layoutConfig: {
                siderTheme: 'white',
                showSystab: false,
                headerFixed: false,
                siderFixed: false
            }
        };
    },
    mounted() {
        // 如果无后台数据，将此处屏蔽
        this.init();
        // 如果无后台数据，将此处打开
        this.loading = false;
        const listener = G.addlistener('SYS_MENU_REFRESH', () => {
            this.initMenu();
        });
        this.$once('hook:beforeDestroy', function () {
            G.removelistener(listener);
        });
    },
    methods: {
        reload() {
            this.isRouterAlive = false
            this.$nextTick(function () {
                this.isRouterAlive = true
            })
        },
        close() {
            this.openSetting = false;
        },
        init() {
            // this.$Loading('加载中');

            // R.User.info().then(resp => {
            //     if (resp.ok) {
            //         resp.body.avatar = require('../../images/avatar.png');
            //         G.set('account', resp.body);
            //         store.dispatch('updateAccount', resp.body);
            this.initDict();
            this.initMenu();
            //     }
            // });
        },
        initDict() {
            //初始化字典
            // R.Dict.get().then(resp => {
            //     if (resp.ok) {
            //         let dicts = resp.body;
            //         for (let dict of dicts) {
            //             HeyUI.addDict(dict.name, dict.data);
            //         }
            //     }
            //     this.loading = false;
            //     this.$Loading.close();
            // });
        },
        updateLayoutConfig({
            key,
            value
        }) {
            this.layoutConfig[key] = value;
        },
        initMenu() {
            console.log('保存权限');
            // 如果使用权限配置，配合后端获取请求的数据
            // setTimeout(() => {
            let menus = Utils.getLocal2Json('SYS_CONFIG_MENU') || fullMenuKeys;
            // console.log(menus, '菜单')
            G.set('SYS_MENUS', menus);
            G.trigger('SYS_MENU_UPDATE');
            if (!isAuthPage(this.$route.name)) {
                this.$router.replace({
                    name: 'PermissionError'
                });
            }
            // },3000)
            //走服务端权限判断
            // R.Account.menus().then(resp => {
            //     if (resp.ok) {
            //         let menus = resp.body;
            //         G.set('SYS_MENUS', menus);
            //         G.trigger('SYS_MENU_UPDATE');
            //         if (!isAuthPage(this.$route.name)) {
            //             this.$router.replace({
            //                 name: 'PermissionError'
            //             });
            //         }
            //     }
            // });

            // let menus = Utils.getLocal2Json('SYS_CONFIG_MENU') || fullMenuKeys;
            // G.set('SYS_MENUS', menus);
            // G.trigger('SYS_MENU_UPDATE');
            // if (!isAuthPage(this.$route.name)) {
            //   this.$router.replace({ name: 'PermissionError' });
            // }
        }
    },
    computed: {
        ...mapState(['siderCollapsed','childUser'])
    },
    components: {
        appHead,
        appMenu,
        SysTabs,
        appFooter,
        childUserList
        // appLayoutSetting
    },
    watch:{
        childUser(){
           this.reload();
           this.openSetting = false;
        }
    }
};
</script>
