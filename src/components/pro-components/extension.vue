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

    .promotion-header {
        font-size: 14px;
        height: 48px;
        padding: 0 24px;
        background: #fff;

    }

    .ad-d-flex-between {
        justify-content: space-between !important;
    }

    .ad-d-flex-start {
        justify-content: flex-start !important;
    }

    .ad-m-r-lg {
        margin-right: 32px;
    }

    .promotion-header-title {
        font-family: PingFangSC-Medium;
        font-size: 12px;
        font-weight: 500;
        color: #666;
        height: 16px;
        margin-right: 8px;
    }

    .promotion-header-money {
        font-size: 14px;
        font-weight: 600;
        color: #333;
        line-height: 22px;
        height: 22px;
    }

    .ad-d-flex,
    .ad-btn {
        display: flex;
        align-items: center;
    }

    .ad-d-flex,
    .ad-btn {
        display: flex;
        align-items: center;
    }
}
</style>
<template>
<div class="extension">
    <div class="h-panel panel" style="position:relateive;border:1px solid #eee">
        <div class="promotion-header ad-d-flex ad-d-flex-between">
            <div class="ad-d-flex ad-d-flex-between">
                <div class="ad-d-flex ad-d-flex-start" style="">
                    <div class="ad-d-flex ad-m-r-lg"><span class="promotion-header-title">今日消耗</span> <span class="promotion-header-money bui-num">{{userAmountData.useAmountDay|NumFormat}}</span></div>
                    <div class="ad-spliter" style="width:10px"></div>
                    <div class="ad-d-flex"><span class="promotion-header-title">账户日预算</span> <span class="promotion-header-money ad-m-r-xs bui-num">
                            {{userAmountData.putAmountDay|NumFormat}}
                        </span>

                    </div>
                    <div class="ad-spliter" style="width:1px;height:20px;background:#eee;margin-left:10px;margin-right:10px;"></div>
                    <div class="ad-d-flex">
                        <div class="balance-popover byted-popover-wrapper">
                        </div> <span class="promotion-header-title">账户余额</span> <span class="promotion-header-money bui-num"> {{userAmountData.amount|NumFormat}}</span>
                    </div>
                    <!---->
                    <div class="ad-spliter" style="width:10px"></div>
                    <div class="progress-wrapper ad-d-flex ad-d-flex-start">
                        <div class="promotion-header-title">日消耗进度</div>
                        <div class="byted-popover-wrapper" style="width:120px;margin-right:10px;">
                            <Progress :percent="(userAmountData.useAmountDay/userAmountData.putAmountDay)*100" :stroke-width="5" />
                        </div>
                        <div class="promotion-header-money bui-num ad-m-l" style="font-size:14px;">{{(userAmountData.useAmountDay/userAmountData.putAmountDay)*100|NumFormat}}%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
                    <FormItem label="状态" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.status" :datas="searchStatus" placeholder="请选择" @change="chnageSearch"></Select>
                    </FormItem>
                    <FormItem label="出价方式" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.bidType" :datas="bidType" placeholder="请选择" @change="chnageSearch"></Select>
                    </FormItem>
                    <FormItem label="投放方式" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.putType" :datas="putType" placeholder="请选择" @change="chnageSearch"></Select>
                    </FormItem>
                    <FormItem label="跳转类型" style="padding-bottom:0px;display:inline-block;width:250px;margin:10px 10px">
                        <Select v-model="formSearch.clickType" :datas="clickType" placeholder="请选择" @change="chnageSearch"></Select>
                    </FormItem>
                </div>
                <div style="display:inline-block;">
                    <FormItem :showLabel="false" style="padding-bottom:0px;display:inline-block;width:280px;margin:10px 10px;float:right;">
                        <div class="h-input-group">
                            <div class="h-input-addon">
                                <Select v-model="selected" :datas="param" :no-border="true" :null-option="false" @change="searchName"></Select>
                            </div>
                            <input type="text" v-model="searchText" placeholder="请输入名称或ID搜索" />
                            <Button :no-border="true" class="h-btn h-btn-gray" style="background:#eee;" @click="searchName">
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
                        <!-- <DateRangePicker v-model="PickerData" :option="shortcuts" @change="changeDate"></DateRangePicker> -->
                        <DateFullRangePicker v-model="PickerData" :layout="layout" clearable @change="changeDate"></DateFullRangePicker>
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
            <div style="padding:20px;" v-if="selected=='groupName'">
                <router-link :to="{path:'/adGroup'}">
                    <Button color="primary">
                        <i class="h-icon-plus" style="margin-right:10px;"></i>新建组
                    </Button>
                </router-link>
            </div>
            <div style="padding:20px;" v-if="selected=='planName'">
                <router-link :to="{path:'/adGroup'}">
                    <Button color="primary">
                        <i class="h-icon-plus" style="margin-right:10px;"></i>新建计划
                    </Button>
                </router-link>
            </div>
            <div style="padding:20px;" v-if="selected=='ideaName'">
                <router-link :to="{path:'/adGroup'}">
                    <Button color="primary">
                        <i class="h-icon-plus" style="margin-right:10px;"></i>新建创意
                    </Button>
                </router-link>
            </div>

        </div>
        <!-- 组列表 -->
        <Table v-if="selected=='groupName'" :datas="datas" :border="border" :stripe="stripe" :loading="loading">
            <TableItem :width="40" title="ID" prop="id">
            </TableItem>
            <TableItem :width="200" title="广告组名称">
                <template slot-scope="{data}">
                    <a v-tooltip placement="right" content="查看该组下的所有计划" @click="toSearchData('groupId',data.id)">{{data.groupName}}</a>
                </template>
            </TableItem>
            <TableItem :width="200" title="推广目的">
                <template slot-scope="{data}">
                    <span></span>{{Extension[data.groupTarget]}}
                </template>
            </TableItem>
            <TableItem :width="100" align="center" title="状态">
                <template slot-scope="{data}">
                    <span class="h-tag-circle" :class="[styleColor[data.status]]"></span>{{dictStatus[data.status]}}
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="日预算">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.putAmountDay|NumFormat}}</span>
                </template>

            </TableItem>
            <TableItem :width="100" align="right" title="出价金额">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.bidAmount|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="消费金额">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.income|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="ecpm">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.income/data.showCount*1000|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="cpc">
                <template slot-scope="{data}">
                    <span class="bui-num">{{(data.income/data.clickCount)|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="展现数" prop="showCount"></TableItem>
            <TableItem :width="100" align="right" title="点击数" prop="clickCount"></TableItem>
            <TableItem :width="100" align="right" title="点击率">
                <template slot-scope="{data}">
                    <span class="bui-num" style="font-size:10px;">{{(data.clickCount/data.showCount*100)|NumFormat}}%</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="开始下载" prop="downStartCount"></TableItem>
            <TableItem :width="100" align="right" title="完成下载" prop="downEndCount"></TableItem>
            <TableItem :width="100" align="right" title="开始安装" prop="installStartCount"></TableItem>
            <TableItem :width="100" align="right" title="安装完成" prop="installEndCount"></TableItem>
            <TableItem :width="100" align="right" title="开始播放" prop="playStartCount"></TableItem>
            <TableItem :width="100" align="right" title="完成播放" prop="playEndCount"></TableItem>
            <TableItem :width="100" align="right" title="完成播放" prop="playEndCount"></TableItem>
            <TableItem :width="200" title="创建时间" prop="createTime"></TableItem>
            <TableItem :width="200" title="操作" align="center" fixed="right">
                <template slot-scope="{data}">
                    <span v-if="data.status!==-1&&data.status!==-2">
                        <Poptip :content="'确认'+(data.status?'禁用':'启用')" @confirm="updataStatus('adGroup',{status:editStatus[data.status],id:data.id})"><a class="text-hover">{{data.status?"禁用":"启用"}}</a></Poptip>
                    </span>
                    <span><a class="text-hover" @click="editData('/adGroup',{groupId:data.id,type:'edit'})">编辑</a></span>
                    <span><a class="text-hover" @click="addRouter('adPlan',{groupId:data.id,groupName:data.groupName})">添加计划</a></span>
                    <!-- http://localhost:9012/#/adPlan?groupId=67&groupName=123123 -->
                </template>
            </TableItem>
            <div slot="empty">暂无广告组数据</div>
        </Table>
        <!-- 计划列表 -->
        <Table v-if="selected=='planName'" :datas="datas" :border="border" :stripe="stripe" :loading="loading">
            <TableItem :width="40" title="ID" prop="id">
            </TableItem>
            <TableItem :width="200" title="计划名称">
                <template slot-scope="{data}">
                    <a v-tooltip placement="right" content="查看该计划的所有创意" @click="toSearchData('planId',data.id)">{{data.planName}}</a>
                </template>
            </TableItem>
            <TableItem :width="200" title="所属广告组" prop="groupName"></TableItem>
            <TableItem :width="100" align="left" title="状态">
                <template slot-scope="{data}">
                    <span class="h-tag-circle" :class="[styleColor[data.status]]"></span>{{dictStatus[data.status]}}
                </template>
            </TableItem>
            <TableItem :width="100" align="center" title="投放方式">
                <template slot-scope="{data}">
                    {{putType[data.putType]}}
                </template>
            </TableItem>
            <TableItem :width="100" align="center" title="出价方式">
                <template slot-scope="{data}">
                    <span class="bui-num">{{bidType[data.bidType]}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="日预算">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.putAmountDay|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="出价金额">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.bidAmount|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="消费金额">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.income|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="ecpm">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.income/data.showCount*1000|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="cpc">
                <template slot-scope="{data}">
                    <span class="bui-num">{{(data.income/data.clickCount)|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="展现数" prop="showCount"></TableItem>
            <TableItem :width="100" align="right" title="点击数" prop="clickCount"></TableItem>
            <TableItem :width="100" align="right" title="点击率">
                <template slot-scope="{data}">
                    <span class="bui-num" style="font-size:10px;">{{(data.clickCount/data.showCount*100)|NumFormat}}%</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="开始下载" prop="downStartCount"></TableItem>
            <TableItem :width="100" align="right" title="完成下载" prop="downEndCount"></TableItem>
            <TableItem :width="100" align="right" title="开始安装" prop="installStartCount"></TableItem>
            <TableItem :width="100" align="right" title="安装完成" prop="installEndCount"></TableItem>
            <TableItem :width="100" align="right" title="开始播放" prop="playStartCount"></TableItem>
            <TableItem :width="100" align="right" title="完成播放" prop="playEndCount"></TableItem>
            <TableItem :width="100" align="right" title="完成播放" prop="playEndCount"></TableItem>
            <TableItem :width="200" title="操作" align="center" fixed="right">
                <template slot-scope="{data}">
                    <span v-if="data.status!==-1&&data.status!==-2">
                        <Poptip :content="'确认'+(data.status?'禁用':'启用')" @confirm="updataStatus('adPlan',{status:editStatus[data.status],id:data.id})"><a class="text-hover">{{data.status?"禁用":"启用"}}</a></Poptip>
                    </span>
                    <span><a class="text-hover" @click="editData('/adPlan',{planId:data.id,type:'edit'})">编辑</a></span>
                    <span><a class="text-hover" @click="addRouter('adOriginality',{planId:data.id,planName:data.planName})">添加创意</a></span>
                </template>
            </TableItem>
            <div slot="empty">暂无计划数据</div>
        </Table>
        <!-- 创意列表 -->
        <Table v-if="selected=='ideaName'" :datas="datas" :border="border" :stripe="stripe" :loading="loading">
            <TableItem :width="40" title="ID" prop="id">
            </TableItem>
            <TableItem :width="200" title="所属组" prop="groupName"></TableItem>
            <TableItem :width="200" title="所属计划" prop="planName"></TableItem>
            <TableItem :width="200" title="创意名称" prop="ideaName"></TableItem>
            <TableItem :width="100" align="left" title="状态">
                <template slot-scope="{data}">
                    <span class="h-tag-circle" :class="[styleColor[data.status]]"></span>{{dictStatus[data.status]}}
                </template>
            </TableItem>
            <TableItem :width="100" title="产品名称" prop="productName"></TableItem>
            <TableItem :width="100" title="跳转类型">
                <template slot-scope="{data}">
                    {{clickType[data.clickType]}}
                </template>
            </TableItem>
            <TableItem :width="200" title="跳转链接" prop="clickUrl"></TableItem>
            <TableItem :width="100" align="right" title="日预算">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.putAmountDay|NumFormat}}</span>
                </template>

            </TableItem>
            <TableItem :width="100" align="right" title="出价金额">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.bidAmount|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="消费金额">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.income|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="ecpm">
                <template slot-scope="{data}">
                    <span class="bui-num">{{data.income/data.showCount*1000|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="cpc">
                <template slot-scope="{data}">
                    <span class="bui-num">{{(data.income/data.clickCount)|NumFormat}}</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="展现数" prop="showCount"></TableItem>
            <TableItem :width="100" align="right" title="点击数" prop="clickCount"></TableItem>
            <TableItem :width="100" align="right" title="点击率">
                <template slot-scope="{data}">
                    <span class="bui-num" style="font-size:10px;">{{(data.clickCount/data.showCount*100)|NumFormat}}%</span>
                </template>
            </TableItem>
            <TableItem :width="100" align="right" title="开始下载" prop="downStartCount"></TableItem>
            <TableItem :width="100" align="right" title="完成下载" prop="downEndCount"></TableItem>
            <TableItem :width="100" align="right" title="开始安装" prop="installStartCount"></TableItem>
            <TableItem :width="100" align="right" title="安装完成" prop="installEndCount"></TableItem>
            <TableItem :width="100" align="right" title="开始播放" prop="playStartCount"></TableItem>
            <TableItem :width="100" align="right" title="完成播放" prop="playEndCount"></TableItem>
            <TableItem :width="100" align="right" title="完成播放" prop="playEndCount"></TableItem>
            <TableItem :width="150" title="创建时间" prop="createTime"></TableItem>
            <TableItem :width="100" title="操作" align="center" fixed="right">
                <template slot-scope="{data}">
                    <span v-if="data.status!==-1&&data.status!==-2">
                        <Poptip :content="'确认'+(data.status?'禁用':'启用')" @confirm="updataStatus('adIdea',{status:editStatus[data.status],id:data.id})"><a class="text-hover">{{data.status?"禁用":"启用"}}</a></Poptip>
                    </span>
                    <span><a class="text-hover" @click="editData('/adOriginality',{ideaid:data.id,type:'edit'})">编辑</a></span>
                </template>
            </TableItem>
            <div slot="empty">暂无创意数据</div>
        </Table>
        <p></p>
        <Pagination align="right" v-model="pagination" @change="changePage" />
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapMutations
} from 'vuex'
export default {
    data() {
        return {
            userAmountData:{},
            searchFiled: "", //当前查询的字段
            searchText: "", //当前搜索框内容
            PickerData: {
                start: Manba().format(),
                end: Manba().add(+1).format(),
                type: 'customize'
            },
            shortcuts: {
                shortcuts: [{
                        title: '今天',
                        value() {
                            return {
                                start: Manba(),
                                end: Manba()
                            };
                        }
                    },
                    {
                        title: '昨天',
                        value() {
                            return {
                                start: Manba().add(-1, Manba().DAY),
                                end: Manba()
                            };
                        }
                    }

                ]
            },
            startWeek: 1,
            layout: ['date', 'customize'],
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
                1: '均衡投放',
                2: '优先跑量'
            },
            bidType: {
                1: 'cpc',
                2: 'cpm'
            },
            clickType: {
                1: "链接",
                2: "下载"
            },
            show: false,
            border: false,
            stripe: false,
            checkbox: false,
            serial: false,
            loading: false,
            formSearch: {
                queryStartTime: Manba().format(),
                queryEndTime: Manba().format()
            },
            datas: [],
            //分页器
            pagination: {
                page: 1,
                size: 10,
                total: 0
            },

            //选项卡
            param: [{
                    key: 'groupName',
                    title: '广告组',
                    count: 12,
                    icon: 'M9.942 2a2 2 0 0 1 1.433.605L13.708 5H17a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.942zm2.816 7.096l-3.849 3.97-1.667-1.72a.712.712 0 0 0-1.029 0 .767.767 0 0 0 0 1.06l2.182 2.25a.712.712 0 0 0 1.028 0l4.364-4.5a.767.767 0 0 0 0-1.06.712.712 0 0 0-1.029 0zM9.942 4H3l-.001 1H10.916l-.974-1z'
                },
                {
                    key: 'planName',
                    title: '计划',
                    count: 14,
                    icon: 'M13.4 1.432a1 1 0 0 1 1 1V3H16a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h1.487v-.568a1 1 0 1 1 2 0V3H12.4v-.568a1 1 0 0 1 1-1zM5.488 5H4a1 1 0 0 0-1 1v8.509h14V6a1 1 0 0 0-1-1h-1.6v.03a1 1 0 0 1-2 0V5H7.487v.03a1 1 0 1 1-2 0V5zm1.973 5.845v2h-2v-2h2zm3.478 0v2h-2v-2h2zm3.463 0v2h-2v-2h2zM7.46 7.538v2h-2v-2h2zm3.478 0v2h-2v-2h2zm3.463 0v2h-2v-2h2z'
                },
                {
                    key: 'ideaName',
                    title: '创意',
                    count: 2,
                    icon: 'M14 1.509a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-11a3 3 0 0 1 3-3h8zm1 9.882H5v3.62h10v-3.62zm-4.462.881a.941.941 0 0 1 0 1.882H9.421a.941.941 0 1 1 0-1.882h1.117zM14 3.51H6a1 1 0 0 0-1 1v5h10v-5a1 1 0 0 0-1-1z'
                }
            ],
            selected: Utils.getCookie('pageSelect') || 'groupName',
            //
            soltPanel: false,
            param0: {
                0: '广告组',
                1: '计划',
                2: '创意'
            },
            searchStatus: {
                "-1": "待审核",
                "0": '禁用',
                "1": '启用',
                "-2": "审核不通过"
            },
            param1: ['广告组', '计划', '创意'],
            Extension: {
                "1": "应用推广",
                "2": "线索搜集",
                "3": "信息推广"
            }

        };
    },
    mounted() {
        this.getSearch.data && (this.formSearch = {
            ...this.getSearch.data
        });
        this.getSearch.pageData && (this.pagination = {
            ...this.getSearch.pageData
        });
        R.Home.userIndex({}).then(res => {
            if (res.ok) {
                this.userAmountData = res.data;
            
            }
        })
        this.init();
    },
    methods: {
        ...mapMutations(['setSearch']),
        //查询搜索Name
        searchName() {
            // this.formSearch[selected];
            this.formSearch.palnName = "";
            this.formSearch.groupName = "";
            this.formSearch.ideaName = "";
            this.formSearch[this.selected] = this.searchText;
            this.getData(true);
        },
        //下拉搜索发生变化
        chnageSearch(value) {
            this.getData(true);
        },
        //下拉发生变化
        changeDate(val) {
            if (val.start && val.end) {
                this.formSearch.queryStartTime = val.start;
                this.formSearch.queryEndTime = Manba(val.end).add(-1).format();
                this.getData(true);
            }

        },
        init() {
            this.getData();
        },
        //编辑
        editData(path, query) {
            //编辑时保存当前查询条件
            this.setSearch({
                data: this.formSearch,
                pageData: this.pagination
            });

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
        toSearchData(filed, id) {

            this.searchFiled = filed;
            this.formSearch[filed] = id;
            switch (filed) {
                case "groupId":
                    this.selected = "planName";
                    this.getData(true);
                    break;
                case "planId":
                    this.selected = "ideaName";
                    this.getData(true);
                    break;
            }
            // Utils.saveCookie('pageSelect',this.selected);

        },
        //切换数据
        change(data) {
            //切换后重置分页信息
            Utils.saveCookie('pageSelect', data.key);
            this.getData(true);
        },
        updataStatus(api, data) {

            R[api].updateStatus({
                ...data
            }).then(res => {
                if (res.ok) {
                    this.$Message.success(res.msg);
                    this.getData();
                    //查询成功之后请求该请求字段
                    this.searchFiled && (this.formSearch[this.searchFiled] = "");
                }
            })
        },
        getData(reload = false) {
            if (reload) {
                this.pagination.page = 1;
            }
            this.loading = true;
            switch (this.selected) {
                case "groupName":
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
                            //查询成功之后请求该请求字段
                            this.searchFiled && (this.formSearch[this.searchFiled] = "");
                        }
                    })
                    break;
                case "planName":
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
                            //查询成功之后请求该请求字段
                            this.searchFiled && (this.formSearch[this.searchFiled] = "");
                        }
                    })
                    break;
                case "ideaName":
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

        },
        addRouter(name, query) {
            this.$router.push({
                name: name,
                query: {
                    ...query
                }
            });
        },

    },
    computed: {
        ...mapGetters(['getSearch'])
    },

};
</script>
