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
                    <div class="text-item">展示数据</div>
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
                                    <div class="f-select-panel-moduler-container" v-click>
                                        <div class="f-select-panel-item f-select-panel-item-active f-select-panel-item-check">
                                            <input type="checkbox" name="" @click="selectAll(shops)" v-model="isSelectedAll"><span>全选</span>
                                        </div>
                                        <div v-for="(shop,index) in shops" v-if="shop.products.length != 0" :key="index" class="f-select-panel-item f-select-panel-item-active f-select-panel-item-check">
                                            <input type="checkbox" name="" @click="selectAll(shop)" v-model="isShopSelectedAll[shops.indexOf(shop)]">
                                            <span>{{ shop.title }}</span>
                                            <span class="byted-select-panel-item-toright">
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
                                        <!-- 两种状态切换 未选中 和已选中 checkBox-->
                                        <div v-for="(shop,index) in shops" v-if="shop.products.length != 0" :key="index">
                                            <div v-for="product in shop.products"  class="f-select-panel-item f-select-panel-item-active f-select-panel-item-check">
                                                <input type="checkbox" name="" value="" v-model="product.isSelected">
                                            </div>
                                        </div>

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
import {
    findIndex,
    findKey
} from "../../../util/utils"
export default {
    props: ["id", "name"],
    directives: {
        'click': {
            inserted: function (el, binding, vnode) {
                // el.addEventListener('click',vnode.context.checkAll)
            },
            unbind: function (el, binding, vnode) {

            }
        }
    },
    data() {
        return {
            shops: [{
                    index: 1,
                  
                    title: '河北',
                    // 购物车中每个店铺的商品列表
                    products: [{
                            id: 2,
                            num: 1,
                            isSelected: true,
                        },
                        {
                            id: 5,
                            num: 2,
                            isSelected: true,
                        },
                    ],
                },
                {
                    index: 2,
                  
                    title: '山西',
                    products: [{
                            id: 12,
                            num: 1,
                            isSelected: false,
                        },
                        {
                            id: 15,
                            num: 2,
                            isSelected: false,
                        },
                    ],
                },
                {
                    index: 3,
                   
                    title: '天津',
                    // isSelectedAll: false,
                    products: [],
                },
                {
                    index: 4,
                    brand: '鲜菜篮子',
                    title: '天津',
                    // isSelectedAll: false,
                    products: [],
                },
            ],

  
            value1: '选择1',
            param1: ['选择1', '选择2'],
        };
    },
    methods: {
        //单个省被全选
        selectAll: function (all) {
            // 参数all可传入shops数组或者shops数组内的一个对象
            // all传入shops数组表示所有城市都被选中
            // all传入一个对象表示某个省城市全选
            if (all instanceof Array) {
                var bool = !this.isSelectedAll;
                // var bool = false;
                for (var i = 0; i < all.length; i++) {
                    var products = all[i].products;
                    for (var j = 0; j < products.length; j++) {
                        products[j].isSelected = bool;
                    }
                }
            } else {
                var index = this.shops.indexOf(all);
                var bool = !this.isShopSelectedAll[index];
                for (var i = 0; i < all.products.length; i++) {
                    all.products[i].isSelected = bool;
                }
            }
        }
    },

    created() {

    },
    computed: {
        //所有城市是否选择
        isSelectedAll: {
            get() {
                for (var i = 0; i < this.shops.length; i++) {
                    if (!this.isShopSelectedAll[i]) {
                        return false;
                    }
                }
                return true;
            },
            // 这里要加一个空的setter，因为用v-model绑定时会报错
            set() {},
        },
        //省里面的城市是否全选
        isShopSelectedAll: function () {
            var tempArr = [];
            for (var i = 0; i < this.shops.length; i++) {
                tempArr[i] = true;
                var products = this.shops[i].products;
                for (var j = 0; j < products.length; j++) {
                    if (!products[j].isSelected) {
                        tempArr[i] = false;
                        break;
                    }
                }
            }
            return tempArr;
        },
    },
    watch: {

    },
}
</script>
