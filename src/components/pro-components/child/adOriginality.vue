<style lang="less">
.adOrigin {
    .ad-creative-components-wrap a {
        outline: none;
        cursor: pointer;
        text-decoration: none;
    }

    .image-mode-tab {
        display: inline-flex;
        position: relative;
        background: #FFF;
        box-shadow: 0px 2px 4px 0px #eff1fa;
        border-radius: 4px;
        border: 1px solid #DEE4F5;
        padding: 16px;
        margin-left: 8px;
        cursor: pointer;
    }

    .image-mode-tab .title {
        width: 56px;
        margin: auto 0 auto 12px;
        font-weight: bold;
        font-size: 14px;
        white-space: normal;
        color: #333333;
    }

    .image-mode-tab .img-box {
        width: 38px;
        height: 52px;

        img {
            width: 100%;
        }
    }

    .image-mode-tab-active {
        border-color: #2F88FF;
    }

    .image-mode-tab-active::after {
        box-sizing: border-box;
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        bottom: -5px;
        right: 20px;
        background-color: #fff;
        border: 1px solid #2F88FF;
        border-top-width: 0;
        border-left-width: 0;
        transform: rotate(45deg);
        box-shadow: 0px 2px 4px 0px #eff1fa;
    }

    .creative-none-logo {
        width: 390px;
        height: 136px;
        margin: 0 auto;

        .creative-none-logo img {
            width: 240px;
            height: 136px;
        }
    }

    .creative-type-tab-procedural {
        margin-top: 24px;

        .ctt-panel {
            position: relative;
            max-height: 600px;
            overflow: auto;
            width: 950px;
            min-height: 293px;
            border-radius: 4px;
            border: 1px solid #dadfe3;
        }

        .creative-none {
            width: 100%;
            height: 100%;
            padding: 12px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .ctt-panel-body-empty {
            margin: 0px;
            padding: 32px 0 30px 0;
        }

        .ctt-type-list {
            display: flex;
            width: 950px;
            margin-bottom: 12px;
        }

        .fui-tabs.fui-tabs-sm.fui-tabs-line {
            width: 100%;
            height: 100%;
        }

        .fui-tabs {
            .fui-tabs-nav-item a {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                cursor: pointer;
            }

            .fui-tabs-nav-item.active {
                color: #333;
                font-weight: 700;
            }

            .fui-tabs-header {
                .fui-tabs-wrapper {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                }

                .is-disabled {
                    display: none;
                }

                .tabs-angle-left {
                    fill: #999;
                    min-width: 16px;
                    margin-right: 16px;
                    cursor: pointer;
                }

                .fui-icon {
                    display: inline-block;
                    vertical-align: bottom;
                    width: 1em;
                    height: 1em;
                    position: relative;
                }

            }

            .fui-tabs-nav {
                position: relative;

                display: flex;
                list-style: none;
                white-space: nowrap;
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
                -webkit-transition: -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
                transition: -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
                transition: transform .3s cubic-bezier(.645, .045, .355, 1);
                transition: transform .3s cubic-bezier(.645, .045, .355, 1), -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
                padding: 0;
                margin: 0;
            }

        }

        .fui-tabs-line .fui-tabs-nav-item a {
            padding: 4px 0;
        }

        .fui-tabs-sm .fui-tabs-nav-item {
            margin-right: 24px;
        }

        .fui-tabs.fui-tabs-sm.fui-tabs-line[data-v-467d7170] .fui-tabs-nav-item {
            margin-right: 0;

            .fui-tabs-nav-item a.fui-tab-nav {
                padding: 4px 0 5px;
            }
        }

    }

    // uplaod 
    .creative-card-container {
        background: #f9f9f9;
        border: 1px solid #DADFE3;
        padding-top: 24px;
        padding-bottom: 24px;
        position: relative;
        display: inline-block;
        margin: 0 12px 24px;
        text-align: center;
        vertical-align: top;
    }

    .card-create-button {
        margin-top: 10px;
    }

    .creative-card-container .remove-card-icon {
        display: none;
        position: absolute;
        top: -8px;
        right: -8px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #FFF;
        cursor: pointer;
    }

    .creative-card-container:hover {
        border-color: #57a5ff;
    }

    .creative-card-container:hover .remove-card-icon {
        display: block;
    }

    //竖屏视频
    .creative-video-card-wrapper {
        display: inline-block;
        vertical-align: top;
    }

    .creative-video-card-wrapper:first-child {
        margin-right: 24px;
    }

    .creative-video-card-wrapper-15,
    .creative-video-card-wrapper-154 {
        width: 140px;
    }

    .creative-video-card-wrapper {
        display: inline-block;
        vertical-align: top;
    }

    .card-create {
        position: relative;
        width: 250px;
        height: 140px;
        border: 1px solid #DADFE3;
        background-color: #FFF;
        padding: 12px;
        border-radius: 4px;
        overflow: hidden;
    }

    .card-create-6,
    .card-create-15,
    .card-create-154,
    .card-create-131,
    .card-create-16 {
        width: 140px;
        height: 250px;
    }

    .upload {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        background-color: #F8F8F8;
        border: 1px dashed #D6D6D6;
        cursor: pointer;
    }

    .upload:hover {
        border-color: #57a5ff;
    }

    .card-create-upload {
        height: 116px;
    }

    .upload .upload-icon {
        width: 16px;
        height: 16px;
        vertical-align: sub;
        margin-right: 4px;
    }

    .upload .upload-area-text {
        height: 22px;
        line-height: 22px;
        font-size: 14px;
        color: #666;
    }

    .card-tip-info {
        font-size: 12px;
        color: #999;
        word-break: break-all;
    }

}
</style>
<template>
<div class="adOrigin">
    <div class="moduler ad-group-moduler">
        <div class="ad-row-title moduler-title">
            所属计划
        </div>
        <div class="ad-group ad-font-size">
            计划名称：<strong data-no-translate="">1.20-头条-APP行为-儿童玩具（1656236015459380）</strong></div>
    </div>
    <div class="moduler">
        <div class="ad-row-title moduler-title">
            制作创意
            <!-- <span class="help-frame-link no-selec">了解详情</span> -->
        </div>
        <div class="ad-range">
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">
                    <div class="text-item">创意样式</div>
                    <!-- <div class="required-item"></div> -->
                </div>
                <div class="input-item">
                    <SwitchList v-model="value1" :datas="param1"></SwitchList>
                </div>
            </div>
            <div class="row-item">
                <div class="hint-item">

                </div>
                <div class="label-item label-size-normal">

                </div>
                <div class="input-item">
                    <!-- 创意选框 -->
                    <div data-v-467d7170="" data-v-25da4e55="" class="creative-type-tab-procedural" id="row_id_making_procedural_info">
                        <div data-v-467d7170="" class="ctt-type-list">
                            <div data-v-467d7170="" class="fui-tabs fui-tabs-sm fui-tabs-line">
                                <div class="fui-tabs-header">
                                    <div class="fui-tabs-wrapper">
                                        <div style="display:none" class="fui-icon fui-icon-angle-left tabs-angle-left is-disabled"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="100%" height="100%">
                                                <defs>
                                                    <path id="angle-left_svg__a" d="M0 0h48v48H0z"></path>
                                                </defs>
                                                <g fill-rule="evenodd" transform="matrix(0 -1 -1 0 48 48)">
                                                    <mask id="angle-left_svg__b" fill="#fff">
                                                        <use xlink:href="#angle-left_svg__a"></use>
                                                    </mask>
                                                    <use opacity=".01" xlink:href="#angle-left_svg__a"></use>
                                                    <path fill-rule="nonzero" d="M16.586 35.324a2 2 0 0 0 2.828 2.828l12-12a2 2 0 0 0 0-2.828l-12-12a2 2 0 0 0-2.828 2.828l10.586 10.586-10.586 10.586z" transform="rotate(90 24 24.738)"></path>
                                                </g>
                                            </svg></div>
                                        <div class="fui-tabs-scroll">
                                            <ul class="fui-tabs-nav">
                                                <li class="active fui-tabs-nav-item"><a class="fui-tab-nav">
                                                        <div data-v-c8213c9c="" data-v-467d7170="" class="image-mode-tab image-mode-tab-active image-mode-tab-closable">
                                                            <!---->
                                                            <div data-v-c8213c9c="" class="img-box"><img data-v-c8213c9c="" src="//sf1-ttcdn-tos.pstatp.com/obj/ttfe/adfe/platform/creative_type/V5/15_S.svg" alt=""></div>
                                                            <div data-v-c8213c9c="" class="title">
                                                                竖版视频
                                                            </div>

                                                        </div>
                                                    </a></li>
                                                <li class="fui-tabs-nav-item"><a class="fui-tab-nav">
                                                        <div data-v-c8213c9c="" data-v-467d7170="" class="image-mode-tab image-mode-tab-active image-mode-tab-closable">
                                                            <!---->
                                                            <div data-v-c8213c9c="" class="img-box"><img data-v-c8213c9c="" src="//sf1-ttcdn-tos.pstatp.com/obj/ttfe/adfe/platform/creative_type/V5/5_S.svg" alt=""></div>
                                                            <div data-v-c8213c9c="" class="title">
                                                                横版视频
                                                            </div>

                                                        </div>
                                                    </a></li>
                                                <li class="fui-tabs-nav-item"><a class="fui-tab-nav">
                                                        <div data-v-c8213c9c="" data-v-467d7170="" class="image-mode-tab image-mode-tab-closable">
                                                            <!---->
                                                            <div data-v-c8213c9c="" class="img-box"><img data-v-c8213c9c="" src="//sf1-ttcdn-tos.pstatp.com/obj/ttfe/adfe/platform/creative_type/V3/3_S.svg" alt=""></div>
                                                            <div data-v-c8213c9c="" class="title">
                                                                大图横图
                                                            </div>

                                                        </div>
                                                    </a></li>
                                                <li class="fui-tabs-nav-item"><a class="fui-tab-nav">
                                                        <div data-v-c8213c9c="" data-v-467d7170="" class="image-mode-tab image-mode-tab-closable">
                                                            <!---->
                                                            <div data-v-c8213c9c="" class="img-box"><img data-v-c8213c9c="" src="//sf1-ttcdn-tos.pstatp.com/obj/ttfe/adfe/platform/creative_type/V5/2_S.svg" alt=""></div>
                                                            <div data-v-c8213c9c="" class="title">
                                                                小图
                                                            </div>

                                                        </div>
                                                    </a></li>
                                                <li class="fui-tabs-nav-item"><a class="fui-tab-nav">
                                                        <div data-v-c8213c9c="" data-v-467d7170="" class="image-mode-tab image-mode-tab-closable">
                                                            <!---->
                                                            <div data-v-c8213c9c="" class="img-box"><img data-v-c8213c9c="" src="//sf1-ttcdn-tos.pstatp.com/obj/ttfe/adfe/platform/creative_type/V3/16_S.svg" alt=""></div>
                                                            <div data-v-c8213c9c="" class="title">
                                                                大图竖图
                                                            </div>

                                                        </div>
                                                    </a></li>
                                            </ul>
                                        </div>
                                        <div style="display:none" class="fui-icon fui-icon-angle-right tabs-angle-right is-disabled"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="100%" height="100%">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-467d7170="" class="fui-card fui-card-none-shadow ctt-panel">
                            <!---->
                            <div class="byted-card-header" style="border: none; padding:12px;">
                                <Button color="primary">添加素材</Button>
                            </div>
                            <div class="fui-card-body" style="padding: 0px;">
                                <div data-v-25da4e55="" class="creative-card-container" style="width: calc(50% - 24px);">
                                    <div data-v-43fe58d8="" data-v-25da4e55="" class="creative-video-card procedural-card">
                                        <div data-v-43fe58d8="" class="creative-video-card-wrapper creative-video-card-wrapper-15">
                                            <div data-v-43fe58d8="" class="video-card video-card__video">
                                                <div data-v-b4926adc="" data-v-43fe58d8="" class="card-create card-create-15 card-create-">
                                                    <div data-v-b4926adc="" class="card-create-upload">
                                                        <div data-v-f0212714="" data-v-43fe58d8="" class="upload" data-v-b4926adc="" @click="openModal">
                                                            <p data-v-f0212714="" class="upload-area-text">
                                                                <div data-v-f0212714="" class="upload-icon byted-icon bui-icon-upload" style="fill: rgb(153, 153, 153);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
                                                                        <g fill-rule="nonzero">
                                                                            <path fill-opacity=".01" d="M0 0h16v16H0z"></path>
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.667 8.575v4.092a.667.667 0 0 1-1.334 0v-4.08L6.161 9.765a.667.667 0 1 1-.945-.941l2.312-2.32c.26-.26.68-.26.942-.002l2.377 2.36a.667.667 0 0 1-.94.946l-1.24-1.232zM4.373 7.22a.664.664 0 0 1-.326.187 2.668 2.668 0 1 0 1.349 5.16.667.667 0 0 1 .363 1.283A4.002 4.002 0 0 1 3.354 6.22a4.667 4.667 0 0 1 9.295.033 4 4 0 1 1-2.497 7.595.667.667 0 0 1 .363-1.282A2.669 2.669 0 0 0 13.911 10a2.668 2.668 0 0 0-2.047-2.594.667.667 0 0 1-.507-.561.667.667 0 0 1-.024-.178 3.333 3.333 0 1 0-6.666 0c0 .23-.117.432-.294.552z"></path>
                                                                        </g>
                                                                    </svg></div>上传视频
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div data-v-b4926adc="" class="card-create-button">
                                                        <button class="h-btn" @click="openModal" style="width:100%;background:#F8F8F8">素材库</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-76b48f24="" data-v-43fe58d8="" class="card-tip">
                                                <div data-v-76b48f24="" class="card-tip-info">
                                                    <div data-v-43fe58d8="" data-v-76b48f24="">
                                                        宽高比9:16,视频码率≥516kbps,大小≤100M,分辨率≥720*1280,时长≥4s
                                                    </div>
                                                </div>
                                                <!---->
                                            </div>
                                        </div>
                                        <div data-v-43fe58d8="" class="creative-video-card-wrapper creative-video-card-wrapper-15">
                                            <div data-v-c6ac33dc="" data-v-43fe58d8="" class="creative-image-card image-card-15">
                                                <div data-v-c6ac33dc="" class="creative-image-card-wrapper">
                                                    <div data-v-c6ac33dc="" class="image-card">
                                                        <div data-v-b4926adc="" data-v-c6ac33dc="" class="card-create card-create-15 card-create-md">
                                                            <div data-v-b4926adc="" class="card-create-upload">
                                                                <div data-v-f0212714="" data-v-c6ac33dc="" class="upload" data-v-b4926adc="">
                                                                    <p data-v-f0212714="" class="upload-area-text">
                                                                        <div data-v-f0212714="" class="upload-icon byted-icon bui-icon-upload" style="fill: rgb(153, 153, 153);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="100%" height="100%">
                                                                                <g fill-rule="nonzero">
                                                                                    <path fill-opacity=".01" d="M0 0h16v16H0z"></path>
                                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.667 8.575v4.092a.667.667 0 0 1-1.334 0v-4.08L6.161 9.765a.667.667 0 1 1-.945-.941l2.312-2.32c.26-.26.68-.26.942-.002l2.377 2.36a.667.667 0 0 1-.94.946l-1.24-1.232zM4.373 7.22a.664.664 0 0 1-.326.187 2.668 2.668 0 1 0 1.349 5.16.667.667 0 0 1 .363 1.283A4.002 4.002 0 0 1 3.354 6.22a4.667 4.667 0 0 1 9.295.033 4 4 0 1 1-2.497 7.595.667.667 0 0 1 .363-1.282A2.669 2.669 0 0 0 13.911 10a2.668 2.668 0 0 0-2.047-2.594.667.667 0 0 1-.507-.561.667.667 0 0 1-.024-.178 3.333 3.333 0 1 0-6.666 0c0 .23-.117.432-.294.552z"></path>
                                                                                </g>
                                                                            </svg></div>上传封面
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div data-v-b4926adc="" class="card-create-button">
                                                                <div data-v-c6ac33dc="" data-v-b4926adc="" style="width: 100%; text-align: center;"> <button class="h-btn" style="width:100%;background:#F8F8F8">素材库</button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!---->
                                                    <div data-v-76b48f24="" data-v-c6ac33dc="" class="card-tip">
                                                        <div data-v-76b48f24="" class="card-tip-error">

                                                        </div>
                                                        <div data-v-76b48f24="" class="card-tip-info">
                                                            <div data-v-c6ac33dc="" data-v-76b48f24="">
                                                                建议最佳：宽高比,720*1280≤尺寸≤1440*2560,支持JPG、PNG等图片格式
                                                            </div>
                                                        </div>
                                                        <!---->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-v-25da4e55="" class="remove-card-icon byted-icon bui-icon-close-circle" style="fill: rgb(204, 204, 204);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="100%" height="100%">
                                            <defs>
                                                <path id="close-circle_svg__a" d="M0 0h48v48H0z"></path>
                                            </defs>
                                            <g fill-rule="evenodd">
                                                <mask id="close-circle_svg__b" fill="#fff">
                                                    <use xlink:href="#close-circle_svg__a"></use>
                                                </mask>
                                                <use fill="#FFF" opacity=".01" xlink:href="#close-circle_svg__a"></use>
                                                <path fill-rule="nonzero" d="M26.828 24l4.243-4.243a2 2 0 1 0-2.828-2.828L24 21.172l-4.243-4.243a2 2 0 1 0-2.828 2.828L21.172 24l-4.243 4.243a2 2 0 1 0 2.828 2.828L24 26.828l4.243 4.243a2 2 0 1 0 2.828-2.828L26.828 24zM24 46C11.85 46 2 36.15 2 24S11.85 2 24 2s22 9.85 22 22-9.85 22-22 22z"></path>
                                            </g>
                                        </svg></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 创意选框 end-->
                </div>
            </div>

        </div>
    </div>
    <Modal v-model="opened" :closeOnMask="false">
        <div slot="header" style="padding:20px 0px;">素材库</div>
        <div style="width:907px;height:500px;position:relative">

            <div class="h-uploader-browse-button h-uploader-drop-element" style="height:300px;width:100%;position:absolute; z-index: 1;">

                <div style="text-align:center;width:300px;height:120px;position:absolute;top:50%;left:50%;margin-left:-150px;margin-top:-60px;">
                    <i class="h-icon-upload blue-color" style="font-size: 30px;"></i>
                    <p class="text-center">点击或将文件拖拽到这里上传</p>
                </div>
                <fileUpload :data="uploadData"  :drop="true" :add-index="true" input-id="fileUplaod" ref="uploader" :thread="5" v-model="files" extensions="jpg,gif,png,webp" :post-action="uplodUrl" @input-file="inputFile"></fileUpload>

            </div>

        </div>
        <div slot="footer"><button class="h-btn" @click="opened=false">取消</button></div>
    </Modal>
</div>
</template>

<script>
export default {
    data() {
        return {
            opened: false,
            value1: "",
            param1: ["横幅", "插屏", "激励视频", "信息流"],
            //素材上传相关
            uploadData: {
                token: Utils.getCookie('token'),
                cmdType: JSON.parse(Utils.getCookie('userInfo')).cmdType,
                adType: 1,
                adTypeStyle: 1
            },
            uplodUrl: G.get("env").apiDomin + "/pub/upload/library.do",
            files: [], // 存放在组件的file对象
            filList: {

            }
        };
    },
    methods: {
        openModal() {
            this.opened = true;
        },
        upload() {
            // this.$refs.uploadPush.click();
            document.getElementById('fileUplaod').click();
        },
        // 当 add, update, remove File 这些事件的时候会触发
        inputFile(newFile, oldFile) {
            if (newFile && !oldFile) {
                console.log("add", newFile);
                // 添加文件
            }

            // 上传完成
            if (newFile && oldFile && !newFile.active && oldFile.active) {
                console.log("update", newFile);
                // 获得相应数据
                if (newFile.xhr) {
                    console.log(newFile.response);
                    // this.filList[newFile.id+='']=
                    // this.value.push(newFile.response.data) 
                    this.$refs.uploader.remove(newFile)
                    this.$emit('update:value', this.value)
                }
            }

            // 自动上传
            if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
                if (!this.$refs.uploader.active) {
                    this.$refs.uploader.active = true
                }
            }
        },
        // 文件过滤，可以通过 prevent 来阻止上传
        inputFilter(newFile, oldFile, prevent) {
            if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
                // 自动压缩

                this.$refs.uploader.update(newFile, {
                    error: err.message || 'compress'
                })

            }
        },
        remove(index, isValue) {
            if (isValue) {
                this.value.splice(index, 1)
                this.$emit('update:value', this.value)
            } else {
                this.$refs.uploader.remove(this.files[index])
            }
        },
        preview(index) {
            console.log(index);
        }
    },
    computed: {

    }
}
</script>
