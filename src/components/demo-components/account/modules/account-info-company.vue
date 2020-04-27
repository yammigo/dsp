<style lang="less">
.account-info-vue {
    padding: 30px 30px 30px 0;
    max-width: 500px;
}
</style>
<template>
<div class="account-info-vue" style="padding-left:30px;">
    <Form :model="acc" :rules="rules" ref="formCompany" :validOnChange="true" :labelWidth="100" labelPosition="left">
        <FormItem label="公司名称" prop="companyName">
            <input type="text" v-model="acc.companyName" />
        </FormItem>
        <FormItem label="营业执照" prop="licenseUrl">
            <button class="h-btn h-btn-primary"><label for="fileUplaod" @click="uploadFiled='licenseUrl'"><img width="100" v-if="acc.licenseUrl" :src="acc.licenseUrl" /><span v-if="!acc.licenseUrl">上传营业执照</span></label></button>
        </FormItem>
        <FormItem label="法人姓名" prop="legalName">
            <input type="text" v-model="acc.legalName" />
        </FormItem>
        <FormItem label="法人身份证" prop="legalIdCardNumber">
            <input type="text" v-model="acc.legalIdCardNumber" />
        </FormItem>
        <FormItem label="身份证正面" prop="legalIdCardUrl1">
            <button class="h-btn h-btn-primary"><label for="fileUplaod" @click="uploadFiled='legalIdCardUrl1'"><img width="100" v-if="acc.legalIdCardUrl1" :src="acc.legalIdCardUrl1" /><span v-if="!acc.legalIdCardUrl1">上传正面</span></label></button>
        </FormItem>
        <FormItem label="身份证反面" prop="legalIdCardUrl2">
            <button class="h-btn h-btn-primary"><label for="fileUplaod" @click="uploadFiled='legalIdCardUrl2'"><img width="100" v-if="acc.legalIdCardUrl2" :src="acc.legalIdCardUrl2" /><span v-if="!acc.legalIdCardUrl2">上传反面</span></label></button>
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
            acc: {},
            rules: {
                required: ['companyName', 'licenseUrl', 'legalName', 'legalIdCardNumber', 'legalIdCardUrl1', 'legalIdCardUrl2']
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
            R.User.getCompany({}).then(res => {

                if (res.ok) {

                    this.acc = res.data;

                }
            })
        },
        submit() {
            if (!this.$refs.formCompany.valid().result) return;
            this.saveloading = true;
            R.User.addCompany({
                ...this.acc
            }).then(res => {
                this.saveloading = false;
                if (res.ok) {
                    this.$Message.success("提交成功");
                    this.$emit('updateInfo');

                }
            })
        },
        reset() {
            this.$refs.formCompany.reset();
            //   this.acc = Utils.copy(this.account);
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
