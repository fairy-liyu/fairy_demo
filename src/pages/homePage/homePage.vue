<template>
  <div style="height: 100%; width: 100%; position: relative">
    <div>
      <fairy-title :text="'系统首页'" :icon="'product'"></fairy-title>
    </div>
    <div class="inner_box">
      <div class="homediv" v-for="(item, index) in homeArray" :key="index">
        <span class="spanmoney"><span>{{ item.allName }}</span>
          <p>&yen;{{ item.price }}</p>
        </span>
        <div class="hnextdiv">
          <span>
            <el-progress type="circle" :width="79" :percentage="item.pie"></el-progress>
          </span>
        </div>
        <div class="line_box">
          <div class="line"></div>
        </div>
        <div class="daysales">日平均销售额:&yen;{{ item.avgPrice }}</div>
      </div>
      <div style="width: 97%; height: 100px" class="homedivschart">
        <schart :canvasId="canvasId" :type="type" style="height: 420px;width: 1260px;margin-top: 0px;margin-left: 0px;"
          :width="width" :data="data" :options="options">
        </schart>
      </div>
    </div>
  </div>
</template>

<script>
import Schart from "vue-schart";
export default {
  name: "homePage",
  data() {
    return {
      canvasId: "myCanvas",
      type: "bar",
      width: 700,
      height: 100,
      data: [],
      //可选参数
      options: {
        title: "vue-chart-title",
      },
      homeArray: [
        {
          allName: "总销售额",
          pie: 79,
          price: 1323,
          avgPrice: 21902903,
        },
        {
          allName: "年销售额",
          pie: 79,
          price: 1323,
          avgPrice: 21902903,
        },
        {
          allName: "月销售额",
          pie: 79,
          price: 1323,
          avgPrice: 21902903,
        },
        {
          allName: "周销售额",
          pie: 79,
          price: 1323,
          avgPrice: 21902903,
        },
      ],
    };
  },
  components: { Schart },
  mounted() {
    this.changeData();
  },
  methods: {
    changeData() {
      // 整个 data 被重新赋值时
      this.data = [
        { name: "vue", value: 1314 },
        { name: "java", value: 520 },
        { name: "react", value: 700 },
        { name: "javascript", value: 1000 },
        { name: "oracle", value: 1000 },
        { name: "angular", value: 200 },
        { name: "node", value: 1314 },
      ];
      // data 里一个属性值被修改时
      this.$set(this.data, 1, { name: "jquery", value: 2000 });
    },
  },
};
</script>

<style scoped>
.inner_box {
  padding-top: 20px;
  height: 97%;
  width: 100%;
}

.line_box {
  width: 100%;
  text-align: center;
  vertical-align: center;
}

.line {
  height: 0px;
  width: 87%;
  margin: 47px auto auto 20px;
  padding-top: 1px;
  background-color: rgba(64, 158, 255, 0.4);
}

.homediv {
  display: inline-block;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  width: 420px;
  height: 200px;
  box-shadow: 2px 2px 2px #aaaaaa;
  margin-right: 20px;
}

.spanmoney>span {
  display: inline-block;
  color: rgb(194, 196, 199);
  font-size: 22px;
  margin: 7px auto auto 10px;
}

.spanmoney>p {
  font-size: 32px;
  text-indent: 12px;
}

.hnextdiv {
  text-indent: 12px;
  margin-top: 10px;
}

.hnextdiv>span:first-child {
  float: right;
  margin-right: 107px;
  margin-top: -72px;
}

.daysales {
  font-size: 20px;
  color: #2b3b4b;
  margin: 4px auto auto 30px;
}

.homedivschart {
  position: absolute;
  left: 19px;
  top: 296px;
}
</style>