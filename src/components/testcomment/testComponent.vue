<style lang='less'>
</style>
<template>
<div style="background:#fff;">
    <weekTime v-model="timeValue"></weekTime>
    <selectCity v-model="selectCity"></selectCity>
    
</div>
</template>
<script>
import weekTime from "../baseComponent/weekTime";
import selectCity from "../baseComponent/selectCity";
export default {
    components:{
        weekTime,
        selectCity
    },
    data() {
        return {
            timeValue: [
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ],
            selectCity:["2002","2004"]
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
