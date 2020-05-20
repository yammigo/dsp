<style lang="less">
.table-basic-vue {}
</style>
<template>
<div class="table-basic-vue frame-page h-panel">
    <div class="h-panel-bar"><span class="h-panel-title"><Button color="primary" :circle="true" icon="h-icon-plus" @click="opened=true">创建子用户</Button></span></div>
    <div class="h-panel-body">
        <Table :loading="loading" :datas="datas" :height="450">
            <TableItem :width="120" prop="loginName" title="账号"></TableItem>
            <TableItem :width="120" prop="qaCompanyName" title="企业认证名称"></TableItem>
            <TableItem :width="120" title="账户余额" align="right">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.amount|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="80" title="状态" align="left">
                <template slot-scope="{data}">
                    <div>
                        <span class="h-tag-circle" :class="[styleColor[data.status]]"></span>{{dictStatus[data.status]}}
                    </div>
                </template>
            </TableItem>
            <TableItem :width="80" title="企业认证" align="left">
                <template slot-scope="{data}">
                    <div>
                        <span class="h-tag-circle" :class="[styleColor[data.qaCompanyStatus]]"></span>{{dictStatus[data.qaCompanyStatus]}}
                    </div>
                </template>
            </TableItem>
            <TableItem :width="80" title="投放认证" align="left">
                <template slot-scope="{data}">
                    <div>
                        <span class="h-tag-circle" :class="[styleColor[data.qaAdPutStatus]]"></span>{{dictStatus[data.qaAdPutStatus]}}
                    </div>
                </template>
            </TableItem>
            <TableItem :width="120" prop="mobile" title="手机号"></TableItem>
            <TableItem :width="180" prop="userName" title="联系人(姓名/公司)"></TableItem>
            <TableItem :width="120" prop="name" title="邮箱"></TableItem>
            <!-- <TableItem :width="120" prop="address" title="地址"></TableItem> -->
            <TableItem :width="120" prop="createTime" title="创建时间"></TableItem>
            <!-- <TableItem :width="120" title="操作" fixed="right">
              <template slot-scope="{data}"><button class="h-btn h-btn-s h-btn-blue"><i class="h-icon-edit"></i>修改</button></template></TableItem>
            </TableItem> -->
            <div slot="empty">暂时无数据</div>
        </Table>
        <p></p>
        <Pagination v-if="pagination.total>0" align="right" v-model="pagination" @change="changePage" />
    </div>
    <!-- 创建用户 -->
    <Modal v-model="opened" :hasCloseIcon="true" :closeOnMask="false">
        <div slot="header">创建子用户</div>
        <div style="width:500px;padding:20px;">
            <Form :model="formData" ref="form" :rules="rules" :labelWidth="100">
                <FormItem prop="loginName" label="用户名">
                    <input type="text" v-model="formData.loginName" autocomplete="off" />
                </FormItem>
                <FormItem prop="passWord" label="密码">
                    <input type="passWord" v-model="formData.passWord" autocomplete="off" />
                </FormItem>
                <FormItem prop="userName" label="公司/联系人">
                    <input type="text" v-model="formData.userName" autocomplete="off" />
                </FormItem>
                 <FormItem prop="email" label="邮箱">
                    <input type="text" v-model="formData.email" autocomplete="off" />
                </FormItem>
                <FormItem prop="mobile" label="手机">
                    <input type="text" v-model="formData.mobile" autocomplete="off" />
                </FormItem>
            </Form>
        </div>
        <div slot="footer">
            <Button color="primary" @click="submit" :loading="btnLoading">确认</Button>
            <Button @click="opened=false">关闭</Button>
        </div>
    </Modal>
</div>
</template>

<script>
import MD5 from "js-md5"
import throttle from 'lodash.throttle'
export default {
    name: "childUsers",
    data() {
        return {
            formSearch:{},
            dictStatus: {
                "-1": "待审核",
                "0": "禁用",
                "1": "启用",
                "-2": "未通过"
            },
            styleColor: {
                "-1": "h-tag-bg-yellow",
                "-2": "h-tag-bg-red",
                "0": "h-tag-bg-red",
                "1": "h-tag-bg-blue",
            },
            btnLoading: false,
            formData: {
                loginName: null,
                passWord: null,
                userName: null,
                mobile: null
            },
            opened: false,
            pagination: {
                page: 1,
                size: 10,
                total: 0
            },
            datas: [],
            loading: false,
            rules: {
                required: ['loginName', 'passWord', 'userName', 'email','mobile']
            }
        };
    },
    mounted() {
        this.init();
        window.addEventListener("resize", this.resetTableHeight);
        this.$once('hook:beforeDestroy', () => {
            window.removeEventListener("resize", this.resetTableHeight);
        })
    },
    methods: {
        resetTableHeight() {
            // let resetHeight=this.resetHeight;
            // throttle(resetHeight,300);
            // Utils.throttle(() => {
            //     console.log('asdads')
            // })
            // console.log('adasd')
            // throttle(()=>{
            //     console.log('adadssasd')
            // })
        },
        resetHeight() {
            console.log('asdasd');
        },
        submit() {
            let validResult = this.$refs.form.valid();
            if (validResult.result) {
                this.btnLoading = true;
                let data = {
                    ...this.formData
                }
                data.passWord = MD5(data.passWord);
              
                R.Common.addChildUser(data).then(res => {
                    this.btnLoading = false;
                    console.log(res);
                    if (res.ok) {
                        this.getData(true);
                        this.$Message({
                            type: "success",
                            text: res.msg
                        });
                        this.formData = {
                            loginName: null,
                            passWord: null,
                            userName: null,
                            mobile: null
                        };
                        this.opened = false;
                    }
                })
            }

        },
        init() {
            this.getData(true);
        },
        changePage() {
            this.getData(true);
        },
        getData(reload = false) {
            if (reload) {
                this.pagination.page = 1;
            }
            this.loading = true;
            R.Common.getChildUsers({
                page: this.pagination.page,
                limit: this.pagination.size,
                data: {
                    ...this.formSearch
                }
            }).then(res => {
                this.loading = false;
                if (res.ok) {
                    this.datas = res.data.list;
                    this.pagination.total = res.data.total;
                }
            })

        }
    },
    computed: {

    }
};
</script>
