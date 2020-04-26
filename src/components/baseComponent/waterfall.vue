<template>
<div class="waterfull">
    <h2>瀑布流布局</h2>
    <div class="v-waterfall-content" id="v-waterfall">
        <div v-for="(img, index) in waterfallList" :key="index" class="v-waterfall-item" :style="{top:img.top+'px',left:img.left+'px',width:waterfallImgWidth+'px',height:img.height}">
                <img :src="img.src" alt="">
            <slot>
            </slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:{
      datas:{
        adType:Array,
        default:function(){
          return []  
        }
      }
    },
    name: "v-waterfall",
    data() {
        return {
            waterfallList: [],
            propdata: [{
                "adType": 1,
                "adTypeName": "横幅",
                "adTypeStyle": 101,
                "adTypeStyleName": "横幅-大图",
                "createTime": "2020-04-22 13:55:23",
                "id": 122,
                "libraryUrl": "http://image.huashengerge.com/pic/2020/4/22/158753492311670082.jpg",
                "styleFm": 0,
                "userId": 3,
                "userName": "guodong"
            }, {
                "adType": 1,
                "adTypeName": "横幅",
                "adTypeStyle": 101,
                "adTypeStyleName": "横幅-大图",
                "createTime": "2020-04-22 13:55:23",
                "id": 121,
                "libraryUrl": "http://image.huashengerge.com/pic/2020/4/22/158753492304144591.jpg",
                "styleFm": 0,
                "userId": 3,
                "userName": "guodong"
            }, {
                "adType": 1,
                "adTypeName": "横幅",
                "adTypeStyle": 101,
                "adTypeStyleName": "横幅-大图",
                "createTime": "2020-04-22 13:55:23",
                "id": 117,
                "libraryUrl": "http://image.huashengerge.com/pic/2020/4/22/158753492251443924.JPG",
                "styleFm": 0,
                "userId": 3,
                "userName": "guodong"
            }],
            // waterfallImgWidth: 100,
            waterfallImgWidth: 200, // 每个盒子的宽度
            // waterfallImgCol: 5,// 瀑布流的列数
            waterfallImgCol: 3, // 瀑布流的列数
            waterfallImgRight:2, // 每个盒子的右padding
            waterfallImgBottom:2, // 每个盒子的下padding
            waterfallDeviationHeight: [],
            imgList: []
        }
    },
    created() {
        // 触发入口
        for (let i = 0; i < this.propdata.length; i++) {
            // this.imgList.push(this.imgArr[Math.round(Math.random() * 8)]);// 图片随机显示
            this.imgList.push(this.propdata[i].libraryUrl);
        }
    },
    mounted() {
        this.calculationWidth();
    },
    methods: {
        //计算每个图片的宽度或者是列数
        calculationWidth() {
            let domWidth = document.getElementById("v-waterfall").offsetWidth;
            if (!this.waterfallImgWidth && this.waterfallImgCol) {
                this.waterfallImgWidth = (domWidth - this.waterfallImgRight * this.waterfallImgCol) / this.waterfallImgCol;
            } else if (this.waterfallImgWidth && !this.waterfallImgCol) {
                this.waterfallImgCol = Math.floor(domWidth / (this.waterfallImgWidth + this.waterfallImgRight))
            }
            //初始化偏移高度数组
            this.waterfallDeviationHeight = new Array(this.waterfallImgCol);
            for (let i = 0; i < this.waterfallDeviationHeight.length; i++) {
                this.waterfallDeviationHeight[i] = 0;
            }
            this.imgPreloading()
        },
        //图片预加载
        imgPreloading() {
            for (let i = 0; i < this.imgList.length; i++) {
                let aImg = new Image();
                aImg.src = this.imgList[i];
                aImg.onload = aImg.onerror = (e) => {
                    let imgData = {};
                    imgData.height = this.waterfallImgWidth / aImg.width * aImg.height;
                    imgData.src = this.imgList[i];
                    this.waterfallList.push(imgData);
                    this.rankImg(imgData);
                }
            }
        },
        //瀑布流布局
        rankImg(imgData) {
            let {
                waterfallImgWidth,
                waterfallImgRight,
                waterfallImgBottom,
                waterfallDeviationHeight,
                waterfallImgCol
            } = this;
            let minIndex = this.filterMin();
            imgData.top = waterfallDeviationHeight[minIndex];
            imgData.left = minIndex * (waterfallImgRight + waterfallImgWidth);
            // waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom;// 不加文字的盒子高度
            waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom; // 加了文字的盒子高度，留出文字的地方（这里设置56px）
        },
        /**
         * 找到最短的列并返回下标
         * @returns {number} 下标
         */
        filterMin() {
            const min = Math.min.apply(null, this.waterfallDeviationHeight);
            return this.waterfallDeviationHeight.indexOf(min);
        }
    }
}
</script>

<style scoped>
.waterfull {
    width: 100%;
}

.v-waterfall-content {
    /* 主要 */
    width: 100%;
    /* height: 400px; */
    position: relative;
    /* 次要：设置滚动条，要求固定高度 */
    /* overflow-y: auto; */
}

.v-waterfall-item {
    /* 主要 */
    float: left;
    position: absolute;
}

.v-waterfall-item img {
    /* 主要 */
    /* width: auto;height: auto; */
    width: 90%;
    height: auto;
    /* 次要 */
    border-radius: 6px;
}
</style>
