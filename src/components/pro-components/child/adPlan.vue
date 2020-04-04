<style lang="less">
.jihua {
    .byted-select-panel .bui-select-panel-left {
        position: relative;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        overflow-x: auto;
        vertical-align: top;
    }

    .byted-select-panel .bui-select-panel-left-moduler {
        display: inline-block;
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
    }

    .byted-select-panel-moduler {
        width: 100%;
        background-color: #fff;
        border: 1px solid #dadfe3;
        border-radius: 4px;
        overflow: hidden;
    }

    .byted-select-panel-moduler-header {
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

    .byted-select-panel-moduler-header-title {
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
    }

    .byted-select-panel-moduler-container {
        height: 192px;
        padding: 6px 0;
        overflow-y: auto;
        position: relative;
    }

    .byted-select-panel-item {
        padding: 6px 12px;
        position: relative;
        cursor: pointer;
    }

    .byted-select-panel .bui-select-panel-right {
        display: inline-block;
    }

    .byted-select-panel-moduler {
        width: 100%;
        background-color: #fff;
        border: 1px solid #dadfe3;
        border-radius: 4px;
        overflow: hidden;
    }

    .byted-select-panel-moduler-header {
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

    .byted-select-panel-moduler-container {
        height: 192px;
        padding: 6px 0;
        overflow-y: auto;
        position: relative;
    }

    .byted-select-panel-moduler-header-title {
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
    }

    .byted-select-panel-moduler-header-clear {
        -ms-flex-negative: 0;
        flex-shrink: 0;
        color: #2f88ff;
        cursor: pointer;
        margin-left: 12px;
    }

    .byted-select-panel-item-remove {
        margin: 8px 12px;
        padding: 2px 8px;
        background-color: #edf1f5;
        border-radius: 4px;
        position: relative;
    }

    .byted-select-panel-item .byted-select-panel-item-name {
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

    .byted-select-panel-item-remove .byted-select-panel-item-closeicon {
        position: absolute;
        right: 8px;
        top: 6px;
        line-height: 0;
        cursor: pointer;
    }

    .byted-select-panel-item {
        padding: 6px 12px;
        position: relative;
        cursor: pointer;
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
    <!-- 测试组件 -->
    <div class="bui-tabs-content">
        <div class="bui-tab-pane active">
            <div class="ad-m-t-sm">
                <div class="byted-select-panel">
                    <div class="bui-select-panel-left" style="margin-right: 16px; width: calc(100% - 216px);">
                        <div class="bui-select-panel-left-moduler" style="width: 50%; min-width: 200px;">
                            <div class="byted-select-panel-moduler">
                                <div class="byted-select-panel-moduler-header"><span class="byted-select-panel-moduler-header-title">省份</span>
                                    <!---->
                                </div>
                                <div class="byted-select-panel-moduler-container">
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                    <div class="byted-select-panel-item byted-select-panel-item-check byted-select-panel-item-has-child">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bui-select-panel-left-moduler" style="width: 50%; min-width: 200px;">
                            <div class="byted-select-panel-moduler">
                                <div class="byted-select-panel-moduler-header"><span class="byted-select-panel-moduler-header-title">城市</span>
                                    <!---->
                                </div>
                                <div class="byted-select-panel-moduler-container">
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                    <div class="byted-select-panel-item byted-select-panel-item-check">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bui-select-panel-right bui-select-panel-right-none" style="width: 200px;">
                        <div class="byted-select-panel-moduler">
                            <div class="byted-select-panel-moduler-header"><span class="byted-select-panel-moduler-header-title">已选</span>
                                <div class="byted-select-panel-item byted-select-panel-item-remove byted-select-panel-item-selected">
                                    <!----> <span class="byted-select-panel-item-name">石家庄</span>
                                    <!---->
                                    <!----> <span class="byted-select-panel-item-closeicon">
                                        <div class="byted-icon bui-icon-close"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="100%" height="100%">
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
                                            </svg></div>
                                    </span></div>
                            </div>
                            <div class="byted-select-panel-moduler-container">
                                <div class="byted-select-panel-moduler-none">
                                    <div class="byted-icon bui-icon-empty"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 37" width="100%" height="100%">
                                            <path fill-rule="evenodd" d="M11.492 6.303a.805.805 0 0 1-.806-.799c0-.44.36-.798.806-.798h14.791c.446 0 .806.357.806.798 0 .442-.36.799-.806.799H11.492zm-1.186 4.112a.8.8 0 0 1-.806-.799c0-.44.36-.798.806-.798h16.806c.445 0 .806.357.806.798 0 .441-.36.799-.806.799H10.306zm-1.19 4.115a.804.804 0 0 1-.805-.798c0-.441.36-.798.806-.798H28.4c.446 0 .807.357.807.798 0 .441-.361.798-.807.798H9.117zm15.507 12.5c.592 0 1.075.478 1.078 1.068 0 .59-.482 1.068-1.078 1.068H12.95a1.072 1.072 0 0 1-1.079-1.068c0-.59.482-1.068 1.079-1.068h11.673zm10.019 6.456h-.004v-13.21a.804.804 0 0 0-.807-.799h-9.264a6.654 6.654 0 0 1-5.898 3.572 6.652 6.652 0 0 1-5.903-3.572H3.502a.802.802 0 0 0-.807.798v13.21c0 .438.361.8.807.8h30.333a.805.805 0 0 0 .807-.8zM7.976 3.572l-4.183 13.24h9.86c.575 0 1.087.361 1.274.9a3.964 3.964 0 0 0 3.742 2.673 3.964 3.964 0 0 0 3.74-2.672c.185-.54.7-.904 1.274-.904h9.861L29.361 3.576c-.136-.43-.758-.908-1.395-.908H9.367c-.567 0-1.244.438-1.391.904zM36.995 18.81c.213.445.342.94.342 1.465v13.21c0 1.911-1.572 3.468-3.502 3.468H3.502C1.572 36.953 0 35.396 0 33.486v-13.21c0-.526.129-1.018.339-1.466L5.405 2.778C5.902 1.196 7.607 0 9.371 0h18.595c1.764 0 3.468 1.196 3.966 2.781l5.063 16.029z"></path>
                                        </svg></div>
                                    暂未选择
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bui-tab-pane">
            <div class="ad-m-t-sm">
                <div class="byted-select-panel">
                    <div class="bui-select-panel-left" style="margin-right: 16px; width: calc(100% - 216px);">
                        <div class="bui-select-panel-left-moduler" style="width: 100%; min-width: 200px;">
                            <div class="byted-select-panel-moduler">
                                <div class="byted-select-panel-moduler-header"><span class="byted-select-panel-moduler-header-title">等级</span>
                                    <!---->
                                </div>
                                <div class="byted-select-panel-moduler-container">
                                    <!---->
                                    <div class="byted-select-panel-item byted-select-panel-item-has-child">
                                        <!----> <span class="byted-select-panel-item-name">一线城市</span>
                                        <!----> <span class="byted-select-panel-item-toright">
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
                                        <!---->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bui-select-panel-right bui-select-panel-right-none" style="width: 200px;">
                        <div class="byted-select-panel-moduler">
                            <div class="byted-select-panel-moduler-header"><span class="byted-select-panel-moduler-header-title">已选</span>
                                <!---->
                            </div>
                            <div class="byted-select-panel-moduler-container">
                                <div class="byted-select-panel-moduler-none">
                                    <div class="byted-icon bui-icon-empty"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 37" width="100%" height="100%">
                                            <path fill-rule="evenodd" d="M11.492 6.303a.805.805 0 0 1-.806-.799c0-.44.36-.798.806-.798h14.791c.446 0 .806.357.806.798 0 .442-.36.799-.806.799H11.492zm-1.186 4.112a.8.8 0 0 1-.806-.799c0-.44.36-.798.806-.798h16.806c.445 0 .806.357.806.798 0 .441-.36.799-.806.799H10.306zm-1.19 4.115a.804.804 0 0 1-.805-.798c0-.441.36-.798.806-.798H28.4c.446 0 .807.357.807.798 0 .441-.361.798-.807.798H9.117zm15.507 12.5c.592 0 1.075.478 1.078 1.068 0 .59-.482 1.068-1.078 1.068H12.95a1.072 1.072 0 0 1-1.079-1.068c0-.59.482-1.068 1.079-1.068h11.673zm10.019 6.456h-.004v-13.21a.804.804 0 0 0-.807-.799h-9.264a6.654 6.654 0 0 1-5.898 3.572 6.652 6.652 0 0 1-5.903-3.572H3.502a.802.802 0 0 0-.807.798v13.21c0 .438.361.8.807.8h30.333a.805.805 0 0 0 .807-.8zM7.976 3.572l-4.183 13.24h9.86c.575 0 1.087.361 1.274.9a3.964 3.964 0 0 0 3.742 2.673 3.964 3.964 0 0 0 3.74-2.672c.185-.54.7-.904 1.274-.904h9.861L29.361 3.576c-.136-.43-.758-.908-1.395-.908H9.367c-.567 0-1.244.438-1.391.904zM36.995 18.81c.213.445.342.94.342 1.465v13.21c0 1.911-1.572 3.468-3.502 3.468H3.502C1.572 36.953 0 35.396 0 33.486v-13.21c0-.526.129-1.018.339-1.466L5.405 2.778C5.902 1.196 7.607 0 9.371 0h18.595c1.764 0 3.468 1.196 3.966 2.781l5.063 16.029z"></path>
                                        </svg></div>
                                    暂未选择
                                </div>
                            </div>
                        </div>
                    </div>
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
            value1: '选择1',
            param1: ['选择1', '选择2'],
        };
    },
    methods: {

    },
    created() {
        console.log(this.id, this.name)
    },
    computed: {

    }
}
</script>
