<style lang="less">
.mediaTpl {
    width:100%;
    padding: 10px;
    overflow: hidden;
    .imgBoxList3 {
        text-align: center;
        font-size: 0px;
        margin: auto;

        div:first-child {
            margin-right: 0px;
        }

        div:last-child {
            margin-left: 0px;
        }

        div {
            width: 30%;
            font-size: 0px;
            margin-left: 1.5%;
            margin-right: 1.5%;
            overflow: hidden;
            display: inline-block;

            img {
                font-size: 0px;
                border-radius: 4px;
            }

        }
    }

    .imgBoxList1 {
        width: 100%;
        div {
            text-align: center;
        }
    }
}
</style>
<template>
<div class="mediaTpl">
    <!-- 多图 单图-->
    <div :class="{'imgBoxList1':urlList.length==1,'imgBoxList3':urlList.length>1}" style="fongt-size:0px;">
        <div v-for="(item,index) in urlList" :key="index">
            <img :src="item" height="80" />
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
                return ["http://image.huashengerge.com/pic/2020/4/22/158753492433274145.png","http://image.huashengerge.com/pic/2020/4/22/158753492433274145.png"];
            }
        },
        type: [String, Number]
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
