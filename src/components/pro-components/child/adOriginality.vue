<style lang="less">
.adOrigin {
    .mask_upload {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: none;
    }

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

        .num-badge {
            width: 30px;
            position: absolute;
            top: 2px;
            background: #3788ee;
            color: #fff;
            text-align: center;
            left: -1px;
            border-radius: 4px;
            font-size: 12px;
        }
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

    .uploadType:hover {
        color: #3788ee;
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

.uploadIconClose,
.uploadCheckbox {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    z-index: 10;
    text-align: center;
    line-height: 30px;
    background: #ffffffb8;
    border-radius: 50%;
    cursor: pointer;

    i {
        font-size: 20px;
        text-align: center;
        line-height: 30px;
    }
}

.uploadCheckbox {
    left: 10px;
}

.uploadIconClose:hover {
    color: #66a4f2;
    transform: rotate(180deg);
    transition: all ease 0.5s;

}

.uploadIconClose {
    right: 10px;
}

.videoBoxItem {
    margin: 5px;
    display: inline-block;
    width: 200px;
    height: 210px;
    background: black;
    position: relative;
}
</style>
<template>
<div class="adOrigin">
    <Form :model="formData" ref="form" :rules="rules" :validOnChange="true">
        <div class="moduler ad-group-moduler" v-listenTop:0="testall">
            <div class="ad-row-title moduler-title">
                所属计划
            </div>
            <div class="ad-group ad-font-size">
                计划名称：<strong data-no-translate="">{{planName||formData.planName}}</strong></div>
        </div>
        <div class="moduler" style="min-height:200px;" v-listenTop:1="testall">
            <Loading text="模块加载中" :loading="videwList.length>0?false:true"></Loading>
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
                        <SwitchList keyName="id" titleName="name" v-model="selectedAdType" :datas="videwList" @change="changeAdType">
                           
                        </SwitchList>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item">

                    </div>
                    <div class="label-item label-size-normal">

                    </div>
                    <div class="input-item">
                        <!-- 创意选框 -->
                        <div class="creative-type-tab-procedural" id="row_id_making_procedural_info">
                            <div class="ctt-type-list">
                                <div class="fui-tabs fui-tabs-sm fui-tabs-line">
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
                                                    <!-- image-mode-tab-active  选中class-->
                                                    <li class="fui-tabs-nav-item" v-for="(item,index) in adStyle" :key="index" @click="selectedAdstyle=item.id,selectMediaType=item.mediaType,selectMediaSize=item.mediaSize"><a class="fui-tab-nav">
                                                            <div class="image-mode-tab  image-mode-tab-closable" :class="{'image-mode-tab-active':item.id==selectedAdstyle}">
                                                                <!---->
                                                                <div class="num-badge" v-show="item.viewSize>0">
                                                                    {{item.viewSize}}
                                                                </div>
                                                                <div class="img-box"><img :src="item.icon" alt=""></div>
                                                                <div class="title">
                                                                    {{item.name}}
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
                            <div class="fui-card fui-card-none-shadow ctt-panel">
                                <!---->
                                <div class="byted-card-header" style="border: none; padding:12px;">

                                </div>
                                <div class="fui-card-body" style="padding: 0px;">
                                    <!-- 视频 -->
                                    <div>
                                        <div v-for="(item,index) in currentViews" :key="index" class="creative-card-container" style="width:30.33%;display:inline-block;height:200px;padding:10px;">
                                            <div class="upload">
                                                <mediaTpl style="width:100%;" :urlList="item.mediaUrl&&item.mediaUrl.split(',')" :fmUrl='item.fmUrl' />
                                            </div>
                                            <div @click="removeView(item.id)" class="remove-card-icon byted-icon bui-icon-close-circle" style="fill: rgb(204, 204, 204);"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="100%" height="100%">
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
                                        <div class="creative-card-container" style="width:30.33%;display:inline-block;height:200px;padding:10px;">
                                            <div class="upload">
                                                <!-- <div class="uploadType"><i class="h-icon-upload"></i>素材</div> -->
                                                <div v-if="selectMediaType==1" class="uploadType" style="margin:10px;" @click="opened=true"><i class="h-icon-upload"></i>上传素材</div>

                                                <div v-if="selectMediaType==2" class="uploadType" style="margin:10px;" @click="videoUpload=true"><i class="h-icon-upload"></i>上传素材</div>
                                            </div>

                                        </div>
                                    </div>

                                    <!-- 视频end -->
                                </div>
                            </div>
                        </div>
                        <!-- 创意选框 end-->
                    </div>
                </div>

            </div>
        </div>
        <div class="moduler" style="min-height:200px;" v-listenTop:2="testall">
            <Loading text="模块加载中"></Loading>
            <div class="ad-row-title moduler-title">
                创意内容
                <!-- <span class="help-frame-link no-selec">了解详情</span> -->
            </div>
            <div class="ad-range">
                <div class="row-item">
                    <div class="hint-item">

                    </div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">产品名称</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="productName" label="产品名称" :showLabel="false">
                            <input v-width="480" type="text" v-model="formData.productName" />
                        </FormItem>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item">

                    </div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">创意标题</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="ideaTitle" label="创意标题" :showLabel="false">
                            <input v-width="480" type="text" v-model="formData.ideaTitle" />
                        </FormItem>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item">

                    </div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">副标题</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="ideaSubtitle" label="创意副标题" :showLabel="false">
                            <input v-width="480" type="text" v-model="formData.ideaSubtitle" />
                        </FormItem>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item">

                    </div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">内容描述</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="context" label="创意描述" :showLabel="false">
                            <textarea rows="3" v-autosize v-wordcount="50" v-model="formData.context" v-width="480"></textarea>
                        </FormItem>
                    </div>
                </div>
            </div>
        </div>
        <div class="moduler" style="min-height:200px;" v-listenTop:3="testall">
            <Loading text="模块加载中"></Loading>
            <div class="ad-row-title moduler-title">
                创意配置
                <!-- <span class="help-frame-link no-selec">了解详情</span> -->
            </div>
            <div class="ad-range">
                <div class="row-item">
                    <div class="hint-item">

                    </div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">跳转类型</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <SwitchList v-model="formData.clickType" :datas="clickType"></SwitchList>
                    </div>
                </div>
                <div class="row-item">
                    <div class="hint-item">
                    </div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">链接</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="clickUrl" label="链接" :showLabel="false">
                            <input v-width="480"  type="text" v-model="formData.clickUrl" />
                        </FormItem>
                    </div>
                </div>
                <div class="row-item" v-if="formData.clickType==2">
                    <div class="hint-item">
                    </div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">包名</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="packageName" label="跳转链接" :showLabel="false">
                            <input v-width="480" type="text" v-model="formData.packageName" />
                        </FormItem>
                    </div>
                </div>

            </div>
        </div>
           <div class="moduler" style="min-height:200px;">
            <Loading text="模块加载中"></Loading>
            <div class="ad-row-title moduler-title">
                创意名称
                <!-- <span class="help-frame-link no-selec">了解详情</span> -->
            </div>
            <div class="ad-range">
                <div class="row-item">
                    <div class="hint-item">

                    </div>
                    <div class="label-item label-size-normal">
                        <div class="text-item">创意名称</div>
                        <div class="required-item"></div>
                    </div>
                    <div class="input-item">
                        <FormItem prop="ideaName" label="创意名称" :showLabel="false">
                            <input v-width="480" type="text" v-model="formData.ideaName" />
                        </FormItem>
                    </div>
                </div>
            
            </div>
        </div>
        <!-- 素材上传区域 -->
        <Modal v-model="opened" :closeOnMask="false">
            <div slot="header" style="padding:10px 10px;">
                <div class="tab-header">
                    <Tabs :datas="param" class-name="h-tabs-Upload" v-model="selected" @change="change"></Tabs>
                </div>
                <!-- {{selectMediaType}}{{styleFm}}
                {{selectVideoImg}}{{selectImg}} -->
                <!-- 封面素材 -->
                <div v-if="selected=='module2'&&styleFm==1&&selectedAdType==5" style="font-size:14px;">已选：{{selectVideoImg.length}}/{{selectMediaSize}}个封面素材</div>
                <!-- 正常的素材 -->
                <div v-else-if="selected=='module2'" style="font-size:14px;">已选：{{selectImg.length}}/{{selectMediaSize}}个媒体素材</div>
            </div>
            <!-- 本地上传 -->
            <div v-show="selected=='module1'" style="width:907px;height:500px;position:relative">
                <div class="h-uploader-browse-button h-uploader-drop-element" style="height:300px;width:100%;position:relative">
                    <label for="fileUplaod">
                        <div style="text-align:center;width:250px;height:120px;position:absolute;top:50%;left:50%;margin-left:-150px;margin-top:-60px;">
                            <i class="h-icon-upload blue-color" style="font-size: 30px;"></i>
                            <p class="text-center">点击此处上传文件</p>
                            <p class="text-center">上传确认尺寸信息</p>
                        </div>
                    </label>

                </div>
                <div class="clearfix" style="width:100%;margin-top:10px;margin-bottom:10px;padding:10px;"><span style="float:left;">文件名/类型</span><span style="float:right;">上传状态</span></div>
                <div style="height:120px;width:100%;overflow-y:scroll;border:solid 1px #eee">
                    <div class="clearfix" style="padding:10px;" v-for="(file,index) in files" :key="index">
                        <div style="float:left">{{file.name}}</div>
                        <div style="float:right;width:200px;"><span>{{Math.floor(Number(file.speed/1000))}}kb/s</span><Progress :percent="Number(file.progress)" :stroke-width="6"><span slot="text" style="width:20px;">{{ file.progress }} %</span></Progress></div>
                    </div>
                </div>
            </div>
            <!-- 本地上传end -->
            <!-- 素材库 -->
            <div v-show="selected=='module2'" style="padding:10px;width:907px;height:400px;position:relative;overflow-y:scroll;border:solid 1px #eee;font-size:0px;">
                <Loading text="素材加载中..." :loading="LibraryLoading"></Loading>
                <!-- 视频 -->
                <div v-if="styleFm==0&&this.selectedAdType==5">
                    <div class="videoBoxItem" v-for="(item,index) in LibraryList" :key="index" style="border-radius:4px;overflow:hidden;">
                        <video controls :src="item.libraryUrl" width="100%" height="100%"></video>
                        <div class="uploadIconClose" @click="deleteLib(item.id)" v-show="(selectImg.length==0||selectImg.indexOf(item.libraryUrl)<0)"><i class="h-icon-error"></i></div>
                        <div class="uploadCheckbox">
                            <Checkbox v-model="selectImg" :value="item.libraryUrl" v-show="(selectImg.length==0||selectImg.indexOf(item.libraryUrl)>-1)||selectImg.length<selectMediaSize"></Checkbox>
                        </div>
                    </div>

                </div>
                <!-- 封面专属 -->
                <waterfall v-else-if="styleFm==1&&this.selectedAdType==5" :col='4' :data="LibraryList" :width="210" ref="waterfall">
                    <template>
                        <div v-for="(item,index) in LibraryList" :key="index" style="width:100%;position:relative;">
                            <div class="uploadIconClose" @click="deleteLib(item.id)"  v-show="(selectVideoImg.length==0||selectVideoImg.indexOf(item.libraryUrl)<0)"><i class="h-icon-error"></i></div>
                            <div class="uploadCheckbox" v-show="(selectVideoImg.length==0||selectVideoImg.indexOf(item.libraryUrl)>-1)||selectVideoImg.length<selectMediaSize">
                                <Checkbox v-model="selectVideoImg" :value="item.libraryUrl"></Checkbox>
                            </div>
                            <img v-if="item.libraryUrl" :src="item.libraryUrl" width="100%" alt="load error" style="border-radius:5px;overflow:hidden;" @click="openPreview(item.libraryUrl)" />
                        </div>
                    </template>
                </waterfall>
                <!-- 图片 -->
                <waterfall v-else :col='4' :data="LibraryList" :width="210" ref="waterfall">
                    <template>
                        <div v-for="(item,index) in LibraryList" :key="index" style="width:100%;position:relative;margin-top:10px;">
                            <div class="uploadIconClose" @click="deleteLib(item.id)" v-show="(selectImg.length==0||selectImg.indexOf(item.libraryUrl)<0)"><i class="h-icon-error"></i></div>
                            <div class="uploadCheckbox"  v-show="(selectImg.length==0||selectImg.indexOf(item.libraryUrl)>-1)||selectImg.length<selectMediaSize">
                                <Checkbox v-model="selectImg" :value="item.libraryUrl"></Checkbox>
                            </div>
                            <img v-if="item.libraryUrl" :src="item.libraryUrl" width="100%" alt="load error" style="border-radius:5px;overflow:hidden;" @click="openPreview(item.libraryUrl)" />
                        </div>
                    </template>
                </waterfall>
            </div>
            <!-- 素材库 end-->
            <fileUpload :data="uploadData" :multiple="true" :drop="true" input-id="fileUplaod" ref="uploader" :thread="5" v-model="files" :accept="styleFm==1?'image/*':uploadFilter.accept" extensions="jpg,gif,png,webp,mp4" :post-action="uplodUrl" @input-file="inputFile">
            </fileUpload>
            <div slot="footer">
                <Pagination v-if="selected=='module2'" v-model="pagination" @change="currentChange" layout="pager" small></Pagination>
                <Button v-if="selectedAdType=='5'" color="primary" @click="opened=false,saveVideo()">确定</Button>
                <Button v-if="selectedAdType!='5'" :loading="addViewLoading" color="primary" @click="addViews">提交</Button>
                <Button :loading="files.length>0" color="primary" @click="opened=false,selectImg=[],selectVideoImg=[]">关闭</Button>
                <Poptip style="margin-left:20px;" v-if="files.length>0" :content="'你确定要取消当前正在进行的'+files.length+'个上传任务吗？'" @confirm="stopUpload"><button class="h-btn">取消上传</button></Poptip>
            </div>
        </Modal>

        <Modal v-model="videoUpload" :closeOnMask="false">
            <div slot="header">上传视频素材</div>
            <div class="upload">

                <div style="width:200px;display:inline-block;text-align:center;">
                    <video v-if="selectImg[0]" controls :src="selectImg[0]" width="100%"></video>
                    <div class="uploadType" style="cursor:pointer;width:100%;border:solid 1px #eee;text-align:center;" @click="opened=true,styleFm=0,selectImg=[]">
                        <i class="h-icon-upload"></i>上传视频
                    </div>
                </div>
                <div style="width:200px;display:inline-block;text-align:center;">
                    <img v-if="selectVideoImg[0]" :src="selectVideoImg[0]" width="100%" />
                    <div class="uploadType" style="cursor:pointer;width:100%;border:solid 1px #eee;text-align:center;" @click="opened=true,styleFm=1,selectVideoImg=[]"><i class="h-icon-upload"></i>上传封面</div>
                </div>
            </div>
            <div slot="footer">
                <Button v-if="selectVideoImg.length==1&&selectImg.length==1" color="primary" @click="addViews(),styleFm=0">确认</Button>
                <Button @click="videoUpload=false,selectVideoImg=[],selectImg=[],styleFm=0">取消</Button>
            </div>
        </Modal>
        <div class="panel_moduler" style="min-width: 1048px;padding-top: 24px; padding-bottom: 24px;text-align:right;">
            <Button color="primary" size="l" @click="submit">提交</Button>
        </div>
    </Form>
</div>
</template>

<script>
import mediaTpl from "components/pro-components/child/mediaTpl"
export default {
    name: "adOriginality",
    props: ["planId", "planName", 'ideaid'],
    components: {
        mediaTpl
    },
    data() {
        return {
            formData: {
                clickType: 1,
                planId: this.planId,
                id: this.ideaid, //默认取生成的如果拉取的数据有则此Id 会被拉取的id 替换 //默认取传入id
                ideaName:!this.ideaid&&this.planName+"_"
            },
            styleFm: 0, //视频封面的标识
            videwList: [],
            pagination: {
                page: 1,
                size: 20,
                total: 20
            },
            ideaId:this.ideaid || "",
            LibraryLoading: false,
            addViewLoading: false,
            videoUpload: false,
            opened: false,

            //广告类型
            selectedAdType: "1",
            adTypeList: [],
            //广告类型的样式
            adStyle: [],
            selectedAdstyle: "",
            selectMediaType: 1, //选择素材的类型
            selectMediaSize: 0, //允许选择素材的数量
            mediaTypeDict: {
                "1": "图片",
                "2": "视频"
            },
            uploadFilterDict: {
                "1": "image/*",
                "2": "video/*"
            },
            clickType: {
                1: "链接",
                2: "下载"
            },
            putStatus: {
                "0": "禁用",
                "1": "启用"
            },

            uplodUrl: G.get("env").apiDomin + "/pub/upload/library.do",
            files: [], // 存放在组件的file对象
            param: {
                module1: '本地上传',
                module2: '素材库选择'
            },
            selected: 'module1', //上传框选项
            selectImg: [], //素材库选中的素材
            selectVideoImg: [], //素材库选中的视频图片
            LibraryList: [],
            addCurrentView: null,
            currentViews: [],
            rules: {
                required: [

                    "ideaName",
                    "productName",
                    "ideaTitle",
                    "ideaSubtitle",
                    "context",
                    "clickUrl",
                    "packageName"
                ]
            }

        };
    },
    mounted() {
        //获取AdType
        //获取Idea
        this.$emit('activeStep', {
            key: '2',
            step: '0'
        });
        if (!this.ideaid) {
            R.Library.getIdea({}).then((resp) => {
                if (resp.ok) {
                    this.ideaId = resp.data.id;
                    this.formData.id = resp.data.id;
                    this.getViews();
                }
            })

        } else {
            this.initData();
            this.getViews();
        }

    },
    methods: {
        //step
        testall(val, step) {
            if (val.top <= 130) {
                this.$emit('activeStep', {
                    key: '2',
                    step: step
                });
            }
        },
        //保存视频
        saveVideo() {
            // console.log(this.selectVideoImg);
            console.log('已选择的视频', this.selectImg);
            console.log('已选择的封面', this.selectVideoImg)
        },
        changeAdType(data) {
            this.adStyle = data.styleList;

        },
        getViews(id) {
            R.Library.getViews({
                id: this.ideaId
            }).then((res) => {
                if (res.ok) {
                    this.videwList = res.data;
                    // this.$set('','videwlist',res.data);
                    this.adStyle = res.data[0].styleList;
                    this.selectMediaType = this.adStyle.mediaType;
                    this.selectMediaSize = this.adStyle.mediaSize;

                }
            })
        },
        addViews() {
            this.addViewLoading = true;
            R.Library.addViews({
                ideaId: this.ideaId,
                mediaType: this.selectMediaType,
                adType: this.selectedAdType,
                adTypeStyle: this.selectedAdstyle,
                mediaUrl: this.selectImg.join(","),
                fmUrl: this.selectVideoImg.join(",")
            }).then(res => {
                this.addViewLoading = false;
                if (res.ok) {
                    this.$Message.success("添加成功");
                    this.opened = false;
                    this.videoUpload = false;
                    this.selectImg = [];
                    this.selectVideoImg = [];
                    this.getViewList();
                    //重置数量
                    this.adStyle && this.adStyle.forEach(element => {

                        if (element.id == this.selectedAdstyle) {
                            element.viewSize += 1;
                        }
                    });

                }
            })
        },
        change(data) {

            if (data.key == "module2") {
                //获取素材
                this.getLibList();
            }

        },
        currentChange(value) {
            this.getLibList();
        },
        getLibList() {
            this.LibraryList = [];
            this.LibraryLoading = true;
            R.Library.getLibrary({
                page: this.pagination.page,
                limit: this.pagination.size,
                data: {
                    adType: this.selectedAdType,
                    adTypeStyle: this.selectedAdstyle,
                    styleFm: this.styleFm,
                }
            }).then(resp => {
                this.LibraryLoading = false;
                if (resp.ok) {
                    this.LibraryList = resp.data.list;
                    this.pagination.total = resp.data.total;
                    // this.$nextTick(() => {
                    //     this.$waterfall.forceUpdate();
                    // })

                }

            })
        },
        openModal() {
            this.opened = true;
        },
        stopUpload() {
            //终止上传操作
            this.$refs.uploader.active = false;
            this.$refs.uploader.clear();
            this.files = [];
            this.opened = false;
        },
        upload() {
            // this.$refs.uploadPush.click();
            document.getElementById('fileUplaod').click();
        },
        // 当 add, update, remove File 这些事件的时候会触发
        inputFile(newFile, oldFile) {
            if (newFile && !oldFile) {
                // 添加文件
            }
            // 上传完成
            if (newFile && oldFile && !newFile.active && oldFile.active) {

                // 获得相应数据
                if (newFile.xhr) {
                    // console.log(newFile.response);
                    // this.value.push(newFile.response.data);
                    this.$refs.uploader.remove(newFile)
                    if (newFile.response.code == 0) {
                        this.$refs.uploader.remove(newFile);
                    }

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
                this.$refs.uploader.update(newFile, {
                    error: err.message || 'compress'
                })

            }
        },
        removeUploadFile(index, isValue) {
            if (isValue) {
                this.value.splice(index, 1)
                this.$emit('update:value', this.value)
            } else {
                this.$refs.uploader.remove(this.files[index])
            }
        },
        openPreview(url) {
            //图片预览
            this.$ImagePreview(url);
        },
        //删除素材库素材
        deleteLib(id) {
            this.$Confirm('确定删除？', '删除素材').then(() => {
                this.LibraryLoading = true;
                R.Library.deleteLibrary({
                    id: id
                }).then((resp) => {
                    this.LibraryLoading = false;
                    if (resp.ok) {
                        this.$Message.success(resp.msg);
                        this.getLibList();
                    }
                })
            })

        },

        getViewList() {
            R.Library.getView({
                ideaId: this.ideaId,
                adType: this.selectedAdType,
                adTypeStyle: this.selectedAdstyle
            }).then((resp) => {
                if (resp.ok) {
                    // console.log(resp);
                    this.currentViews = resp.data;
                }
            })
        },
        //创意列表添加
        //删除素材
        removeView(id) {
            R.Library.removeView({
                id: id
            }).then(res => {
                if (res.ok) {
                    this.$Message.success("删除成功");
                    this.getViewList();
                    //重置数量
                    this.adStyle && this.adStyle.forEach(element => {

                        if (element.id == this.selectedAdstyle) {
                            element.viewSize -= 1;
                        }
                    });
                }
            })
        },
        submit() {
            if (this.ideaid) {
                R.adIdea.update({
                    ...this.formData
                }).then(res => {
                    if (res.ok) {
                        this.$Message.success(res.msg);
                        this.$router.replace({
                            name: 'extension'
                        });
                    }
                })
            } else {
                R.adIdea.update({
                    ...this.formData
                }).then(res => {
                    if (res.ok) {
                        this.$Message.success(res.msg);
                        this.$router.replace({
                            name: 'extension'
                        });
                    }
                })
            }

        },
        initData() {
            //初始化数据内容
            //检测是否是修改还是添加 路由有ideaid 为修改  没有为提添加

            if (this.ideaid) {
            this.$Loading();
            R.adIdea
                .get({
                    data: {
                        id: this.ideaid
                    },
                    page: 1,
                    limit: 1
                })
                .then(res => {
                    if (res.ok) {
                        this.$Loading.close();
                        this.formData = res.data.list[0];

                    }
                });
            }

        }

    },
    computed: {
        //上传参数
        uploadData() {
            let adType = this.selectedAdType;
            let adTypeStyle = this.selectedAdstyle;
            let styleFm = this.styleFm;
            return {
                token: Utils.getCookie('token'),
                cmdType: JSON.parse(Utils.getCookie('userInfo')) && JSON.parse(Utils.getCookie('userInfo')).cmdType || 1,
                adType: adType,
                adTypeStyle: adTypeStyle,
                styleFm: styleFm,

            }
        },
        uploadFilter() {
            //文件上传过滤
            let accept = this.uploadFilterDict[this.selectMediaType + ''];
            return {
                accept: accept
            }

        }
    },
    watch: {
        selectedAdType: {
            handler: function (newVal, old) {},
            immediate: true
        },
        adStyle: {
            handler: function (newval, old) {
                this.selectedAdstyle = newval[0].id;
                this.selectMediaType = newval[0].mediaType;
                this.selectMediaSize = newval[0].mediaSize;
            }
        },
        opened: {
            handler: function (newval, old) {

                if (this.selected == "module2" && newval) {
                    this.getLibList();
                }

            }
        },
        selectedAdstyle: {
            handler: function (newval, old) {
                //获取viewList数据
                this.getViewList();
            }
        }

    },
}
</script>
