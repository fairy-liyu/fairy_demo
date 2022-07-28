<template>
    <div class="fairytitle">
        <li :class="'iconfont ' + icon">{{text}}</li>
        <div class="title_div"></div>
    </div>
</template>

<script>
    export default {
        name: "fairyTitle",
        props: {
            text: {  //显示文字
                type: String,
                default: ''
            },
            icon: {  //图标clss
                type: String,
                default: ''
            }

        },
    }
</script>

<style scoped>
    .fairytitle{
        font-size: 14px;
        color: #2f6caf;
        text-align: left;
        margin-bottom: 10px;

    }
    .title_div{
        background-color: #dbe2ed;
        height: 1px;
        margin-top: 2px;
    }
</style>