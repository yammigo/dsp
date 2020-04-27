<style lang="less">
.account-info-show-vue {
    .account-image {
        .h-avatar {
            width: 100px;
            margin: 0 auto;
        }
    }

    .account-name {
        text-align: center;
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: rgba(0, 0, 0, .85);
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .account-desc {
        text-align: center;
        width: 200px;
        margin: 0 auto;
    }

    .account-detail-desc {
        margin-top: 40px;

        p {
            margin-bottom: 10px;

            >span {
                margin-left: 10px;
            }
        }
    }

    .divider {
        border-top: 1px dashed #e8e8e8;
        display: block;
        height: 0px;
        width: 100%;
        margin: 24px 0;
        clear: both;
    }

    .account-detail-tags-title {
        font-weight: 500;
        color: rgba(0, 0, 0, .85);
        margin-bottom: 12px;
    }

    .h-taginput>span {
        margin-bottom: 5px;
    }
}
</style>
<template>
<div class="h-panel account-info-show-vue">
    <div class="h-panel-body">
        <p class="account-image">
            <Avatar :src="avatar" :width="100"></Avatar>
        </p>
        <p class="account-name">{{account.loginName}}</p>
        <p class="account-desc">
            <pre>{{account.desc}}</pre>
        </p>
        <div class="account-detail-desc">
            <p><i class="icon-mail"></i><span>{{account.email}}</span></p>
            <p><i class="icon-briefcase"></i><span>{{account.mobile}}</span></p>
            <p><i class="icon-location-2"></i><span>{{account.address}}</span></p>
        </div>
        <div class="divider"></div>
        <div>
            <p class="account-detail-tags-title"></p>
            <p><span class="h-tag-circle h-tag-red">企</span>{{searchStatus[account.qaCompanyStatus+'']}}</p>
            <p><span class="h-tag-circle h-tag-blue">投</span>{{searchStatus[account.qaAdPutStatus+'']}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        account: Object
    },
    data() {
        return {
            avatar: require('Images/avatar.png'),
            searchStatus: {
                "-1": "待审核",
                "0": '禁用',
                "1": '通过',
                "-2": "审核不通过"
            },

        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {

        }
    },
    computed: {

    }
};
</script>
