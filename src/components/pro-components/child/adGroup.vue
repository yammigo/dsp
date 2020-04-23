<style lang="less">
.panel_moduler {
    .h-tabs-custom {
        >.h-tabs-item {
            margin-right: 24px;
            color: #999;
            padding: 10px 0px;
        }

        >.h-tabs-item-selected {
            color: #333;
            font-weight: 700;
        }

        >.h-tabs-item-selected::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: inline-block;
            height: 2px;
            background-color: #2f88ff;
        }
    }

    .ad-d-flex {
        display: flex;
        align-items: center;
    }

    .ad-d-flex-between {
        justify-content: space-between !important;
    }
}
</style>
<template>
<div>
    <div class="panel_moduler">
        <Form :model="formData" ref="form" :rules="rules" :validOnChange="true">
            <!-- 创建广告组 -->
            <Tabs :datas="param" class-name="h-tabs-custom" v-model="selected" @change="change"></Tabs>
            <div v-if="selected=='module2'" style="margin-top:30px;">
                <Search v-model="searchGroupName" :height="34" :width="518" showSearchButton placeholder="请输入广告组ID或名称">
                    <i class="h-icon-search"></i>搜索
                </Search>
                <div class="campaign-have" style="margin-top:20px;">
                    <div class="campaign-have-list" style="margin-left: 0px; margin-right: 0px;">
                        <div class="campaign-have-header">
                            <strong>列表</strong>
                        </div>
                        <ul>
                            <li v-for="(item,index) in groupList" :key="index" class="ad-d-flex ad-d-flex-between">
                                <div class="ad-d-flex">
                                    <span data-no-translate class="max-name">
                                        <span class="ad-color-text-link"></span>{{item.groupName}}
                                    </span>
                                    <!---->
                                </div>
                                <!-- <span class="landing-type">信息流-应用推广</span> -->
                            </li>
                        </ul>
                    </div>
                    <Pagination v-model="pagination" @change="currentChange" :pagerSize="5" layout="pager" align="right"></Pagination>
                </div>
            </div>
            <div v-if="selected=='module1'" class="campaign" style="margin-top:20px">
                <div class="campaign-create">
                    <div class="campaign-row-title">
                        Hi, 请选择推广目的
                        <!-- <span class="help-frame-link no-selec" style="vertical-align: middle;">了解详情</span> -->
                    </div>
                    <FormItem prop="groupTarget" label="推广目的" :showLabel='false'>
                        <div class="campaign-card-items clearfix">
                            <div v-for="(item, index) in cardTab" :key="index" class="campaign-card" :class="{active:formData.groupTarget==item.key}" @click="activeCard(item.key)">
                                <div class="campaign-card-active" v-show="formData.groupTarget==item.key"></div>
                                <div class="campaign-card-tip">
                                    <div class="campaign-card-title">
                                        <strong>{{item.title}}</strong>
                                    </div>
                                    <div class="campaign-card-info">{{item.infor}}</div>
                                </div>
                                <div class="campaign-card-img">
                                    <img :src="item.iconImg" alt />
                                </div>
                            </div>
                        </div>
                    </FormItem>
                    <!-- <div class="campaign-create-valid">请选择推广目的</div> -->
                    <div class="campaign-row-title group-row-title"></div>

                    <div class="campaign-create-form ad-m-t-md">

                        <div class="row-item">
                            <div class="hint-item"></div>
                            <div class="label-item label-size-middle">
                                <div class="text-item">广告组名称</div>
                                <div class="required-item"></div>
                            </div>
                            <div id class="input-item">
                                <FormItem label="广告组名称" prop="groupName" :showLabel='false'>
                                    <input type="text" v-width="500" v-model="formData.groupName" />
                                </FormItem>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </Form>
    </div>

    <div class="panel_moduler" style="min-width: 1048px;padding-top: 24px; padding-bottom: 24px;text-align:right;">

        <Button color="primary" size="l" @click="submit" v-if="type=='edit'">保存退出</Button>
        <Button color="primary" size="l" @click="submit" v-else>下一步</Button>

    </div>

</div>
</template>

<script>
export default {
    props: ["groupId", "type"],
    data() {
        return {
            groupList: [],
            formData: {
                groupTarget: '',
                groupName: ''
            },
            rules: {
                required: ['groupTarget', 'groupName']

            },
            pagination: {
                page: 1,
                size: 10,
                total: 20
            },
            searchGroupName: '',
            cardTab: [{
                    key: '1',
                    title: '应用推广',
                    infor: '提升应用的下载、安装、激活、付费',
                    iconImg: require('../../../images/proimg/campaign-app.svg')
                },
                {
                    key: '2',
                    title: '销售线索收集',
                    infor: '提升销售线索的获取量',
                    iconImg: '//s1.pstatp.com/bytecom/platform_web/static/image/campaign-store.svg?72d4c5cabf9ba0e31c5534c4f6156a21'
                },
                {
                    key: '3',
                    title: '头条文章推广',
                    infor: '提升头条文章的曝光与点击',
                    iconImg: '//s1.pstatp.com/bytecom/platform_web/static/image/campaign-article.svg?7f77c8a4725daf6d1bfd35c630273289'
                }
            ],

            param: {
                module1: '创建新广告组',
                module2: '选择已有广告组'
            },
            selected: 'module1'
        };
    },
    methods: {
        init() {
            console.log("初始化配置")
        },
        currentChange(value) {
            this.getGroupList();
        },
        activeCard(val) {
            this.formData.groupTarget = val

        },
        change(data) {
            //切换分组
            if (this.selected == "module2") {
                this.getGroupList();
            }
        },
        getGroupList(reload = false) {
            this.$Loading();
            if (reload) {
                this.pagination.page = 1;
            }
            R.adGroup.get({
                page: this.pagination.page,
                limit: this.pagination.size,
                data: {
                    groupName: this.searchGroupName
                }
            }).then(res => {
                this.$Loading.close();
                if (res.ok) {
                    // console.log(res)
                    this.groupList = res.data.list;
                    this.pagination.total = res.data.total;
                }
            })
        },
        submit() {
            let validResult = this.$refs.form.valid();
            if (validResult.result) {
                if (this.type == "edit") {
                    R.adGroup.update({
                        ...this.formData
                    }).then(res => {
                        if (res.ok) {
                            this.$router.go(-1);
                        }
                    })

                }else{
                    this.$Loading("提交中...")
                     R.adGroup.add({
                        ...this.formData
                    }).then(res => {
                        this.$Loading.close();
                        if (res.ok) {
                             this.$router.push({name:'adPlan',query:{groupId:res.data.id,groupName:res.data.groupName}});
                        }
                    })
                }

            }

        },
        initData() {
            if (this.groupId) {
                this.$Loading();
                R.adGroup.get({
                    data: {
                        id: this.groupId
                    },
                    page: 1,
                    limit: 1
                }).then(res => {
                    this.$Loading.close();
                    this.formData = res.data.list[0];
                })
            }
        }
    },
    created() {
        //active 标识哪一步 key:某一项 status:状态
        this.$emit('activeStep', {
            key: '0',
            step: '0'
        });
        //  console.log(this.groupId);
    },
    mounted() {
        this.initData();
    },
    computed: {},
};
</script>
