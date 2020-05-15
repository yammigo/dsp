<style lang="less">
.jihua {
    .f-select-panel-moduler-header {
        border-bottom: 1px solid #dadfe3;
        background-color: #f8f9fa;
        color: #333;
        font-size: 14px;
        line-height: 22px;
        padding: 8px 12px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .f-select-panel-moduler-header-title {
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
    }

    .f-select-panel-moduler-container {
        height: 192px;
        padding: 6px 0;
        overflow-y: auto;
        position: relative;
    }

    .f-select-panel-moduler {
        width: 100%;
        background-color: #fff;
        border: 1px solid #dadfe3;
        overflow: hidden;
        box-sizing: border-box;
    }

    .f-select-panel-item {
        padding: 6px 12px;
        position: relative;
        cursor: pointer;

        .f-select-panel-item-name {
            display: block;
            cursor: pointer;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 22px;
            font-size: 14px;
            color: #333;
            font-weight: 400;
        }

        .byted-select-panel-item-toright {
            position: absolute;
            right: 12px;
            top: 10px;
            line-height: 0;
            cursor: pointer;

            .bui-icon-angle-right {
                width: 16px;
                height: 16px;
                fill: #999;
            }
        }
    }

    .f-select-panel-item-remove {
        margin: 8px 12px;
        padding: 2px 8px;
        background-color: #edf1f5;
        border-radius: 4px;
        position: relative;

        .f-select-panel-item-name {
            margin-right: 14px;
        }

        .f-select-panel-item-closeicon {
            position: absolute;
            right: 8px;
            top: 6px;
            line-height: 0;
            cursor: pointer;

            .bui-icon-close {
                width: 14px;
                height: 14px;
                fill: #999;
            }
        }
    }

    .f-select-panel-item-remove:first-child {
        margin-top: 6px;
    }

    .f-select-panel-moduler-header-clear {
        -ms-flex-negative: 0;
        flex-shrink: 0;
        color: #2f88ff;
        cursor: pointer;
        margin-left: 12px;
    }

    .f-select-panel {
        .fui-select-panel-left-moduler {
            display: inline-block;
            -webkit-box-flex: 0;
            -ms-flex: none;
            flex: none;

            &:not(:first-child) {
                margin-left: -1px;
            }
        }

        .fui-select-panel-right {
            display: inline-block;
        }

        .fui-select-panel-left {
            position: relative;
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            overflow-x: auto;
            vertical-align: top;
        }
    }
}
</style>
<template>
<div class="jihua">
    <Form :model="formData" ref="form" :rules="rules" :validOnChange="true">
        <div class="moduler ad-group-moduler" v-listenTop:0="testall">
            <div class="ad-row-title moduler-title">所属广告组</div>
            <div class="ad-group ad-font-size">
                所属广告组：
                <strong data-no-translate>{{groupName||formData.groupName}}</strong>
            </div>
        </div>

        <div class="moduler" v-listenTop:1="testall">
            <div class="ad-row-title moduler-title">
                投放选择
                <!-- <span class="help-frame-link no-selec">了解详情</span> -->
            </div>
            <div class="ad-range">
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">投放方式</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="putType" label="必选项" :showLabel="false">
                            <SwitchList v-model="formData.putType" :datas="putType"></SwitchList>
                        </FormItem>
                    </div>
                </div>
                <!-- <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">投放状态</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="status" label="必选项" :showLabel="false">
                            <SwitchList v-model="formData.status" :datas="putStatus"></SwitchList>
                        </FormItem>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="moduler" v-listenTop:2="testall">
            <div class="ad-row-title moduler-title">
                用户定向
                <!-- <span class="help-frame-link no-selec">了解详情</span> -->
            </div>
            <div class="ad-range">
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">平台</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="platformType" label="必选项" :showLabel="false">
                            <Checkbox v-model="formData.platformType" :datas="platformType"></Checkbox>
                        </FormItem>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">网络</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="connectType" label="必选项" :showLabel="false">
                            <Checkbox v-model="formData.connectType" :datas="connectType"></Checkbox>
                        </FormItem>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">性别</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="sexType" label="必选项" :showLabel="false">
                            <Checkbox v-model="formData.sexType" :datas="sexType"></Checkbox>
                        </FormItem>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">年龄</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="ageType" label="必选项" :showLabel="false">
                            <Checkbox v-model="formData.ageType" :datas="ageType"></Checkbox>
                        </FormItem>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">地域</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="cityCodes" label="城市选项" :showLabel="false">
                            <selectCity v-if="dictCity.length>0" v-model="formData.cityCodes" :dictCity="dictCity"></selectCity>
                        </FormItem>
                    </div>
                </div>
                <div class="row-item" v-show="formData.platformType.length>0">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">系统版本</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <div style="width:500px;">
                            <div v-if="formData.platformType.indexOf(1)>-1" class="campaign-have-list" style="margin-left: 0px; margin-right: 0px;border-radius:0px;width:50%;float:left;height:auto">
                                <div class="campaign-have-header">
                                    <strong>Android最小版本</strong>
                                </div>
                                <ul style="overflow:auto;height:192px;">
                                    <li class="ad-d-flex ad-d-flex-between" v-for="(item,index) in platformVerAndroid" :key="index">
                                        <div>
                                            <Radio :value='item.key' v-model="formData.versionMiniAndroid">{{item.title}}</Radio>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div v-if="formData.platformType.indexOf(2)>-1" class="campaign-have-list" style="margin-left: 0px; margin-right: 0px;border-radius:0px;width:50%;float:left;height:auto;margin-left:-1px;">
                                <div class="campaign-have-header">
                                    <strong>IOS最小版本</strong>
                                </div>
                                <ul style="overflow:auto;height:192px;">
                                    <li class="ad-d-flex ad-d-flex-between" v-for="(item,index) in platformVerIos" :key="index">
                                        <div>
                                            <Radio :value='item.key' v-model="formData.versionMiniIos">{{item.title}}</Radio>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- 手机品牌 -->
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">手机品牌</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <div style="width:500px;">
                            <div class="campaign-have-list" style="margin-left: 0px; margin-right: 0px;border-radius:0px;width:50%;float:left;height:auto">
                                <div class="campaign-have-header">
                                    <strong>可选品牌</strong>
                                </div>
                                <ul style="overflow:auto;height:192px;">
                                    <li class="ad-d-flex ad-d-flex-between">
                                        <div>
                                            <Checkbox :checked="formData.deviceBrand==false||!formData.deviceBrand" @click.native="checkAllBrand">不限</Checkbox>
                                        </div>
                                    </li>
                                    <li class="ad-d-flex ad-d-flex-between" v-for="(item,index) in deviceBrand" :key="index">
                                        <div>
                                            <Checkbox :value='item.key' v-model="formData.deviceBrand">{{item.title}}</Checkbox>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end -->
            </div>
        </div>

        <!-- 匀速 快速 -->
        <!-- 预算与出价 -->
        <div class="moduler" v-listenTop:3="testall">
            <div class="ad-row-title moduler-title">
                预算与出价
                <!-- <span class="help-frame-link no-selec">了解详情</span> -->
            </div>
            <div class="ad-range">
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">出价方式</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="bidType" label="必选项" :showLabel="false">
                            <SwitchList v-model="formData.bidType" :datas="bidType"></SwitchList>
                        </FormItem>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">预算</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="putAmountDay" label="必选项" :showLabel="false">
                            <div class="h-input-group" v-width="300">
                                <div class="h-input-addon">
                                    <div style="padding-left:10px;padding-right:10px;">日预算</div>
                                </div>

                                <input type="text" placeholder="请输入" v-model="formData.putAmountDay" />

                                <span class="h-input-addon">元</span>
                            </div>
                        </FormItem>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">出价</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="bidAmount" label="必选项" :showLabel="false">
                            <div class="h-input-group" v-width="300">
                                <div class="h-input-addon">
                                    <div style="padding-left:10px;padding-right:10px;">出价金额</div>
                                </div>
                                <input type="text" placeholder="请输入" v-model="formData.bidAmount" />
                                <span class="h-input-addon">元</span>
                            </div>
                        </FormItem>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">投放时间</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="putStartDate" label="开始时间" :showLabel="false" style="display:inline-block;width:200px;">
                            <DatePicker v-model="formData.putStartDate" aria-disabled placeholder="请选择开始日期" :option="{end:formData.putEndDate,start:dateParam.start}" v-width="200"></DatePicker>
                        </FormItem>
                        <span style="margin-lefy:10px;margin-tight:10px;">-</span>
                        <FormItem prop="putEndDate" label="开始时间" :showLabel="false" style="display:inline-block;width:200px;">
                            <DatePicker v-model="formData.putEndDate" placeholder="请选择结束日期" :option="{start:formData.putStartDate}" v-width="200"></DatePicker>
                        </FormItem>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">投放时段</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="weekHours" label="必选项" :showLabel="false">
                            <!-- 下拉组件 -->
                            <weekTime v-model="formData.weekHours"></weekTime>
                            <!-- end -->
                        </FormItem>
                    </div>
                </div>
            </div>
        </div>
        <div class="moduler" v-listenTop:4="testall">
            <div class="ad-row-title moduler-title">
                计划名称
                <!-- <span class="help-frame-link no-selec">了解详情</span> -->
            </div>
            <div class="ad-range">
                <div class="row-item">
                    <div class="hint-item"></div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">计划名称</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="planName" label="必选项" :showLabel="false">
                            <input v-width="480" type="text" v-model="formData.planName" />
                        </FormItem>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel_moduler" style="min-width: 1048px;padding-top: 24px; padding-bottom: 24px;text-align:right;">
            <!-- <Button color="primary" size="l">取消</Button> -->
            <Button color="primary" size="l" @click="submit">保存并关闭</Button>
            <Button color="primary" size="l" @click="submitNext">提交并添加创意</Button>
        </div>
    </Form>
</div>
</template>

<script>
import selectCity from '../../baseComponent/selectCity';
import weekTime from '../../baseComponent/weekTime';
import {
    format
} from 'url';
export default {
    components: {
        selectCity,
        weekTime
    },
    props: ['groupId', 'groupName', 'planId'],
    data() {
        return {

            dateParam: {

                start: Manba().format('YYYY-MM-DD'),

            },
            formData: {
                putStartDate: '',
                putEndDate: '',
                platformType: [1, 2], //投放平台
                connectType: [100, 2, 3, 4, 5], //网络类型
                sexType: [0, 1], //性别
                ageType:[1,2,3,4,5],//年龄
                versionMiniAndroid: "0", //安卓最小版本
                versionMiniIos:"0",//ios最小版本
                deviceBrand: [], //手机品牌
                cityCodes: [], //投放城市
                weekHours: [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ], //投放时段
                putType: 1, //投放方式
                putAmountDay: '', //投放预算
                bidType: 1, //出价格方式
                bidAmount: '', //出价金额
                planName: !this.planId && this.groupName + "_", //计划名称
                groupName: '',
                groupId: this.groupId
            },
            dictCity: [],
            platformType: [{
                    key: 1,
                    title: 'Android'
                },
                {
                    key: 2,
                    title: 'IOS'
                }
            ],
            sexType: [{
                    key: 0,
                    title: '女'
                },
                {
                    key: 1,
                    title: '男'
                }
            ],
            ageType: [{
                    key: 1,
                    title: '18-23岁'

                }, {
                    key: 2,
                    title: '24-30岁'
                },
                {
                    key: 3,
                    title: '31-40岁'
                },
                {
                    key: 4,
                    title: '41-49岁'
                },
                {
                    key: 5,
                    title: '50岁+'
                }
            ],
            connectType: [{
                    key: 100,
                    title: 'WIFI'
                },
                {
                    key: 2,
                    title: '2G'
                },
                {
                    key: 3,
                    title: '3G'
                },
                {
                    key: 4,
                    title: '4G'
                },
                {
                    key: 5,
                    title: '5G'
                }
            ],
            putType: {
                "1": '均衡投放',
                "2": '优先跑量'
            },
            bidType: {
                1: 'cpc',
                2: 'cpm'
            },
            putStatus: {
                1: '启用',
                0: '禁用'
            },
            platformVerAndroid: [{
                    title: "不限",
                    key: '0'
                },
                {
                    title: 'Android 8.0及以上',
                    key: '8.0'
                }, {
                    title: 'Android 7.1及以上',
                    key: '7.1'
                }, {
                    title: 'Android 7.0及以上',
                    key: '7.0'
                },
                {
                    title: 'Android 6.0及以上',
                    key: '6.0'
                },
                {
                    title: 'Android 5.1及以上',
                    key: '5.1'
                },
                {
                    title: 'Android 4.5及以上',
                    key: '4.5'
                },
                {
                    title: 'Android 4.4及以上',
                    key: '4.4'
                },
                {
                    title: 'Android 4.3及以上',
                    key: '4.3'
                },
                {
                    title: 'Android 4.2及以上',
                    key: '4.2'
                },
                {
                    title: 'Android 4.1及以上',
                    key: '4.1'
                },
                {
                    title: 'Android 4.0及以上',
                    key: '4.0'
                },
                {
                    title: 'Android 3.2及以上',
                    key: '3.2'
                },
                {
                    title: 'Android 3.1及以上',
                    key: '3.1'
                },
                {
                    title: 'Android 3.0及以上',
                    key: '3.0'
                },
                {
                    title: 'Android 2.3及以上',
                    key: '2.3'
                },
                {
                    title: 'Android 2.2及以上',
                    key: '2.2'
                },
                {
                    title: 'Android 2.1及以上',
                    key: '2.1'
                },
                {
                    title: 'Android 2.0及以上',
                    key: '2.0'
                }
            ],
            platformVerIos: [{
                    title: "不限",
                    key: '0'
                },
                {
                    title: 'IOS 13.0及以上',
                    key: '13.0'
                }, {
                    title: 'IOS 12.0及以上',
                    key: '12.0'
                }, {
                    title: 'IOS 11.0及以上',
                    key: '11.0'
                },
                {
                    title: 'IOS 10.0及以上',
                    key: '10.0'
                },
                {
                    title: 'IOS 9.0及以上',
                    key: '9.0'
                },
                {
                    title: 'IOS 8.0及以上',
                    key: '8.0'
                },
                {
                    title: 'IOS 7.0及以上',
                    key: '7.0'
                },
                {
                    title: 'IOS 6.0及上',
                    key: '6.0'
                },
            ],
            deviceBrand: [{
                    key: "samsung",
                    title: "三星"
                },
                {
                    key: 'Meizu',
                    title: "魅族"
                },
                {
                    key: 'xiaomi',
                    title: "小米"
                },
                {
                    key: 'Coolpad',
                    title: "酷派"
                },
                {
                    key: 'APPLE',
                    title: 'iphone'
                },
                {
                    key: "OPPO",
                    title: "OPPO"
                },
                {
                    key: 'LeEco',
                    title: "乐视"
                },
                {
                    key: "HUAWEI",
                    title: "华为"
                },
                {
                    key: "OnePlus",
                    title: "一加"
                },
                {
                    key: "vivo",
                    title: "vivo"
                }
            ],
            rules: {
                required: [
                    'planName',
                    'platformType',
                    'sexType',
                    'putStartDate',
                    'connectType',
                    'ageType',
                    'putEndDate',
                    'cityCodes',
                    'putType',
                    'putAmountDay',
                    'bidType',
                    'bidAmount',
                    'weekHours',
                    'groupId',
                    'versionMiniAndroid',
                    'versionMiniIos',
                ]
            }
        };
    },
    methods: {
        checkAllBrand() {
            if (this.formData.deviceBrand && this.formData.deviceBrand.length > 0) {
                this.formData.deviceBrand = [];
            }
        },
        testall(val, step) {
            if (val.top <= 130) {
                this.$emit('activeStep', {
                    key: '1',
                    step: step
                });
            }
        },
        histroy(){
            this.$router.go(-1);
        },
        submit() {
            let validResult = this.$refs.form.valid();
            if (validResult.result) {
                if (this.planId) {
                    R.adPlan
                        .update({
                            ...this.formData
                        })
                        .then(res => {
                            if (res.ok) {
                                this.$Message.success(res.msg);
                                this.$router.go(-1);
                            }
                        });
                } else {
                    R.adPlan
                        .add({
                            ...this.formData
                        })
                        .then(res => {
                            if (res.ok) {
                                this.$Message.success(res.msg);
                                this.$router.go(-1);
                            }
                        });
                }
            }
        },
        submitNext() {
            let validResult = this.$refs.form.valid();
            if (!validResult.result) return;
            if (this.planId) {
                R.adPlan
                    .update({
                        ...this.formData
                    })
                    .then(res => {
                        if (res.ok) {
                            this.$Message.success(res.msg);
                            this.$router.replace({
                                name: 'adOriginality',
                                query: {
                                    planId: this.planId,
                                    planName: this.formData.planName
                                }
                            });
                        }
                    });
            } else {
                R.adPlan
                    .add({
                        ...this.formData
                    })
                    .then(res => {
                        if (res.ok) {
                            this.$Message.success(res.msg);
                            this.$router.replace({
                                name: 'adOriginality',
                                query: {
                                    planId: res.data.id,
                                    planName: res.data.planName
                                }
                            });
                        }
                    });
            }
        },
        initData() {
            if (this.planId) {
                this.$Loading();
                R.adPlan
                    .get({
                        data: {
                            id: this.planId
                        },
                        page: 1,
                        limit: 1
                    })
                    .then(res => {
                        if (res.ok) {
                            this.$Loading.close();
                            //这里进行数据合并防止未初始化数据不展示
                            this.formData = Utils.extend({}, this.formData, res.data.list[0]);

                        }
                    });
            }
        }
    },
    mounted() {
        //合并参数
        // console.log(Utils.extend({},{a:{a:0},b:[0,1]},{a:{},b:[0]}));
        this.$emit('activeStep', {
            key: '1',
            step: '0'
        });
    },
    created() {
        //获取字典数据
        R.Common.sityList({}).then(res => {
            if (res.ok) {
                this.dictCity = res.data;
            }
        });
        this.initData();
    },
    computed: {
        //所有省份是否被选中
        isSelectedAll: {
            get() {
                for (var i = 0; i < this.dataCity.length; i++) {
                    if (!this.isCityListSelect[i]) {
                        return false;
                    }
                }
                return true;
            },
            // 这里要加一个空的setter，因为用v-model绑定时会报错
            set() {}
        },
        //一级选项是否半选
        isIndeterminate: {
            get() {
                //所有城市是否都被选中
                for (var i = 0, len = this.dataCity.length; i < len; i++) {
                    for (var j = 0, jlen = this.dataCity[i].cityList.length; j < jlen; j++) {
                        if (this.dataCity[i].cityList[j].checked && i >= 0 && i < len) {
                            return true;
                        }
                    }
                }
                return false;
            },

            set() {}
        },

        //二级选项是否半选
        isIndeterminateItem: {
            get() {
                //取出所有的不去定元素
                var tempArr = [],
                    flagList = [];
                for (var i = 0; i < this.dataCity.length; i++) {
                    tempArr[i] = false;
                    var cityList = this.dataCity[i].cityList;
                    for (var j = 0; j < cityList.length; j++) {
                        if (cityList[j].checked && i == cityList.length) {
                            tempArr[i] = false;
                            break;
                        }
                    }
                }

                return true;
            },
            set() {}
        },
        //每个省份下的所有城市是否被选中
        isCityListSelect() {
            var tempArr = [];
            for (var i = 0; i < this.dataCity.length; i++) {
                tempArr[i] = true;

                var cityList = this.dataCity[i].cityList;
                for (var j = 0; j < cityList.length; j++) {
                    if (!cityList[j].checked) {
                        tempArr[i] = false;
                        break;
                    }
                }
            }
            return tempArr;
        }
    },
    watch: {}
};
</script>
