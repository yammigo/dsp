<template>
<div class="m-image-upload">
    <VirtualCollection :cellSizeAndPositionGetter="cellSizeAndPositionGetter" :collection="items" :height="500" :width="330">
        <div slot="cell" slot-scope="props">{{props.data}}</div>
    </VirtualCollection>
    <!-- <p v-for="(file,index) in files" :key="index">{{file.name}}{{ file.progress }} %</p>
    <Button @click="upload">上传文件2</Button> -->
    <!-- <div v-for="(file, index) in value" :key="index">
        <img :src="file.thumb || file.url" @click="preview(index)" />
        <bttton @click="remove(index, true)">删除</bttton>
        <div :class="{'file-item': true, 'active': file.active, 'error': !!file.error}" v-for="(file, index) in files" :key="index">
            <img v-if="file.blob" :src="file.blob" />
            <div class="uploading-shade">
                <p>{{ file.progress }} %</p>
                <p>正在上传</p>
            </div>
            <div class="error-shade">
                <p>上传失败！</p>
            </div>
            <bttton @click="remove(index, true)">删除</bttton>
        </div>
        <fileUpload ref="uploader" v-model="files" multiple :thread="10" extensions="jpg,gif,png,webp" post-action="http://localhost:3000/file/upload" @input-file="inputFile" @input-filter="inputFilter">
            <Button>上传文件</Button>
        </fileUpload>
    </div> -->
</div>
</template>

<script>
export default {

    name: 'testvue',
    props: {
        value: Array,
        default: () => {
            return []
        }

    },
    data() {
        return {
            uploadData: {
                token: Utils.getCookie('token'),
                cmdType: JSON.parse(Utils.getCookie('userInfo')).cmdType,
                adType: 1,
                adTypeStyle: 1
            },
            uplodUrl: G.get("env").apiDomin + "/pub/upload/library.do",
            files: [], // 存放在组件的file对象
            filList: {

            },
            items: new Array(1000).fill(0).map((_, index) => ({
                data: '#' + index
            })),
        }
    },
    mounted() {
        console.log(G.get("env").apiDomin);
        console.log(document.querySelector("input[type='file']"));
    },
    methods: {
        cellSizeAndPositionGetter(item, index) {
            // compute size and position
            return {
                width: 100,
                height: 150,
                x: (index % 2) * 110,
                y: parseInt(index / 2) * 160
            }
        },
        upload() {
            // this.$refs.uploadPush.click();
            document.getElementById('file2').click();
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
    }
}
</script>
