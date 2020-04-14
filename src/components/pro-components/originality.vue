<style lang="less">
.originality {
    .nav-left {
        position: absolute;
        overflow: auto;
        width: 200px;
        height: calc(100vh - 65px);
        box-shadow: 0px 2px 4px 0px #eff1fa;

        .nav-left-content {
            min-height: calc(100vh - 65px);
            background: #fff;
            overflow-y: auto;
            overflow-x: hidden;
            padding-bottom: 36px;

            .step-block {
                user-select: none;
                padding: 16px 0px 0 24px;

                .main-title {
                    position: relative;
                    color: #666;
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 16px;
                    height: 22px;

                    .nav-icon {
                        display: inline-block;
                    }

                    span {
                        font-size: 14px;
                        padding-left: 8px;
                        position: absolute;
                        top: 3px;
                        left: 26px;
                    }

                    span.is-active {
                        color: #2f88ff;
                    }
                }
            }

            .step-block.active .sub-title-dashed {
                background-repeat: repeat-y;
                background-image: radial-gradient(#ccc 15%, transparent 0), radial-gradient(#ccc 15%, transparent 0);
                background-size: 14px 14px;
            }

            .step-block .sub-title-dashed {
                background-repeat: repeat-y;
                background-image: radial-gradient(#598fe6 15%, transparent 0), radial-gradient(#598fe6 15%, transparent 0);
                background-size: 14px 14px;
            }

            .step-block.forbidden .sub-title-dashed {
                background-repeat: repeat-y;
                background-image: radial-gradient(#ccc 15%, transparent 0),radial-gradient(#ccc 15%, transparent 0);
                background-size: 14px 14px;
            }

            .step-block.create.complete img {
                display: block;
            }

            .step-block .sub-title ul {
                margin: 0 0 0 20px;
                padding: 0 0 0 9px;
            }

            .step-block.active .sub-title li.active {
                color: #333333;
            }

            .step-block .sub-title ul li {
                cursor: not-allowed;
                font-weight: 300;
                list-style: none;
                margin-bottom: 13px;
                display: block;
                text-decoration: none;
                color: #C1C1C1;
                font-size: 14px;
                user-select: none;
            }
        }

        .en-fold-nav-open {
            position: fixed;
            bottom: 0;
            width: 200px;
            height: 36px;
            background-color: #fff;
            border-top: 1px solid #DEE4F5;

            img {
                margin-left: 151px;
                margin-top: 11px;
            }
        }
    }

    .ad-con-right-fold {
        margin-left: 56px;
        padding: 12px;
        position: absolute;
        height: calc(100vh - 65px);
        overflow: auto;
        width: calc(100% - 56px);
        z-index: 666;
    }

    .ad-con-right {
        margin-left: 200px;
        padding: 16px;
        position: absolute;
        height: calc(100vh - 65px);
        overflow: auto;
        width: calc(100% - 200px);
    }

    .moduler {
        background: #fff;
        margin-bottom: 16px;
        position: relative;
        min-width: 1130px;
        padding: 32px 24px 48px 32px;
        border-radius: 4px;
        box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.05);

        .moduler-title {
            display: flex;
            align-items: center;
        }

        .ad-row-title {
            font-size: 22px;
            margin-bottom: 32px;
        }

        .ad-group {

            line-height: 20px;
            padding-left: 24px;
        }

        .ad-font-size {
            font-size: 14px;
            line-height: 20px;
        }

        .ad-moduler-wrap .help-frame-link {
            font-size: 14px;
            line-height: 14px;
            padding-left: 8px;
            margin-left: 0;
            color: #2F88FF;
        }

        .help-frame-link {
            font-size: 12px;
            color: #2F88FF;
            line-height: 12px;
            margin-left: 16px;
            display: inline-block;
            cursor: pointer;
        }
    }
}
</style>
<template>
<div class="originality">
    <div class="nav-left">
        <div class="nav-left-content">
            <div v-for="(item,index) in stepParms" :key="index" class="step-block create" :class="{complete:stepData.key>index,active:stepData.key==index,forbidden:stepData.key<index}">
                <div class="main-title">
                    <!---->
                    <div class="nav-icon">
                        <img v-if="index==0&&stepData.key==index" src="../../images/proimg/b1.svg"/>
                        <img v-if="index==1&&stepData.key==index" src="../../images/proimg/b2.svg"/>
                        <img v-if="index==2&&stepData.key==index" src="../../images/proimg/b3.svg"/>
                        <img v-if="index==0&&stepData.key<index" src="../../images/proimg/g1.svg"/>
                        <img v-if="index==1&&stepData.key<index" src="../../images/proimg/g2.svg"/>
                        <img v-if="index==2&&stepData.key<index" src="../../images/proimg/g3.svg"/>
                        <!-- <img  src="../../images/proimg/b2.svg"/>
                        <img  src="../../images/proimg/b3.svg"/> -->
                        <img  v-if="stepData.key>index" src="../../images/proimg/check.svg"/>
                        <!-- <img  src="../../images/proimg/g1.svg"  />
                        <img  src="../../images/proimg/g2.svg" />
                        <img  src="../../images/proimg/g3.svg" /> -->
                    </div>
                    <span class>{{item.title}}</span>
                </div>
                <div class="sub-title sub-title-dashed">
                    <ul>
                        <li v-for="(item,index) in item.subs" :key="index" :class="{active:stepData.step==index}">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <!---->
        <div class="en-fold-nav-open">
            <img src="//s1.pstatp.com/bytecom/platform_web/static/image/close-nav.svg?52093c43ad6b7f61651592ad3f372b09" />
        </div>
    </div>
    <!-- 文本信息 -->
    <router-view class="ad-moduler-wrap ad-con-right" @activeStep="activeStep"></router-view>
    <!-- <div class="ad-moduler-wrap ad-con-right">
        <div class="moduler ad-group-moduler">
            <div class="ad-row-title moduler-title">
                所属计划
            </div>
            <div class="ad-group ad-font-size">
                计划名称：<strong>1.20-头条-APP行为-儿童玩具（1656236015459380）</strong></div>
        </div>
        <div class="moduler ad-group-moduler;">
            <div class="ad-row-title moduler-title">
                制作创意
                <span class="help-frame-link no-selec">了解详情</span>
            </div>
            <div class="ad-group">
                 计划名称：<strong>1.20-头条-APP行为-儿童玩具（1656236015459380）</strong>
            </div>

        </div>
    </div> -->
</div>
</template>

<script>
export default {
    data() {
        return {
            //步骤条 calss "complete" 完成  "active" 正在填写项 "forbidden" 未填写
            stepParms:[
                {
                    title:'广告组',
                    sIcon:"",
                    subs:["推广目的"]
                },
                {
                    title:'广告计划',
                    sIcon:"",
                    subs:["所属广告组","投放范围","投放目标","用户定向","预算与出价","计划名称"]
                },
                {
                    title:'广告创意',
                    sIcon:"",
                    subs:["所属计划","设置投放位置","制作创意","创意分类","监测链接"]
                }
                
            ],
            stepData:{
                
            }
        };
    },
    mounted() {
       
    },
    methods: {
        activeStep(val){
            // console.log(val,"接收的参数")
            this.stepData=val;
        },
        
    },
    computed: {}
};
</script>
