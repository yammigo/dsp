<style lang="less">
.mediaTpl {
    width: 100%;
    padding: 10px;
    overflow: hidden;

    .imgBoxList3 {

        font-size: 0px;
        margin: auto;

        div {
            width:25%;
            font-size: 0px;
            margin-left: 10px;
            margin-right: 10px;
            overflow: hidden;
            display: inline-block;
            text-align: center;
            border-radius:4px;
            overflow: hidden;
            img {
                font-size: 0px;
                border-radius: 4px;
            }

        }

        div:first-child {
            margin-right: 0px;
        }

        div:last-child {
            margin-left: 0px;
        }
    }
    .imgBoxList2 {

        font-size: 0px;
        margin: auto;

        div {

            font-size: 0px;
            text-align: center;
            width:50%;
            overflow: hidden;
            display: inline-block;

            img {
                font-size: 0px;
                border-radius: 4px;
            }

        }
    }

    .imgBoxList1 {
       

        div {
            text-align: center;
            border-radius:4px;
            overflow: hidden;
            img{
                border-radius:4px;
            }
        }
    }

    .videoBox {
        div:first-child {
            margin-right: 0px;
        }

        div:last-child {
            margin-left: 0px;
        }

        div {
            font-size: 0px;
            margin-left: 1.5%;
            margin-right: 1.5%;
            overflow: hidden;
            display: inline-block;
            width:45%;

            video {
                border-radius: 4px;
            }

            img {
                font-size: 0px;
                border-radius: 4px;
            }

        }
    }
}
</style>
<template>
<div class="mediaTpl">

    <!-- 视频 -->
    <div v-if="fmUrl" class="videoBox" style="fongt-size:0px;">
        <div>
            <video controls :src="urlList[0]" height="100"></video>
        </div>
        <div>
            <img :src="fmUrl" height="100" />
        </div>
    </div>
    <!-- 多图 单图-->
    <div v-else :class="{'imgBoxList1':urlList.length==1,'imgBoxList2':urlList.length==2,'imgBoxList3':urlList.length>2}" style="fongt-size:0px;">
        <div v-for="(item,index) in urlList" :key="index">
            <img :src="item" height="100" />
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        urlList: {
            type: Array,
            default: () => {
                return [];
            }
        },
        fmUrl: {
            type: String,
            default: function () {
                return ""
            }
        },
        type: [String]
    },
    data() {
        return {

        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {

        }
    },
    computed: {

    }
}
</script>
