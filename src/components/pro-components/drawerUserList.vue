<style lang="less">
.childUsers {
    overflow: hidden;
    .search_box {
        background: #eee;
        position: absolute;
        height: 40px;
        left: 40px;
        right: 0px;
        top: 0px;
        box-shadow: 0px 1px 10px #eee;
        padding: 10px;
        overflow: hidden;
        white-space: nowrap;

        .user-out {
            border-left: 1px solid #dcdcdc;
            position: absolute;
            height: 100%;
            width: 60px;
            right: 0px;
            top: 0px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            background: #eee;

            &:hover {
                color: red;
            }
        }
    }

    .closeBox {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        width: 40px;
        // background:#eee;
        // box-sizing: border-box;
        border-right: 1px #eee solid;
        z-index: 3;
        cursor: pointer;

        .closeIcon {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #2D3E55;
            color: #fff;
            // box-shadow:1px 2px 5px #eee;

        }
    }

    .scroll_box {
        overflow: scroll;
        position: absolute;
        top: 50px;
        bottom: 0px;
        left: 60px;
        right: 0px;

        // background: #f9f9f9;
        .userItem {
            width: 100%;
            height: 30px;
            margin-bottom: 10px;
            transition: all ease 0.5s;
            line-height: 30px;
            // text-indent: 20px;
            padding-left: 10px;
            border-radius: 2px;
            cursor: pointer;

            i {
                margin-right: 10px;
            }

            &:hover {
                background: #eee;
                padding-left:20px;
                font-weight: bold;

            }
        }
    }
}
</style>
<template>
<div class="childUsers clearfix" style="width:360px;height:100%">
    <div class="search_box">
        <span><b>当前账户</b>：{{childUser.loginName||userInfo.loginName}}</span>
        <!-- <Search @search="search" v-model="searchText2" position="front" trigger-type="input" style="width:100%"></Search> -->
        <!-- <div class="user-out"><i class="icon-power" style="margin-right:5px;font-size:13px;top: -2px;
    position: relative;"></i><span>退出</span></div> -->
    </div>
    <div class="scroll_box">
        <Loading text="加载中" :loading="loading"></Loading>
        <div class="userItem">
            <Poptip :content='"确定切换至主账号？"' @confirm="setChild({id:'',loginName:''})"><span class="h-tag-circle h-tag-green">主</span>{{userInfo.loginName}}</Poptip>
        </div>
        <div v-for="(item,index) in datas" :key="index" class="userItem">
            <Poptip :content='"确定切换到(" +item.loginName+ ")账号吗？"' @confirm="setChild(item)"><span class="h-tag-circle h-tag-blue">子</span>{{item.loginName}}</Poptip>
        </div>
    </div>
    <div class="closeBox">
        <div class="closeIcon" @click="$emit('close','')"><i class="h-icon-close"></i></div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    data() {
        return {
             userInfo: {
                avatar: '',
                loginName: ''
            },
            searchText2: '',
            loading:false,
            formSearch:{},
            datas:[],
        }
    },
    mounted() {
        this.init();
         try {
            this.userInfo = JSON.parse(Utils.getCookie("userInfo"));
            console.log(this.userInfo,"用户信息")
        } catch (error) {

        }

    },
    methods: {
        setChild(data) {
            //设置子账户id;
             this.$store.commit('setChildUserInfo',{...data});
             this.$Message({
                 type:"success",
                 text:"切换成功!"
             })

        },
        init() {
            this.loading = true;
            R.Common.getChildUsers({
                page: 1,
                limit: 10000,
                data: {
                    ...this.formSearch
                }
            }).then(res => {
                this.loading = false;
                if (res.ok) {
                    this.datas = res.data.list;
                }
            })
        },
        search() {

        }
    },
     computed: {
        ...mapState(['childUser'])
    },
}
</script>
