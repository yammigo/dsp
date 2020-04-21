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
    <div class="moduler ad-group-moduler" v-listenTop:0="testall">
        <div class="ad-row-title moduler-title">
            所属广告组
        </div>
        <div class="ad-group ad-font-size">
            广告组名称：<strong data-no-translate="">1.20-头条-APP行为-儿童玩具（1656236015459380）</strong></div>
    </div>
    <div class="moduler" v-listenTop:1="testall">
        <div class="ad-row-title moduler-title">
            投放选择
            <!-- <span class="help-frame-link no-selec">了解详情</span> -->
        </div>
        <div class="ad-range">
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">投放方式</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                    <SwitchList v-model="value1" :datas="param1"></SwitchList>
                </div>

            </div>
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">投放状态</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                    <SwitchList v-model="value1" :datas="param1"></SwitchList>
                </div>

            </div>

        </div>
    </div>
    <div class="moduler" v-listenTop:2="testall">
        <div class="ad-row-title moduler-title">
            投放目标
            <!-- <span class="help-frame-link no-selec">了解详情</span> -->
        </div>
        <div class="ad-range">
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">投放范围</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                    <SwitchList v-model="value1" :datas="param1"></SwitchList>
                </div>

            </div>
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">下载方式</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                    <SwitchList v-model="value1" :datas="param1"></SwitchList>
                </div>

            </div>
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">下载链接</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                    <input v-width="480" type="text" value="test" />
                </div>

            </div>
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">应用包名</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">

                    <input v-width="480" type="text" value="test" disabled />
                </div>

            </div>

        </div>
    </div>
    <div class="moduler" v-listenTop:3="testall">
        <div class="ad-row-title moduler-title">
            用户定向
            <!-- <span class="help-frame-link no-selec">了解详情</span> -->
        </div>
        <div class="ad-range">
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">平台</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                    <p>
                        <Checkbox :indeterminate="formData.value2.length>0&&formData.value2.length<4" :checked="formData.value2.length == 4" @click.native="checkAll" style="margin-right:40px;">全选</Checkbox>
                        <Checkbox v-model="formData.value2" :datas="param3"></Checkbox>
                    </p>
                </div>

            </div>
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">地域</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                    <selectCity v-model="selectCity"></selectCity>
                </div>

            </div>

        </div>
    </div>

    <!-- 匀速 快速 -->
    <!-- 预算与出价 -->
    <div class="moduler" v-listenTop:4="testall">
        <div class="ad-row-title moduler-title">
            预算与出价
            <!-- <span class="help-frame-link no-selec">了解详情</span> -->
        </div>
        <div class="ad-range">
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">出价方式</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                  <SwitchList v-model="value1" :datas="param1"></SwitchList>
                </div>

            </div>
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">预算</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                    <div class="h-input-group" v-width="300">
                        <div class="h-input-addon">
                            <div style="padding-left:10px;padding-right:10px;">日预算</div>
                        </div>
                        <!-- <FormItem prop="money.minData" label="起始金额" :show-label="false"> -->
                        <input type="text" placeholder="请输入" v-model="formData.money" />
                        <!-- </FormItem> -->
                        <span class="h-input-addon">元</span>
                    </div>
                </div>

            </div>
              <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">出价</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                    <div class="h-input-group" v-width="300">
                        <div class="h-input-addon">
                            <div style="padding-left:10px;padding-right:10px;">出价金额</div>
                        </div>
                        <!-- <FormItem prop="money.minData" label="起始金额" :show-label="false"> -->
                        <input type="text" placeholder="请输入" v-model="formData.money" />
                        <!-- </FormItem> -->
                        <span class="h-input-addon">元</span>
                    </div>
                </div>

            </div>
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">投放时间</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                    <div>
                        <DatePicker v-model="formData.startTime" aria-disabled="" placeholder="请选择开始日期" :option="{end:formData.endTime}"></DatePicker>
                        -
                        <DatePicker v-model="formData.endTime" placeholder="请选择结束日期" :option="{start:formData.startTime}"></DatePicker>
                    </div>
                </div>

            </div>
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">投放时段</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                    <!-- 下拉组件 -->
                    <weekTime v-model="weekTimeData"></weekTime>
                    <!-- end -->
                </div>

            </div>
        </div>
    </div>
    <div class="moduler" v-listenTop:5="testall">
        <div class="ad-row-title moduler-title">
            计划名称
            <!-- <span class="help-frame-link no-selec">了解详情</span> -->
        </div>
        <div class="ad-range">
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">计划名称</div>
                    <div class="required-item"></div>
                </div>
                <div class="input-item">
                    <input v-width="480" type="text" value="这里填写计划的名称" />
                </div>

            </div>

        </div>
    </div>
    <div class="panel_moduler" style="min-width: 1048px;padding-top: 24px; padding-bottom: 24px;text-align:right;">
        <!-- <router-link :to="{name:'adPlan',params:{name:'fanjiantao'},query:{name:'aaa'}}">
        <Button color="primary" size="l">下一步</Button>
      </router-link> -->
        <Button color="primary" size="l" >取消</Button><Button color="primary" size="l" >保存</Button><Button color="primary" size="l" >保存并新建创意</Button>
    </div>

</div>
</template>

<script>
import selectCity from "../../baseComponent/selectCity"
import weekTime from "../../baseComponent/weekTime"
import {
    format
} from 'url'
export default {
    components: {
        selectCity,
        weekTime
    },
    props: ["id", "name"],
    data() {
        return {
            formData: {
                value1: [],
                value2: [],
                planName:'',//计划名称
                platformType:[],//投放平台
                cityIds:[],//投放城市
                hours:[],//投放时间
                weeks:[],//投放时段
                putType:[],//投放方式
                putAmountDay:[],//投放预算
                bidType:[],//出价格方式
                bidAmount:[],//出价金额
                
            },
            selectCity: [],
            weekTimeData: [
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ],
            value1: '选择1',
            param1: ['选择1', '选择2'],
            param2: ["WIFI", "2G", "3G", "4G"],
            param3: ["IOS", "Android"]
        }
    },
    methods: {
        checkAll() {
            if (this.formData.value1.length == 4) {
                this.formData.value1.splice(0, 4);
            } else {
                this.formData.value1 = ["WIFI", "2G", "3G", "4G"];
            }
        },
        testall(val, step) {
           
            if (val.top <=130) {
                this.$emit('activeStep', {
                    key: '1',
                    step: step,
                });
            }
        }
    },

    created() {
        this.$emit('activeStep', {
            key: '1',
            step: '0'
        });
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
            set() {},
        },
        //一级选项是否半选
        isIndeterminate: {
            get() {

                //所有城市是否都被选中
                for (var i = 0, len = this.dataCity.length; i < len; i++) {
                    for (var j = 0, jlen = this.dataCity[i].cityList.length; j < jlen; j++) {
                        if (this.dataCity[i].cityList[j].checked && i >= 0 && i < len) {
                            return true
                        }
                    }
                }
                return false

            },

            set() {},
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

                return true

            },
            set() {

            }
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
    watch: {

    }
}
</script>
