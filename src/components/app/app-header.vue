<style lang="less">
.app-header {
    color: rgba(49, 58, 70, 0.8);

    .h-autocomplete {
        line-height: 1.5;
        float: left;
        margin-top: 15px;
        margin-right: 20px;
        width: 120px;

        &-show,
        &-show:hover,
        &-show.focusing {
            outline: none;
            box-shadow: none;
            border-color: transparent;
            border-radius: 0;
        }

        &-show.focusing {
            border-bottom: 1px solid #eee;
        }
    }

    &-info &-icon-item {
        cursor: pointer;
        display: inline-block;
        float: left;
        padding: 0 15px;
        height: @layout-header-height;
        line-height: @layout-header-height;
        margin-right: 10px;
        color: #fff;

        &:hover {
            // background: @hover-background-color;
        }

        i {
            font-size: 18px;
        }

        a {
            color: inherit;
        }

        .h-badge {
            margin: 20px 0;
            display: block;
        }
    }

    .h-dropdownmenu {
        float: left;
    }

    &-dropdown {
        float: right;
        margin-left: 10px;
        padding: 0 20px 0 15px;
        color: #fff;

        .h-icon-down {
            right: 20px;
            color: #fff;
        }

        cursor: pointer;

        &:hover,
        &.h-pop-trigger {
            // background: @hover-background-color;
        }

        &-dropdown {
            padding: 5px 0;

            .h-dropdownmenu-item {
                padding: 8px 20px;
            }
        }
    }

    &-menus {
        display: inline-block;
        vertical-align: top;

        >div {
            display: inline-block;
            font-size: 15px;
            padding: 0 25px;
            color: @dark-color;

            &:hover {
                color: @primary-color;
            }

            +div {
                margin-left: 5px;
            }

            &.h-tab-selected {
                color: @white-color;
                background-color: @primary-color;
            }
        }
    }

    &-navItem {
        margin-left: 40px;
        position: relative;
        display: inline-block;
        color: #999;
    }

    &-navItem:hover {
        color: #fff !important;
    }

    .router-link-active {
        color: #fff;
    }

    .router-link-active::before {
        content: "";
        display: block;
        position: absolute;
        bottom: 10px;
        width: 80%;
        left: 50%;
        transform: translateX(-50%);
        height: 4px;
        background: #2F88FF;
        border-radius: 4px;
    }
}
</style>

<template>
<div class="app-header">
    <div style="margin-left:30px;float:left;color:#eee;"><img src="../../images/logo.png" width="30" style="display:inline-block;vertical-align: middle;" /><span style="margin-left:10px;">广告投放平台</span></div>
    <div style="margin-left:30px;float:left">
        <router-link to="/home" class="app-header-navItem">首页</router-link>
        <router-link to="/extension" class="app-header-navItem">推广</router-link>
        <router-link v-if="agentType&&agentType==1" to="/childUsers" class="app-header-navItem">子账户管理</router-link>
    </div>
    <!-- <div style="width:50px;float:left;"><Button :icon="siderCollapsed ? 'icon-align-right':'icon-align-left'" size="l" noBorder class="font20" @click="siderCollapsed=!siderCollapsed"></Button></div> -->
    <div class="float-right app-header-info">
        <!-- <AutoComplete :showDropdownWhenNoResult="false" v-model="searchText" config="globalSearch" placeholder="全局搜索.."></AutoComplete> -->
        <div v-if="agentType&&agentType==1" class="app-header-icon-item" placement="left" v-tooltip content="切换操作账户" theme="white" @click="showSettingModal">
            <i class="h-icon-user" style="font-size:13px"></i><span style="margin-left:10px;">切换账户<i class="h-icon-angle-down" style="position:relative;top:2px;"></i></span>
        </div>
        <!-- <appHeaderMessage></appHeaderMessage> -->
        <!-- <div class="app-header-icon-item" v-tooltip content="GitHub" theme="white" @click="goGithub">
        <i class="h-icon-github"></i>
      </div> -->
        <!-- <div class="app-header-icon-item" v-tooltip content="教学文档" theme="white" @click="goBook">
        <i class="h-icon-help"></i>
      </div> -->
        <DropdownMenu className="app-header-dropdown" trigger="hover" offset="0,5" :width="150" placement="bottom-end" :datas="infoMenu" @onclick="trigger">
            <Avatar :src="userInfo.avatar" :width="30"><span>{{childUser.loginName||userInfo.loginName}}</span></Avatar>
        </DropdownMenu>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
import {
    userInfo
} from 'os';
// import appHeaderMessage from './modules/app-header-message';

export default {
    components: {
        // appHeaderMessage
    },
    data() {
        return {
            agentType:Utils.getCookie('agentType'),
            searchText: '',
            userInfo: {
                avatar: '',
                loginName: ''
            },
            infoMenu: [{
                    key: 'info',
                    title: '个人信息',
                    icon: 'h-icon-user'
                },
                {
                    key: 'logout',
                    title: '退出登录',
                    icon: 'h-icon-outbox'
                }
            ]
        };
    },
    computed: {
        ...mapState(["childUser"]),
        siderCollapsed: {
            get() {
                return this.$store.state.siderCollapsed;
            },
            set(value) {

                this.$store.commit('updateSiderCollapse', value);
            }
        }
    },
    mounted() {
      
        try {
            this.userInfo = JSON.parse(Utils.getCookie("userInfo"));

        } catch (error) {

        }

        this.listenResize();
    },
    methods: {
        listenResize() {
            let windowWidth = window.innerWidth;
            const resizeEvent = window.addEventListener('resize', () => {
                if (windowWidth == window.innerWidth) {
                    return;
                }
                if (this.siderCollapsed && window.innerWidth > 900) {
                    this.siderCollapsed = false;
                } else if (!this.siderCollapsed && window.innerWidth < 900) {
                    this.siderCollapsed = true;
                }
                windowWidth = window.innerWidth;
            });
            this.$once('hook:beforeDestroy', () => {
                window.removeEventListener('resize', resizeEvent);
            });

            window.dispatchEvent(new Event('resize'));
        },
        goGithub() {

        },
        goBook() {

        },
        trigger(data) {
            if (data == 'logout') {
                Utils.clearCookie();
                this.$store.commit('setChildUserInfo',{id:'',loginName:this.userInfo.loginName});
                this.$router.replace({
                    name: 'Login'
                });
            } else {
                this.$router.push({
                    name: 'AccountBasic'
                });
            }
        },
        showSettingModal() {
            this.$emit('openSetting');
        }
    }
};
</script>
