<style lang="less">
.extension {
    .slot-panel {
        background: #fff;
        position: absolute;
        height: 330px;
        bottom: 10px;
        width: 100%;
        left: 0px;
        top: 100%;
        z-index: 999;
        border: solid 1px #eee;
        padding: 20px;
    }

    .h-tabs-item {
        width: 212px;
        height: 40px;
        line-height: 40px;
        vertical-align: middle;
        box-sizing: content-box;
        border-top: solid 3px #dadfe3;
        border-radius: 3px 3px 0 0;
    }

    .h-tabs-item svg {
        fill: #2b2b2b;
        position: relative;
        top: 2.5px;
    }

    .h-tabs-item:hover {
        color: #2f88ff;
        background: #eee;
        border-top: solid 3px #eee;
    }

    .h-tabs-item-selected {
        border-top: solid 3px #2f88ff;
        border-radius: 3px 3px 0 0;
        color: #2f88ff;
        background: #fff;
    }

    .h-tabs-item-selected:hover {
        border-top: solid 3px #2f88ff;
        border-radius: 3px 3px 0 0;
        color: #2f88ff;
        background: #fff;
    }

    .h-tabs-item-selected svg {
        fill: #2f88ff;
    }

    .h-tabs-item:hover svg {
        fill: #2f88ff;
    }

    .header-search {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>
<template>
<div class="extension">
    <!-- 搜索头部模块 -->
    <div class="h-panel panel" style="padding:5px 10px;position:relateive;">
        <!-- 查询模块 -->
        <Form :model="formSearch" ref="formSearch">
            <div class="header-search">
                <div style="display:inline-block;">
                    <!-- <FormItem :showLabel="false" style="padding-bottom:0px;display:inline-block;width:120px;margin:10px 10px">
                    <Button>
                        <DropdownCustom trigger="click" class-name="h-text-dropdown" @show="soltPanel=true" @hide="soltPanel=false">所有筛选</DropdownCustom>
                    </Button>
            </FormItem>-->
                    <!-- <FormItem :showLabel="false" style="padding-bottom:0px;display:inline-block;width:300px;margin:10px 10px">
                        <div class="h-input-group">
                            <div class="h-input-addon">
                                <Select v-model="formSearch.select1Data" :datas="param0" :no-border="true" :null-option="false"></Select>
                            </div>
                            <input type="text" placeholder="请输入名称或ID搜索" />
                            <Button :no-border="true" class="h-btn h-btn-gray" style="background:#eee;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49" width="12" height="12">
                                    <defs>
                                        <path id="search_svg__a" d="M0 0h48v48H0z"></path>
                                    </defs>
                                    <g fill-rule="evenodd" transform="translate(.904 .262)">
                                        <mask id="search_svg__b" fill="#fff">
                                            <use xlink:href="#search_svg__a"></use>
                                        </mask>
                                        <use opacity=".01" xlink:href="#search_svg__a"></use>
                                        <g fill-rule="nonzero">
                                            <path d="M33.947 36.513A18.92 18.92 0 0 1 22 40.738c-10.493 0-19-8.506-19-19 0-10.493 8.507-19 19-19s19 8.507 19 19a18.92 18.92 0 0 1-4.225 11.947l7.346 7.346a2 2 0 1 1-2.828 2.829l-7.346-7.347zM22 36.738c8.284 0 15-6.715 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.285 6.716 15 15 15zm7.071-23.07a2 2 0 1 1-2.828 2.828A5.974 5.974 0 0 0 22 14.738a5.974 5.974 0 0 0-4.243 1.758 2 2 0 1 1-2.828-2.829A9.973 9.973 0 0 1 22 10.738a9.973 9.973 0 0 1 7.071 2.93z"></path>
                                        </g>
                                    </g>
                                </svg></Button>
                        </div>
            </FormItem>-->
                    <FormItem label="投放终端" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.select4" :datas="param3" placeholder="请选择"></Select>
                    </FormItem>
                    <FormItem v-show="selected=='module1'" label="广告组状态" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.status" :datas="param3" placeholder="请选择"></Select>
                    </FormItem>
                    <FormItem v-show="selected=='module2'" label="计划状态" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.status" :datas="param3" placeholder="请选择"></Select>
                    </FormItem>
                    <FormItem v-show="selected=='module3'" label="创意状态" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.status" :datas="param3" placeholder="请选择"></Select>
                    </FormItem>
                    <FormItem v-show="selected=='module2'" label="投放地域" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.select4" :datas="param3" placeholder="请选择"></Select>
                    </FormItem>
                    <FormItem v-show="selected=='module3'" label="产品" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.select4" :datas="param3" placeholder="请选择"></Select>
                    </FormItem>
                    <FormItem v-show="selected=='module2'" label="出价方式" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.select4" :datas="param3" placeholder="请选择"></Select>
                    </FormItem>
                    <FormItem v-show="selected=='module3'" label="广告位类型" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.select4" :datas="param3" placeholder="请选择"></Select>
                    </FormItem>
                    <FormItem v-show="selected=='module3'" label="跳转类型" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.select4" :datas="param3" placeholder="请选择"></Select>
                    </FormItem>
                </div>
                <div style="display:inline-block;">
                    <FormItem :showLabel="false" style="padding-bottom:0px;display:inline-block;width:280px;margin:10px 10px;float:right;">
                        <div class="h-input-group">
                            <div class="h-input-addon">
                                <Select v-model="formSearch.select1Data" :datas="param0" :no-border="true" :null-option="false"></Select>
                            </div>
                            <input type="text" placeholder="请输入名称或ID搜索" />
                            <Button :no-border="true" class="h-btn h-btn-gray" style="background:#eee;">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49" width="12" height="12">
                                    <defs>
                                        <path id="search_svg__a" d="M0 0h48v48H0z" />
                                    </defs>
                                    <g fill-rule="evenodd" transform="translate(.904 .262)">
                                        <mask id="search_svg__b" fill="#fff">
                                            <use xlink:href="#search_svg__a" />
                                        </mask>
                                        <use opacity=".01" xlink:href="#search_svg__a" />
                                        <g fill-rule="nonzero">
                                            <path d="M33.947 36.513A18.92 18.92 0 0 1 22 40.738c-10.493 0-19-8.506-19-19 0-10.493 8.507-19 19-19s19 8.507 19 19a18.92 18.92 0 0 1-4.225 11.947l7.346 7.346a2 2 0 1 1-2.828 2.829l-7.346-7.347zM22 36.738c8.284 0 15-6.715 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.285 6.716 15 15 15zm7.071-23.07a2 2 0 1 1-2.828 2.828A5.974 5.974 0 0 0 22 14.738a5.974 5.974 0 0 0-4.243 1.758 2 2 0 1 1-2.828-2.829A9.973 9.973 0 0 1 22 10.738a9.973 9.973 0 0 1 7.071 2.93z" />
                                        </g>
                                    </g>
                                </svg>
                            </Button>
                        </div>
                    </FormItem>
                    <FormItem :showLabel="false" style="padding-bottom:0px;display:inline-block;width:280px;margin:10px 10px;float:right;">
                        <DateRangePicker v-model="formSearch.date" :option="dateParam"></DateRangePicker>
                    </FormItem>
                </div>
            </div>
        </Form>
        <div class="slot-panel" v-show="soltPanel">
            <div class="dark4-color">组</div>
            <div class="dark4-color">计划</div>
            <div class="dark4-color">创意</div>
        </div>
    </div>
    <!-- 搜索头部模块 end-->
    <div style="padding:20px;">
        <div class="my-body h-h-panel" style="background:#fff;margin-top:30px;">
            <div style="background:#dadfe3">
                <Tabs :datas="param" class-name="h-tabs-custo" v-model="selected" @change="change">
                    <template slot-scope="{tab}" slot="item">
                        <svg style="margin-left:20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" width="18" height="16">
                            <defs>
                                <path id="campaign_svg__a" d="M0 0h20v20H0z" />
                            </defs>
                            <g fill-rule="evenodd">
                                <mask id="campaign_svg__b" fill="#fff">
                                    <use xlink:href="#campaign_svg__a" />
                                </mask>
                                <use fill="#FFF" fill-opacity="0.01" xlink:href="#campaign_svg__a" />
                                <path fill-rule="nonzero" :d="tab.icon" />
                            </g>
                        </svg>
                        <span>{{tab.title}}</span>
                    </template>
                </Tabs>
            </div>
            <div style="padding:20px;" v-if="selected=='module1'">
                <router-link :to="{path:'/adGroup'}">
                    <Button color="primary">
                        <i class="h-icon-plus" style="margin-right:10px;"></i>新建组
                    </Button>
                </router-link>
            </div>
            <div style="padding:20px;" v-if="selected=='module2'">
                <router-link :to="{path:'/adGroup'}">
                    <Button color="primary">
                        <i class="h-icon-plus" style="margin-right:10px;"></i>新建计划
                    </Button>
                </router-link>
            </div>
            <div style="padding:20px;" v-if="selected=='module3'">
                <router-link :to="{path:'/adGroup'}">
                    <Button color="primary">
                        <i class="h-icon-plus" style="margin-right:10px;"></i>新建创意
                    </Button>
                </router-link>
            </div>

        </div>
        <!-- 组列表 -->
        <Table v-show="selected=='module1'" :datas="datas" :border="border" :checkbox="checkbox" :stripe="stripe" :loading="loading">
            <TableItem :width="200" title="广告组名称" prop="groupName"></TableItem>
            <TableItem :width="200" title="推广目的" prop="groupTarget"></TableItem>
            <TableItem :width="100" align="center" title="状态">
                <template slot-scope="{data}">
                    <span class="h-tag-circle" :class="[styleColor[data.status]]"></span>{{dictStatus[data.status]}}
                </template>
            </TableItem>
            <TableItem :width="200" title="创建时间" prop="createTime"></TableItem>
            <TableItem :width="200" title="操作" align="center">
                <template slot-scope="{data}">
                    <span v-if="data.status!==-1&&data.status!==-2">
                        <Poptip :content="'确认'+(data.status?'禁用':'启用')" @confirm="updataStatus('adGroup',{status:editStatus[data.status],id:data.id})"><a class="text-hover">{{data.status?"禁用":"启用"}}</a></Poptip>
                    </span>
                    <span><a class="text-hover" @click="editData('/adGroup',{groupId:data.id,type:'edit'})">编辑</a></span>
                </template>
            </TableItem>
            <div slot="empty">暂无广告组数据</div>
        </Table>
        <!-- 计划列表 -->
        <Table v-show="selected=='module2'" :datas="datas" :border="border" :checkbox="checkbox" :stripe="stripe" :loading="loading">
            <TableItem :width="200" title="所属广告组" prop="groupName"></TableItem>
            <TableItem :width="200" title="计划名称" prop="planName"></TableItem>
            <TableItem :width="100" align="center" title="状态">
                <template slot-scope="{data}">
                    <span class="h-tag-circle" :class="[styleColor[data.status]]"></span>{{dictStatus[data.status]}}
                </template>
            </TableItem>
            <TableItem :width="100" title="投放方式">
                <template slot-scope="{data}">
                    {{putType[data.putType]}}
                </template>
            </TableItem>
            <TableItem :width="100" title="日预算" prop="putAmountDay"></TableItem>
            <TableItem :width="100" title="出价金额" prop="bidAmount"></TableItem>
            <TableItem :width="100" title="消费金额" prop="income"></TableItem>
            <TableItem :width="100" title="展现数" prop="showCount "></TableItem>
            <TableItem :width="100" title="点击数" prop="clickCount"></TableItem>
            <TableItem :width="100" title="开始下载" prop="downStartCount"></TableItem>
            <TableItem :width="100" title="完成下载" prop="downEndCount "></TableItem>
            <TableItem :width="100" title="开始安装" prop="installStartCount "></TableItem>
            <TableItem :width="100" title="安装完成" prop="installEndCount"></TableItem>
            <TableItem :width="100" title="开始播放" prop="playStartCount"></TableItem>
            <TableItem :width="100" title="完成播放" prop="playEndCount"></TableItem>
            <TableItem :width="100" title="完成播放" prop="playEndCount"></TableItem>
            <TableItem :width="100" title="操作" align="center" fixed="right">
                <template slot-scope="{data}">
                    <span v-if="data.status!==-1&&data.status!==-2">
                        <Poptip :content="'确认'+(data.status?'禁用':'启用')" @confirm="updataStatus('adPlan',{status:editStatus[data.status],id:data.id})"><a class="text-hover">{{data.status?"禁用":"启用"}}</a></Poptip>
                    </span>
                    <span><a class="text-hover" @click="editData('/adPlan',{planId:data.id,type:'edit'})">编辑</a></span>
                </template>
            </TableItem>
            <div slot="empty">暂无计划数据</div>
        </Table>
        <!-- 创意列表 -->
        <Table v-show="selected=='module3'" :datas="datas" :border="border" :checkbox="checkbox" :stripe="stripe" :loading="loading">
            <TableItem title="广告组名称" prop="groupName"></TableItem>
            <TableItem title="推广目的" prop="groupTarget"></TableItem>
            <TableItem align="center" title="状态" prop="status"></TableItem>
            <TableItem title="创建时间" prop="createTime"></TableItem>
            <div slot="empty">暂无创意数据</div>
        </Table>
        <p></p>
        <Pagination align="right" v-model="pagination" @change="changePage" />
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            editStatus: {
                "0": "1",
                "1": "0"
            },
            dictStatus: {
                "-1": "待审核",
                "0": "禁用",
                "1": "启用",
                "-2": "不通过"
            },
            styleColor: {
                "-1": "h-tag-bg-yellow",
                "-2": "h-tag-bg-red",
                "0": "h-tag-bg-red",
                "1": "h-tag-bg-blue",
            },
            putType: {
                1: '匀速',
                2: '快速'
            },
            bidType: {
                1: 'cpc',
                2: 'cpm'
            },
            show: false,
            border: false,
            stripe: false,
            checkbox: false,
            serial: false,
            loading: false,
            formSearch: {},
            datas: [],
            //分页器
            pagination: {
                page: 1,
                size: 10,
                total: 0
            },
            //选项卡
            param: [{
                    key: 'module1',
                    title: '广告组',

                    count: 12,
                    icon: 'M9.942 2a2 2 0 0 1 1.433.605L13.708 5H17a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.942zm2.816 7.096l-3.849 3.97-1.667-1.72a.712.712 0 0 0-1.029 0 .767.767 0 0 0 0 1.06l2.182 2.25a.712.712 0 0 0 1.028 0l4.364-4.5a.767.767 0 0 0 0-1.06.712.712 0 0 0-1.029 0zM9.942 4H3l-.001 1H10.916l-.974-1z'
                },
                {
                    key: 'module2',
                    title: '计划',
                    count: 14,
                    icon: 'M13.4 1.432a1 1 0 0 1 1 1V3H16a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h1.487v-.568a1 1 0 1 1 2 0V3H12.4v-.568a1 1 0 0 1 1-1zM5.488 5H4a1 1 0 0 0-1 1v8.509h14V6a1 1 0 0 0-1-1h-1.6v.03a1 1 0 0 1-2 0V5H7.487v.03a1 1 0 1 1-2 0V5zm1.973 5.845v2h-2v-2h2zm3.478 0v2h-2v-2h2zm3.463 0v2h-2v-2h2zM7.46 7.538v2h-2v-2h2zm3.478 0v2h-2v-2h2zm3.463 0v2h-2v-2h2z'
                },
                {
                    key: 'module3',
                    title: '创意',
                    count: 2,
                    icon: 'M14 1.509a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-11a3 3 0 0 1 3-3h8zm1 9.882H5v3.62h10v-3.62zm-4.462.881a.941.941 0 0 1 0 1.882H9.421a.941.941 0 1 1 0-1.882h1.117zM14 3.51H6a1 1 0 0 0-1 1v5h10v-5a1 1 0 0 0-1-1z'
                }
            ],
            selected: 'module1',
            //
            soltPanel: false,
            formSearch: {},
            page: {},
            param0: {
                0: '广告组',
                1: '计划',
                2: '创意'
            },
            param3: {
                0: '启用',
                1: '停用',
                2: '已达上限'
            },
            param1: ['广告组', '计划', '创意'],
            dateParam: {
                shortcuts: [{
                    title: '近三天',
                    value() {
                        return {
                            start: manba().add(-3, manba.DAY),
                            end: manba()
                        };
                    }
                }]
            }
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.getData();
        },
        //编辑
        editData(path, query) {
            this.$router.push({
                path: path,
                query: {
                    ...query
                }
            })
        },
        //切换分页
        changePage() {
            this.getData();
        },
        //切换数据
        change(data) {
            //切换后重置分页信息
            console.log(this.selected)
            this.$Message.info(`切换至${data.title}`, 1000);
            this.getData(true);

        },
        updataStatus(api, data) {

            R[api].updateStatus({
                ...data
            }).then(res => {
                if (res.ok) {
                    this.$Message.success(res.msg);
                    this.getData();
                }
            })
        },
        getData(reload = false) {
            if (reload) {
                this.pagination.page = 1;
            }
            this.loading = true;
            switch (this.selected) {
                case "module1":
                    R.adGroup.get({
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
                    break;
                case "module2":
                    R.adPlan.get({
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
                    break;
                case "module3":
                    R.adIdea.get({
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
                    break;

            }

        }

    },
    computed: {}
};
</script>
