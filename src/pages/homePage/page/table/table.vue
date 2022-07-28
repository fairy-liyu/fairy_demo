<template>
  <div style="text-align: center">
    <div>
      <fairy-title
        :text="'element-ui表格'"
        :icon="'icon-column1'"
      ></fairy-title>
    </div>

    <div style="text-align: left; margin-top: 30px">
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
        :data="tableData3"
        border
        tooltip-effect="dark"
        >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="id" :show-overflow-tooltip="true">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="addr" label="地址" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="sex" label="性别" show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.sex | sex }}</template>
        </el-table-column>
        <el-table-column prop="age" label="年龄" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="birth" label="生日" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" width="170">
          <template slot-scope="scope">
            <el-button class="small-radius-button" @click="endit(scope.row)" size="mini">
              编辑
            </el-button>
            &nbsp;
            <el-button class="small-radius-button" @click="deleterow(scope.row)" size="mini">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <fairy-dia :isShow="isShow" @close="closeEndit" :tittle="'TableDataUpdate'">
      <el-row :gutter="24">
        <el-col :span="12" :push="6">
          <span>姓名：</span
          ><el-input v-model="tableData.name" style="width: 86%"></el-input>
        </el-col> </el-row
      ><br />
      <el-row :gutter="24">
        <el-col :span="12" :push="6">
          <span>地址：</span
          ><el-input v-model="tableData.addr" style="width: 86%"></el-input>
        </el-col> </el-row
      ><br />
      <el-row :gutter="24">
        <el-col :span="16" :push="6">
          <span>性别：</span>
          <el-select v-model="tableData.sex" placeholder="性别：">
            <el-option
              v-for="item in sexs"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col> </el-row
      ><br />
      <p style="text-align: center; margin-left: 4.9%; margin-top: 30px">
        <el-button class="blue-button" @click="saveEndit(tableData.id)">
          保存</el-button
        >&emsp;
        <el-button class="blue-border-button" @click="closeEndit">取消</el-button>
      </p>
    </fairy-dia>
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
const List = [];
export default {
  name: "test",
  components: {},
  data() {
    return {
      currPage: 1, //当前页码
      pageSize: 10, //每页显示
      sumCount: 0, //总数量
      tableData3: [],
      multipleSelection: [],
      name: "",
      sexs: [
        {
          label: "男",
          value: 1,
        },
        {
          label: "女",
          value: 0,
        },
      ],
      sex: "",
      data: [],
      isShow: false,
      tableData: {
        name: "",
        addr: "",
        sex: "",
      },
    };
  },
  created() {
    const count = 100;
    this.sumCount = count;
    for (let i = 0; i < count; i++) {
      List.push(
        this.$mock.mock({
          id: this.$mock.Random.guid(),
          name: this.$mock.Random.cname(),
          addr: this.$mock.mock("@county(true)"),
          "age|18-60": 1,
          birth: this.$mock.Random.date(),
          sex: this.$mock.Random.integer(0, 1),
        })
      );
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleSizeChange(val) {
      this.currPage = val.currPage;
      this.pageSize = val.pageSize;
      this.getData();
    },
    sexchhange() {
      this.getData();
    },
    /**
     * 查询功能
     */
    getData() {
      if ((this.name != null && this.name.trim() != "") || this.sex) {
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
        this.tableData3 = pageList;
      } else {
        const pageList = List.filter(
          (item, index) =>
            index < this.pageSize * this.currPage &&
            index >= this.pageSize * (this.currPage - 1)
        );

        this.tableData3 = pageList;
      }
    },
    /**
     * 编辑
     * @param row
     */
    endit(row) {
      this.isShow = !this.isShow;
      this.tableData = JSON.parse(JSON.stringify(row));
    },
    /**
     * 取消修改
     */
    closeEndit() {
      this.isShow = !this.isShow;
    },
    /**
     * 修改
     * */
    saveEndit(id) {
      this.$confirm("此操作将修改一条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          for (let i = 0; i < List.length; i++) {
            if (List[i].id.indexOf(id) > -1) {
              List[i].name = JSON.parse(JSON.stringify(this.tableData.name));
              List[i].addr = JSON.parse(JSON.stringify(this.tableData.addr));
              List[i].sex = JSON.parse(JSON.stringify(this.tableData.sex));
              this.$alert("保存成功!", "提示", {
                confirmButtonText: "确定",
                callback: (action) => {
                  this.isShow = !this.isShow;
                  return;
                },
              });
            }
          }
        })
        .catch(() => {});
    },
    /**
     * 删除行
     * @param row
     */
    deleterow(row) {
      this.$confirm("此操作将删除一条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(() => {
          List.splice(List.indexOf(row), 1);
          this.getData();
          this.sumCount = List.length;
          this.$alert("删除成功!", "提示", {
            confirmButtonText: "确定",
            callback: (action) => {},
          });
        })
        .catch(() => {});
    },
  },
  watch: {},
};
</script>

<style scoped>
.el-input--suffix .el-input__inner {
  padding-right: 91px;
}
</style>




























