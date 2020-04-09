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
    <div class="moduler ad-group-moduler">
        <div class="ad-row-title moduler-title">
            所属广告组
        </div>
        <div class="ad-group ad-font-size">
            广告组名称：<strong data-no-translate="">1.20-头条-APP行为-儿童玩具（1656236015459380）</strong></div>
    </div>
    <div class="moduler">
        <div class="ad-row-title moduler-title">
            投放范围
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

        </div>
    </div>
    <div class="moduler">
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
    <div class="moduler">
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
                    <SwitchList v-model="value1" :datas="param1"></SwitchList>
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
                    <SwitchList v-model="value1" :datas="param1"></SwitchList>
                </div>

            </div>
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item"></div>
                    <!-- <div class="required-item"></div> -->
                </div>
                <div class="input-item">
                    <!-- 下拉组件 -->
                    <div class="f-select-panel">
                        <div class="fui-select-panel-left" style="margin-right: 16px; width:500px;">
                            <div class="fui-select-panel-left-moduler" style="width: 50%; min-width: 200px;">
                                <div class="f-select-panel-moduler">
                                    <div class="f-select-panel-moduler-header"><span class="f-select-panel-moduler-header-title">省份</span>

                                    </div>
                                    <div class="f-select-panel-moduler-container">
                                        <div class="f-select-panel-item f-select-panel-item-active f-select-panel-item-check">
                                            <Checkbox @click.native="selectAll(dataCity)" :checked="isSelectedAll" :indeterminate="isIndeterminate">全选{{'半选'+isIndeterminate+'全选'+isSelectedAll}}</Checkbox>
                                        </div>
                                        <div v-for="(item,index) in dataCity" :key="index" class="f-select-panel-item f-select-panel-item-active f-select-panel-item-check">
                                            <Checkbox @click.native="selectAll(item)" :checked="isCityListSelect[dataCity.indexOf(item)]">{{item.provinceName}}{{isIndeterminateItem}}</Checkbox>
                                            <span class="byted-select-panel-item-toright" v-if="item.cityList.length!==1">
                                                <div class="byted-icon bui-icon-angle-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="100%" height="100%">
                                                        <defs>
                                                            <path id="angle-right_svg__a" d="M0 0h48v48H0z"></path>
                                                        </defs>
                                                        <g fill-rule="evenodd" transform="rotate(-90 24 24)">
                                                            <mask id="angle-right_svg__b" fill="#fff">
                                                                <use xlink:href="#angle-right_svg__a"></use>
                                                            </mask>
                                                            <use opacity=".01" xlink:href="#angle-right_svg__a"></use>
                                                            <path fill-rule="nonzero" d="M16.586 35.324a2 2 0 0 0 2.828 2.828l12-12a2 2 0 0 0 0-2.828l-12-12a2 2 0 0 0-2.828 2.828l10.586 10.586-10.586 10.586z" transform="rotate(90 24 24.738)"></path>
                                                        </g>
                                                    </svg></div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fui-select-panel-left-moduler" style="width: 50%; min-width: 200px;border-top-right-radius: 0;border-bottom-right-radius: 0;">
                                <div class="f-select-panel-moduler">
                                    <div class="f-select-panel-moduler-header"><span class="f-select-panel-moduler-header-title">城市</span>

                                    </div>
                                    <div class="f-select-panel-moduler-container">
                                        <div class="f-select-panel-item f-select-panel-item-active f-select-panel-item-check f-select-panel-item-selected">
                                            <Checkbox :checked="true">全选</Checkbox>
                                        </div>

                                        <!-- 两种状态切换 未选中 和已选中-->
                                        <!-- <div v-for="(items,indexs) in dataCity" :key="indexs"> -->
                                        <div v-for="(item,index) in currentList.cityList" :key="index" class="f-select-panel-item f-select-panel-item-active f-select-panel-item-check f-select-panel-item-selected">
                                            <Checkbox :checked="item.checked" @click.native="item.checked=!item.checked">{{item.cityName}}</Checkbox>
                                        </div>
                                        <!-- </div> -->

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fui-select-panel-right" style="width: 200px;">
                            <div class="f-select-panel-moduler">
                                <div class="f-select-panel-moduler-header"><span class="f-select-panel-moduler-header-title">已选</span> <span class="f-select-panel-moduler-header-clear">清空</span></div>
                                <div class="f-select-panel-moduler-container">

                                    <div class="f-select-panel-item f-select-panel-item-remove f-select-panel-item-selected">
                                        <span class="f-select-panel-item-name">北京</span>
                                        <span class="f-select-panel-item-closeicon">
                                            <div class="byted-icon bui-icon-close">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="100%" height="100%">
                                                    <defs>
                                                        <path id="close_svg__a" d="M0 0h48v48H0z"></path>
                                                    </defs>
                                                    <g fill-rule="evenodd">
                                                        <mask id="close_svg__b" fill="#fff">
                                                            <use xlink:href="#close_svg__a"></use>
                                                        </mask>
                                                        <use fill="#FFF" fill-opacity=".01" xlink:href="#close_svg__a"></use>
                                                        <path fill-rule="nonzero" d="M24 21.172l8.586-8.586a2 2 0 0 1 2.828 2.828L26.828 24l8.586 8.586a2 2 0 0 1-2.828 2.828L24 26.828l-8.586 8.586a2 2 0 0 1-2.828-2.828L21.172 24l-8.586-8.586a2 2 0 0 1 2.828-2.828L24 21.172z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end -->
                </div>

            </div>

        </div>
    </div>

</div>
</template>

<script>
export default {
    props: ["id", "name"],

    data() {
        return {
            dataCity: [{
                    provinceName: '北京',
                    cityList: [{
                        cityName: '北京',
                        checked: true,
                    }]
                }, {
                    provinceName: '天津',
                    cityList: [{
                        cityName: '天津',
                        checked: true,
                    }]
                }, {
                    provinceName: '河北',
                    cityList: [{
                        cityName: '沈阳',
                        checked: true,

                    }, {
                        cityName: '唐山',
                        checked: true,
                    }]
                },
                {
                    provinceName: '山西',
                    cityList: [{
                        cityName: '太原',
                        checked: true

                    }, {
                        cityName: '大同',
                        checked: false
                    }]
                }
            ],
            //当前需要展现的列表
            currentList: {},

            value1: '选择1',
            param1: ['选择1', '选择2'],
        }
    },
    methods: {
        selectAll: function (all) {
            //展示当前选中的列表

            if (all instanceof Array) {
                var bool = !this.isSelectedAll;
                for (var i = 0; i < all.length; i++) {
                    var cityList = all[i].cityList;
                    for (var j = 0; j < cityList.length; j++) {
                        cityList[j].checked = bool;
                    }
                }
            } else {
                this.currentList = all;
                var index = this.dataCity.indexOf(all);
                var bool = !this.isCityListSelect[index];
                for (var i = 0; i < all.cityList.length; i++) {
                    all.cityList[i].checked = bool;
                }
            }
        },

    },

    created() {

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
                for(var i=0,len=this.dataCity.length;i<len;i++){
                     for(var j=0,jlen=this.dataCity[i].cityList.length;j<jlen;j++){
                         if(this.dataCity[i].cityList[j].checked&&i>=0&&i<len){
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
                var tempArr = [],flagList=[];
                for (var i = 0; i < this.dataCity.length; i++) {
                    tempArr[i] = false;
                    var cityList = this.dataCity[i].cityList;
                    for (var j = 0; j < cityList.length; j++) {
                        
                        if (cityList[j].checked&&i==cityList.length) {   
                             
                            tempArr[i] = false;
                            break;
                        }
                    }
                }
                console.log(tempArr)
                // return tempArr;
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
