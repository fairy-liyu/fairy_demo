<template>
  <div class="page">
    <div class="pagination">
      <span class="pagination"
        >当前共 {{ sumCount }} 条信息，当前 {{ currPage }}/{{
          Math.ceil(sumCount / pageSize) == 0
            ? 1
            : Math.ceil(sumCount / pageSize)
        }}页</span
      >
    </div>
    <!--分页控件-->

    <el-pagination
      background
      layout="prev, pager, next,slot"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      :current-page.sync="paginCurrpage"
      :total="sumCount"
    >
      <span class="el-pagination__jump fontTwelve">
        跳转到第&nbsp;
        <div class="el-input el-pagination__editor is-in-pagination">
          <input
            type="number"
            autocomplete="off"
            min="1"
            v-model="paginCurrpage"
            class="el-input__inner pageInput"
          />
        </div>
        &nbsp;页
      </span>
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paginCurrpage: this.currPage
    };
  },
  /*props: ['pageSize','sumCount','currPage'],*/
  props: {
    pageSize: {
      //每页显示
      type: Number,
      default: 7,
    },
    sumCount: {
      //总数量
      type: Number,
      default: 0,
    },
    currPage: {
      //当前页码
      type: Number,
      default: 1,
    },
  },
  created() {},
  methods: {
    //pageSize 改变时会触发
    /*  handleSizeChange () {
    //  this.$emit('handleSizeChange', {pageSize:this.pageSize,sumCount:this.sumCount,pageNo:this.pageNo})
    },*/
    //currentPage 改变时会触发
    handleCurrentChange(val) {
      this.paginCurrpage = val;
    },
  },
  watch: {
    currPage: function () {
      this.$emit("handleSizeChange", {
        pageSize: this.pageSize,
        sumCount: this.sumCount,
        currPage: this.paginCurrpage,
      });
    },
    paginCurrpage: function() {
      this.$emit("handleSizeChange", {
        pageSize: this.pageSize,
        sumCount: this.sumCount,
        currPage: this.paginCurrpage
      })
    }
  },
};
</script>

<style scoped lang="scss">
/**
 table页码
 */
.pagination{
  font-family: 微软雅黑;
  font-size: 16px;
  text-align: center;
  position: relative;
}
.pagination span{
  position: absolute;
  left: 0%;
}
/*分页组件input框*/
.pageInput{
  display: inline-block;
  margin-top: -10px;
  border: 1px solid #BAC6CB;
  border-radius: 2px;
}
/*重写element-ui 分页样式*/
.el-pagination {
  text-align: right;
}
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
  margin: 0 5px;
  background-color: white;
  border: 1px solid #BAC6CB;
  color: #606266;
  min-width: 30px;
  border-radius: 2px;
}
.fontTwelve{
  font-size: 12px;
}
/*分页组件结束*/
.page .el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  margin: 0 5px;
  background-color: white !important;
  color: #2b3b4b !important;
  min-width: 30px;
  border-radius: 2px;
}
.page .el-pagination.is-background .el-pager li:hover,
.page .el-pagination.is-background .el-pager li.active {
  background-color: $btn-color !important;
  color: $ft-color !important;
}
</style>