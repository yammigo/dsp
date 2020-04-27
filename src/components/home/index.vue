<style lang="less">
.app-home-vue {
    width: 1200px;
    margin: auto;

    .byted-card {
        background: #fff;
        border-radius: 4px;
    }

    [class^=byted-] {
        box-sizing: border-box;
    }

    .plan-card {
        display: flex;
        justify-content: space-between;
        height: 89px;
    }

    .plan-card .plan-card-item {
        cursor: pointer;
        height: 57px;
        width: 240px;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .plan-card .font24 {
        font-size: 24px;
        line-height: 32px;
    }

    .byted-icon {
        display: inline-block;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        position: relative;
    }

    .ad-color-text-link {
        color: #2F88FF;
    }

    .plan-card .plan-card-item span:nth-child(1) {
        height: 32px;
        margin-bottom: 5px;
    }

    .ad-font-size-sm {
        font-size: 12px;
        line-height: 20px;
    }

    // 颜色
    .ad-color-text-hint {
        color: #999;
    }

    .ad-color-text-border-hint {
        color: #F45858;
    }

    .bui-popper {
        z-index: 999;
    }

    .user-overview .num-wrap .balance-popover .bui-icon-question-circle {
        fill: #999;
    }

    .user-overview .num-wrap .balance-popover .byted-icon {
        vertical-align: middle;
        cursor: pointer;
    }

    .byted-popover {
        position: relative;
        z-index: 1051;
    }

    .byted-popover-wrapper {
        display: inline-block;
    }

    .byted-avatar-md {
        width: 48px;
        height: 48px;
        line-height: 48px;
        font-size: 24px;
    }

    .user-overview .info .id {
        color: #666;
    }

    .user-overview .num-wrap .num-detail {
        margin-left: 16px;
    }

    .user-overview .num-wrap {
        margin-left: 56px;
        display: flex;
    }

    .ad-font-size-sm {
        font-size: 12px;
        line-height: 20px;
    }

    .byted-popover-wrapper {
        display: inline-block;
    }

    .user-overview .info {
        display: flex;
        flex-flow: column;
        margin-left: 16px;
    }

    .byted-icon {
        display: inline-block;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        position: relative;
    }

    .byted-avatar {
        position: relative;
        text-align: center;
        background: #d6d6d6;
        color: #fff;
        overflow: hidden;
    }

    .byted-card-body {
        padding: 16px 24px;
    }

    .user-overview {
        height: 72px;
        display: flex;
        align-items: center;
    }

    .byted-avatar-circle {
        border-radius: 50%;
    }

    .byted-avatar-icon {
        line-height: 1.5;
    }

    .byted-card.byted-card-shadow {
        -webkit-box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .05);
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .05);
    }

    .dashboard-content {
        width: 1200px;
        background: #F8F9FA;
        margin: 0 auto;

        .card:first-child {
            margin-top: 16px;
        }

        .card {
            margin-bottom: 16px;
        }
    }

    .home-part-body {
        height: 350px;

        .echarts-vue {
            height: 350px;
        }
    }

    .home-part-body2 {
        height: 420px;

        .echarts-vue {
            height: 420px;
        }
    }

    .progress-div {
        >p {
            padding: 8px 0;
        }

        .h-progress {
            &-title {
                color: @dark2-color;
                font-size: 15px;
            }

            &-text {
                width: 40px;
            }
        }
    }

    //数据样式
    .dataItem {
        >div {
            width: 20%;

            height: 175px;
            display: inline-block;
            font-size: 0px;
            position: relative;
            float: left;

            .item-data {
                position: absolute;
                width: 100%;
                height: 100%;

                top: 0px;
                font-size: 16px;
                padding: 10px;
                vertical-align: middle;
                line-height: 1.5;

                .title {
                    margin-top: 30px;
                    text-align: center;
                    margin-bottom: 10px;
                    letter-spacing: 2px;
                    font-size: 16px;
                    color: #555
                }

                .number {
                    text-align: center;
                    font-weight: bold;
                    font-size: 14px;

                }

            }

            .item-data:hover {
                box-shadow: 0px 0px 10px #eeee;

                .title {
                    color: #2F88FF;
                }
            }
        }
    }
}
</style>
<template>
<div class="app-home-vue frame-page">
    <div class="dashboard-content">
        <div class="card byted-card byted-card-shadow">
            <!---->
            <div class="byted-card-body">
                <div class="user-overview">
                    <div class="byted-avatar byted-avatar-md byted-avatar-circle byted-avatar-icon">
                        <div class="byted-icon bui-icon-user" style="fill: rgb(255, 255, 255);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="100%" height="100%">
                                <defs>
                                    <path id="user_svg__a" d="M19.52 23.535c-.863.003-5.23.003-5.656-.007h-.558l-.89.007H1.173a.47.47 0 0 1-.472-.47v-.566c-.008-.157-.023-1.021.53-1.97.346-.594.843-1.103 1.477-1.515.77-.499 1.743-.853 2.895-1.053.026-.004.913-.125 1.813-.362 1.56-.41 1.697-.773 1.698-.777a.471.471 0 0 1 .04-.103c.012-.067.044-.323-.017-1.008-.153-1.74-1.062-2.767-1.791-3.593-.23-.26-.448-.506-.615-.748-.722-1.04-.79-2.224-.792-2.274 0-.496.236-.713.444-.905.027-.058.01-.143 0-.201-.195-1.047-.207-2.562-.043-3.534.06-1.278 1.165-2.257 1.213-2.298.164-.14.325-.286.427-.449.02-.066.008-.09 0-.111-.062-.142-.155-.355-.102-.63.032-.166.153-.462.608-.583.183-.049.379-.059.522-.066C9.6.288 10.202.263 10.812.31c4.405.337 5.923 1.98 5.985 2.05.363.433.624.959.787 1.573.05.192.083.352.102.505.154.892.129 1.809.096 2.422-.019.344-.057.705-.121 1.136-.018.117.002.14.009.149.019.023.042.047.067.074.097.103.23.244.302.47.035.114.052.236.052.385-.003.073-.07 1.257-.792 2.297a8.605 8.605 0 0 1-.615.748c-.73.826-1.638 1.854-1.792 3.593-.06.685-.029.94-.016 1.009.017.032.03.067.04.103 0 .003.138.367 1.705.778.9.237 1.78.356 1.788.358 1.185.218 2.165.582 2.935 1.083.637.415 1.133.923 1.475 1.512.542.934.52 1.78.51 1.949v.561a.47.47 0 0 1-.472.47H19.52zm-4.764-6.962zm-5.38 0z"></path>
                                </defs>
                                <use fill-rule="evenodd" xlink:href="#user_svg__a"></use>
                            </svg></div>
                        <!---->
                        <!---->
                        <!---->
                    </div>
                    <div class="info">
                        <div class="byted-popover-wrapper">
                            <span data-no-translate="" class="bui-num ad-font-size name">{{data.loginName}}</span>
                        </div> <a href="#/account-basic" class="ad-font-size-sm id" style="font-size:12px;">个人中心</a>
                    </div>
                    <div class="num-wrap"><img src="//s1.pstatp.com/bytecom/platform_web/static/image/balance.svg?7dc45da98d3acdbde20b3f2b4e6eb791">
                        <div class="num-detail"><span class="ad-color-text-hint ad-font-size-sm">账户余额</span>
                            <div class="balance-popover byted-popover-wrapper">
                                <div class="bui-popper byted-popover" style="width: 240px; display: none;">
                                    <div x-arrow="" class="bui-popover-arrow"></div>
                                    <div class="bui-popover-panel">
                                        <!---->
                                        <div class="bui-popover-body">
                                            <!---->
                                        </div>
                                        <!----> <span class="ad-font-size ad-color-text bui-num balance-popover-header">
                                            账户余额构成说明
                                            <a target="_black" href="" class="ad-link-text-btn">查看详情</a></span>
                                        <div class="balance-explain">

                                        </div>
                                    </div>
                                </div>
                                <div class="byted-icon bui-icon-question-circle" style="width: 14px; height: 14px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14" width="100%" height="100%">
                                        <defs>
                                            <path id="question-circle_svg__a" d="M0 0h14v14H0z"></path>
                                        </defs>
                                        <g fill-rule="evenodd">
                                            <mask id="question-circle_svg__b" fill="#fff">
                                                <use xlink:href="#question-circle_svg__a"></use>
                                            </mask>
                                            <path fill-rule="nonzero" d="M7 13.417a6.397 6.397 0 0 1-4.537-1.88A6.397 6.397 0 0 1 .583 7c0-1.724.685-3.342 1.88-4.537A6.397 6.397 0 0 1 7 .583c1.724 0 3.342.685 4.537 1.88A6.397 6.397 0 0 1 13.417 7a6.397 6.397 0 0 1-1.88 4.537A6.397 6.397 0 0 1 7 13.417zm0-1.167a5.23 5.23 0 0 0 3.712-1.538A5.23 5.23 0 0 0 12.25 7a5.23 5.23 0 0 0-1.538-3.712A5.23 5.23 0 0 0 7 1.75a5.23 5.23 0 0 0-3.712 1.538A5.23 5.23 0 0 0 1.75 7a5.23 5.23 0 0 0 1.538 3.712A5.23 5.23 0 0 0 7 12.25zm.583-4.74v.657a.583.583 0 0 1-1.166 0V7c0-.322.26-.583.583-.583A1.167 1.167 0 1 0 5.833 5.25a.583.583 0 0 1-1.166 0 2.333 2.333 0 1 1 2.916 2.26zM7 10.5a.583.583 0 1 0 0-1.167.583.583 0 0 0 0 1.167z"></path>
                                        </g>
                                    </svg></div>
                            </div>
                            <div class="ad-color-text number bui-num">{{data.amount|NumFormat}}</div>
                        </div>
                    </div>
                    <div class="num-wrap"><img src="//s1.pstatp.com/bytecom/platform_web/static/image/consume.svg?9bd7b70a409309e862b0174f252b7470">
                        <div class="num-detail"><span class="ad-color-text-hint ad-font-size-sm">今日消耗</span>
                            <div class="ad-color-text number bui-num">{{data.useAmountDay|NumFormat}}</div>
                        </div>
                    </div>
                    <div class="num-wrap"><img src="//s1.pstatp.com/bytecom/platform_web/static/image/budget.svg?f55db195e1bd18d103ec65eb329e5699">
                        <div class="num-detail"><span class="ad-color-text-hint ad-font-size-sm">账户日预算</span>
                            <div class="ad-color-text number bui-num"><span>{{data.putAmountDay|NumFormat}}</span>

                            </div>
                        </div>
                    </div>
                    <!---->
                </div>
            </div>
        </div>
        <div class="plan-card card">
            <div class="byted-card byted-card-shadow">
                <!---->
                <div class="byted-card-body">
                    <div class="plan-card-item"><span class="font24 ad-color-text-link bui-num">{{data.putPlanCount}}</span> <span class="ad-color-text ad-font-size-sm plan-type-name">
                            <div class="byted-icon bui-icon-angle-right" style="width: 16px; height: 16px; visibility: hidden;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="100%" height="100%">
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
                            投放中计划
                            <div class="byted-icon bui-icon-angle-right" style="width: 16px; height: 16px;">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="100%" height="100%">
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
                                </svg> -->
                                </div>
                        </span></div>
                </div>

            </div>
            <!-- <div class="byted-card byted-card-shadow">
               
                <div class="byted-card-body">
                    <div class="plan-card-item"><span class="font24  bui-num">{{data.noAmountPlanCount}}</span> <span class="ad-color-text ad-font-size-sm plan-type-name">
                            <div class="byted-icon bui-icon-angle-right" style="width: 16px; height: 16px; visibility: hidden;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="100%" height="100%">
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
                            未投放计划
                            <div class="byted-icon bui-icon-angle-right" style="width: 16px; height: 16px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="100%" height="100%">
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
                        </span></div>
                </div>

            </div> -->

        </div>
    </div>
    <Row :space="20">
        <Cell :width="16">

            <div class="h-panel">
                <div class="h-panel-bar">
                    <div class="h-panel-title">数据概览</div>
                    <div class="h-panel-right">
                        <DropdownMenu placement="bottom-end" class-name="h-text-dropdown">
                            <span>今日</span>
                        </DropdownMenu>
                    </div>
                </div>
                <div class="home-part-body">
                    <Loading text="加载中..." :loading="loadingData"></Loading>
                    <!-- 概览数据开始 -->
                    <div class="dataItem">
                        <div>
                            <div class="item-data">
                                <div class="title">广告请求</div>
                                <div class="number bui-num">{{data.sendCount||0}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="dataItem">
                        <div>
                            <div class="item-data">
                                <div class="title">展现量</div>
                                <div class="number bui-num">{{data.showCount||0}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="dataItem">
                        <div>
                            <div class="item-data">
                                <div class="title">点击量</div>
                                <div class="number bui-num">{{data.clickCount||0}}</div>

                            </div>
                        </div>
                    </div>
                    <div class="dataItem">
                        <div>
                            <div class="item-data">
                                <div class="title">开始下载</div>
                                <div class="number bui-num">{{data.downStartCount||0}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="dataItem">
                        <div>
                            <div class="item-data">
                                <div class="title">完成下载</div>
                                <div class="number bui-num">{{data.downEndCount||0}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="dataItem">
                        <div>
                            <div class="item-data">
                                <div class="title">开始安装</div>
                                <div class="number bui-num">{{data.installStartCount||0}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="dataItem">
                        <div>
                            <div class="item-data">
                                <div class="title">完成安装</div>
                                <div class="number bui-num">{{data.installEndCount||0}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="dataItem">
                        <div>
                            <div class="item-data">
                                <div class="title">播放开始</div>
                                <div class="number bui-num">{{data.layStartCount||0}}</div>
                            </div>
                        </div>
                    </div>
                     <div class="dataItem">
                        <div>
                            <div class="item-data">
                                <div class="title">播放结束</div>
                                <div class="number bui-num">{{data.playEndCount||0}}</div>
                            </div>
                        </div>
                    </div>
                    <!-- 概览数据结束 -->
                </div>
            </div>
        </Cell>
        <Cell :width="8">
            <div class="h-panel">
                <div class="h-panel-bar">
                    <div class="h-panel-title">公告</div>
                    <div class="h-panel-right"></div>
                </div>
                <div class="h-panel-body progress-div home-part-body">
                    <img src="//s1.pstatp.com/bytecom/platform_web/static/image/list-blank.svg?977b96ae0d06fce991bc6414dda9711f">

                </div>
            </div>
        </Cell>
    </Row>
</div>
</template>

<script>
export default {
    data() {
        return {
            loadingData: false,
            data: {}
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.loadingData = true;
            R.Home.userIndex({}).then(res => {
                if (res.ok) {
                    this.data = res.data;
                    this.loadingData = false;
                }
            })
        }
    }
};
</script>
