<style lang="less">
.account-info-vue {
    padding: 30px 30px 30px 0;
    max-width: 500px;
}
</style>
<template>
<div class="account-info-vue" style="padding-left:30px;">
    <Form :model="acc" :rules="rules" ref="formCompany" :validOnChange="true" :labelWidth="100" labelPosition="left">
        <FormItem label="ip备案图片" prop="icpUrl">
            <button class="h-btn h-btn-primary"><label for="fileUplaod" @click="uploadFiled='icpUrl'"><img width="100" v-if="acc.icpUrl" :src="acc.icpUrl" /><span v-if="!acc.icpUrl">上传</span></label></button>
        </FormItem>
        <FormItem label="软件著作图片" prop="swcrUrl">
            <button class="h-btn h-btn-primary"><label for="fileUplaod" @click="uploadFiled='swcrUrl'"><img width="100" v-if="acc.swcrUrl" :src="acc.swcrUrl" /><span v-if="!acc.swcrUrl">上传</span></label></button>
        </FormItem>
        <FormItem label="其他资质图片" prop="otherUrl">
            <button class="h-btn h-btn-primary"><label for="fileUplaod" @click="uploadFiled='otherUrl'"><img width="100" v-if="acc.otherUrl" :src="acc.otherUrl" /><span v-if="!acc.otherUrl">上传</span></label></button>
        </FormItem>
        <FormItem v-if="acc.status==-2">
            <Button color="primary" @click="submit" :loading="saveloading">提交</Button>
        </FormItem>
    </Form>
    <fileUpload ref="uploader" input-id="fileUplaod" :data="uploadData" v-model="files" :post-action="uplodUrl" @input-file="inputFile" @input-filter="inputFilter"></fileUpload>
</div>
</template>

<script>
import store from 'js/vuex/store';

export default {
    data() {
        return {
            uploadFiled: "",
            uploadData: {
                token: Utils.getCookie('token'),
                cmdType: JSON.parse(Utils.getCookie('userInfo')) && JSON.parse(Utils.getCookie('userInfo')).cmdType || 1,
            },
            uplodUrl: G.get("env").apiDomin + "/pub/upload/img.do",
            files: [],
            acc:{},
            rules: {
                required: ['icpUrl', 'swcrUrl', 'otherUrl']
            },
            options: {
                max_file_size: '1mb',
                filters: {
                    mime_types: [{
                        title: 'Image files',
                        extensions: 'jpg,gif,png'
                    }]
                }
            },
            saveloading: false
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            //获取企业认证信息
            R.User.getAdput({}).then(res => {
                if(res.ok){
                    this.acc=res.data;
                    
                }
            })
        },
        submit() {
            if (!this.$refs.formCompany.valid().result) return;
            this.saveloading = true;
            R.User.addAdput({
                ...this.acc
            }).then(res => {
                this.saveloading = false;
                if (res.ok) {
                    this.$Message.success(res.msg);
                    this.$emit('updateInfo');
                }
            })
        },
        stopUpload() {
            //终止上传操作
            this.$refs.uploader.active = false;
            this.$refs.uploader.clear();
            this.files = [];

        },
        //上传
        inputFile: function (newFile, oldFile) {
            if (newFile && !oldFile) {
                // 添加文件
            }
            // 上传完成
            if (newFile && oldFile && !newFile.active && oldFile.active) {
                // 获得相应数据
                if (newFile.xhr) {
                    this.$refs.uploader.remove(newFile)
                    if (newFile.response.code == 0) {
                        this.$refs.uploader.remove(newFile);

                        this.uploadFiled && (this.acc[this.uploadFiled] = newFile.response.data.imageUrl);
                        this.$Message.success('上传成功');
                        this.uploadFiled = "";
                    } else {
                        this.$Message.error(newFile.response.msg);
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
        /**
         * Pretreatment
         * @param  Object|undefined   newFile   读写
         * @param  Object|undefined   oldFile   只读
         * @param  Function           prevent   阻止回调
         * @return undefined
         */
        inputFilter: function (newFile, oldFile, prevent) {
            if (newFile && !oldFile) {
                // 过滤不是图片后缀的文件
                if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
                    this.$Message.error("文件格式有问题")
                    return prevent()
                }
            }

        }

    },
    computed: {

    }
};
</script>
