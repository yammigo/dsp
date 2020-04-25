<style lang="less">
.account-vue {}
</style>
<template>
<div class="account-vue frame-page">
    <Row :space="30">
        <Cell :xs='24' :sm='24' :md='7' :lg='7' :xl='7'>
            <AccountInfoShow :account="account"></AccountInfoShow>
        </Cell>
        <Cell :xs='24' :sm='24' :md='17' :lg='17' :xl='17'>
            <div class="h-panel">
                <div class="h-panel-tabs-bar">
                    <Tabs v-model="tab" :datas="tabs"></Tabs>
                </div>
                <AccountInfoCompany v-if="tab == 'comparny'" :account="account"></AccountInfoCompany>
                <AccountInfoAdPut v-if="tab == 'adPut'" :account="account"></AccountInfoAdPut>
            </div>
        </Cell>
    </Row>
</div>
</template>

<script>
import AccountInfoAdPut from './modules/account-info-adPut';
import AccountInfoShow from './modules/account-info-show';
import AccountInfoCompany from './modules/account-info-company';

export default {
    components: {
        AccountInfoAdPut,
        AccountInfoShow,
        AccountInfoCompany
    },
    data() {
        return {
            
            account:{},
            tabs: {
                comparny: '企业认证',
                adPut: '投放认证',
            },
            tab: 'comparny'
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
           R.User.info({}).then(res=>{
                if(res.ok){
                    this.account=res.data
                }
           })
        }
    }
};
</script>
