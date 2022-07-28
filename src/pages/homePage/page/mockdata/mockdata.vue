<template>
  <div style="text-align: center">
    <div>
      <fairy-title
        :text="'element-ui表格'"
        :icon="'icon-column1'"
      ></fairy-title>
    </div>

    <div style="text-align: left;">
      <el-row>
        <el-col :span="8" :push="0">
          <el-input
            placeholder="姓名"
            v-model="name"
            class="el-input__inner_search"
          >
            <el-button
              slot="append"
              @click="getData"
              icon="el-icon-search"
              class="search-el-button"
            ></el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div style="width: 100%; margin-top: 10px">
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        height="100px"
        v-adaptive="{ bottomOffset: 60 }"
        tooltip-effect="dark"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="id" :show-overflow-tooltip="true">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="msg" label="详细信息" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="tel" label="联系方式" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="star" label="等级" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="volume" label="价格" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="logo" label="商品图" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.logo"
              :preview-src-list="[scope.row.log]"
            >
            </el-image>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="tablep">
      <fairy-page
        :pageSize="pageSize"
        :sumCount="sumCount"
        :currPage="currPage"
        @handleSizeChange="handleSizeChange"
      ></fairy-page>
    </div>
  </div>
</template>

<script>
let List = [];
export default {
  name: "mockdata",
  components: {},
  data() {
    return {
      currPage: 1, //当前页码
      pageSize: 10, //每页显示
      sumCount: 100, //总数量
      tableData: [],
      name: '',
    };
  },
  created() {
    this.getData();
  },
  mounted() {},
  methods: {
    handleSizeChange(val) {
      this.currPage = val.currPage;
      this.pageSize = val.pageSize;
      this.getData2();
    },
    sexchhange() {
      this.getData2();
    },
    /**
     * 查询功能
     */
    getData() {
      let action = {
        model: {
          id: 1,
          name: '风水',
          age: 12,
          sex: 0
        },
        limit: 20,
        offset: 0,
      }
      this.$post("http://localhost:9999/mock/mockAll", action).then((res) => {
        List = res.data;
        this.getData2();
      });
    },
    /**
     * 获取数据
     */
    getData2() {
      if ((this.name != null && this.name.trim() != "")) {
        let [name, page = this.currPage, limit = this.pageSize] = [
          this.name,
          ,
        ];
        const mockList = List.filter((user) => {
          if (name && user.name.indexOf(name) === -1) return false;
          return true;
        });
        const pageList = mockList.filter(
          (item, index) => index < limit * page && index >= limit * (page - 1)
        );
        this.tableData = pageList;
      } else {
        const pageList = List.filter(
          (item, index) =>
            index < this.pageSize * this.currPage &&
            index >= this.pageSize * (this.currPage - 1)
        );

        this.tableData = pageList;
      }
    }
  },
  watch: {},
};
</script>

<style scoped>
.el-input--suffix .el-input__inner {
  padding-right: 91px;
}
</style>