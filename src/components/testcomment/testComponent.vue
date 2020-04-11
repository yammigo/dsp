<style lang='less'>
</style>
<template>
<div style="background:#fff;">
    <weekTime v-model="timeValue"></weekTime>
</div>
</template>

<script>
import weekTime from "../baseComponent/weekTime"
export default {
    components:{
        weekTime
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
            ]
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
