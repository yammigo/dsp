<style lang='less'>
</style>
<template>
  <div>
      <Tabs :datas="param" v-model="selected" @change="change"></Tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      param: {
        module1: '创建新广告组',
        module2: '选择已有广告组',
      },
      selected: 'module1'
    };
  },
  methods: {
    change(data) {
      this.$Message.info(`切换至${data.title}`, 1000);
    }
  },
  computed: {
    
  }
}
</script>