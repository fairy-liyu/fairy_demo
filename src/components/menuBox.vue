<template>
  <div class="menu-box-compent">
    <el-scrollbar style="height: 100%">
      <el-menu
        class="sidebar-el-menu"
        :default-active="onRoutes"
        :collapse="collapse"
        background-color="#ffffff"
        text-color="#909399"
        active-text-color="rgba(102,175,255)"
        unique-opened
        router
      >
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="'iconfont ' + item.icon"></i>&nbsp;<span
                  slot="title"
                  >{{ item.title }}</span
                >
              </template>
              <template v-for="subItem in item.subs">
                <el-submenu
                  v-if="subItem.subs"
                  :index="subItem.index"
                  :key="subItem.index"
                >
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item
                    v-for="(threeItem, i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                  >
                    {{ threeItem.title }}
                  </el-menu-item>
                </el-submenu>
                <el-menu-item
                  v-else
                  :index="subItem.index"
                  :key="subItem.index + 'a'"
                >
                  {{ subItem.title }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item
              :index="item.index"
              :key="item.index"
              :class="{ tophome: item.title === '系统首页' }"
            >
              <i :class="'iconfont ' + item.icon"></i>&nbsp;<span
                slot="title"
                >{{ item.title }}</span
              >
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import bus from "@/components/bus.js";
export default {
  props: {
    menuItems: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      collapse: false,
      items: [],
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
  },
  created() {
    this.items = this.menuItems;
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", (msg) => {
      this.collapse = msg;
    });
  },
};
</script>

<style scoped>
.menu-box-compent {
  height: 100%;
}
.el-table--scrollable-x .el-table__body-wrapper {
  overflow-x: hidden !important;
}
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 0px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 100%;
  height: 100%;
}
.sidebar > ul {
  height: 100%;
}
.tophome {
  margin-top: 70px;
}
</style>
<style>
.menu-box-compent .el-menu-item {
  font-size: 18px;
}
</style>
