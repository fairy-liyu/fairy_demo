<template>
  <div>
    <div>
      <fairy-title
        :text="'作者信息'"
        :icon="'icon-bussiness-man'"
      ></fairy-title>
    </div>
    <div class="divp" contenteditable="true">
      <h1>{{name}}</h1>
    </div>
    <div>
      <el-button @click="conSoleName">打印</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "author",
  data() {
    return {
      name: 'fairy',
    }
  },
  methods: {
    conSoleName() {
      console.log(this.name)
    }
  }
};
</script>

<style scoped>
.divp {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}
a {
  color: #3a8ee6;
}
h1 {
  font-family: 华文楷体;
  font-size: 72px;
  font-weight: bold;
}
</style>