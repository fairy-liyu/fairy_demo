<template>
  <div class="home">
    <el-container>
      <div style="height: 100%; width: 100%">
        <el-aside>
          <div class="menu-box">
            <menu-box :menuItems="items"></menu-box>
          </div>
        </el-aside>
      </div>
    </el-container>
    <el-container>
      <el-header>
        <div class="headercls">
          <div class="header-user-con" style="padding-top: 4px;">
            <div class="collapse-btn" @click="collapseChage">
              <i class="el-icon-menu"></i>&nbsp;
            </div>
            <div class="logo"><b>fairy</b>&nbsp;后台管理系统</div>
            <div class="user_box">
              <span class="cockpit" @click="goCockpit">驾驶舱</span>
              <!-- 用户头像 -->
              <div class="user-avator">
                <img src="../assets/images/login/loginmsg.jpg" />
              </div>
              <!-- 用户名下拉菜单 -->
              <el-dropdown
                class="user-name"
                trigger="click"
                @command="handleCommand"
              >
                <span class="el-dropdown-link">
                  {{ sessionData.loginName }}
                  <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item divided command="loginout"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
              <!-- 全屏 -->
              <div class="btn-fullscreen" @click="handleFullScreen">
                <el-tooltip
                  class="fullcls"
                  effect="dark"
                  :content="fullscreen ? `取消全屏` : `全屏`"
                  placement="bottom"
                >
                  <i class="el-icon-rank"></i>
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <el-main style="margin: 0; height: 100%">
        <div class="content-box" :class="{ 'content-collapse': collapse }">
          <fairy-tags></fairy-tags>
          <div class="content">
            <transition name="move" mode="out-in">
              <keep-alive :include="tagsList">
                <router-view></router-view>
              </keep-alive>
            </transition>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import fairyTags from "@/components/fairyTags.vue";
import bus from "@/components/bus.js";
import menuBox from "../components/menuBox";
export default {
  name: "home",
  components: {
    menuBox,
    fairyTags,
  },
  data() {
    return {
      sessionData: [],
      fullscreen: false,
      isCollapse: false,
      tagsList: [],
      collapse: false,
      items: [
        {
          icon: "icon-all", //icon
          index: "homePage", //路径
          title: "系统首页",
        },
        {
          icon: "icon-form-fill",
          index: "table",
          title: "table",
        },
        {
          icon: "icon-product",
          index: "iconfont",
          title: "iconfont图标",
        },
        {
          icon: "icon-editor",
          index: "mock",
          title: "mock数据",
        },
        {
          icon: "icon-calendar",
          index: "datepaick",
          title: "日历本",
        },
        {
          icon: "icon-column1",
          index: "element-ui01",
          title: "element-ui",
          subs: [
            {
              index: "eleform",
              title: "基本表单",
            },
            {
              index: "btn",
              title: "button",
            },
            {
              index: "tolist",
              title: "tolist",
            },
            {
              index: "eleimages",
              title: "images",
            },
            {
              index: "descriptions",
              title: "descriptions描述列表",
            },
            {
              index: "result",
              title: "result",
            },
            {
              index: "3-2",
              title: "三级菜单",
              subs: [
                {
                  index: "vueEdito",
                  title: "富文本编辑器",
                },
                {
                  index: "markdown",
                  title: "markdown编辑器",
                },
              ],
            },
            {
              index: "elupload",
              title: "文件上传",
            },
          ],
        },
        {
          icon: "icon-calculator",
          index: "testkey",
          title: "键盘",
        },
        {
          icon: "icon-electronics",
          index: "highcharts",
          title: "highcharts",
        },
        {
          icon: "icon-connections",
          index: "echarts",
          title: "echarts",
        },
        {
          icon: "icon-editor1",
          index: "map",
          title: "地图",
          subs: [
            {
              index: "baiduMap",
              title: "百度地图",
            },
            {
              index: "gaodeMap",
              title: "高德地图",
            },
          ],
        },
        {
          icon: "icon-connections",
          index: "compnent", //路径
          title: "自制组件",
          subs: [
            {
              index: "comCheckbox",
              title: "checkbox多选下拉框",
            },
          ],
        },
        {
          icon: "icon-warning",
          index: "error",
          title: "错误处理",
          subs: [
            {
              index: "500",
              title: "500",
            },
            {
              index: "404",
              title: "404",
            },
          ],
        },
        {
          icon: "icon-discount",
          index: "author",
          title: "作者信息",
        },
      ],
    };
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        sessionStorage.removeItem("loginMsg");
        this.$router.push("/login");
      }
    },
    goCockpit() {
      this.$router.push("/cockpit");
    },
    // 侧边栏折叠
    collapseChage() {
      this.isCollapse = !this.isCollapse;
    },
    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
    this.sessionData = JSON.parse(sessionStorage.getItem("loginMsg"));

    bus.$on("collapse", (msg) => {
      this.collapse = msg;
    });

    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on("fairyTags", (msg) => {
      let arr = [];
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    });
  },
};
</script>

<style scoped>
.home {
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
}

.headercls {
  color: #333;
  position: absolute;
  left: 0%;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  /* background-image: linear-gradient(to right, #fbc2eb, #a6c1ee); */
}
.headercls .collapse-btn {
  display: inline-block;
  cursor: pointer;
  margin-top: 14px;
  margin-left: 10px;
  font-size: 22px;
}
.headercls .logo {
  display: inline-block;
  width: 250px;
  margin-top: 14px;
  font-size: 22px;
}
.headercls .logo > b {
  font-family: 华文隶书;
}
.menu-box {
  position: absolute;
  height: 100%;
  width: 250px;
}

.user-name {
  display: inline-block;
  padding-right: 10px;
}
.user-avator {
  display: inline-block;
  padding-right: 10px;
 vertical-align: middle;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  cursor: pointer;
}
.user_box {
  display: inline-block;
  padding-top: 10px;
  right: 47px;
  float: right;
}
.cockpit {
  padding: 0 10px;
  cursor: pointer;
}
.btn-fullscreen {
  height: 40px;
  width: 40px;
  font-size: 24px;
  display: inline-block;
  transform: rotate(47deg);
}
.btn-fullscreen .fullcls {
  border: 2px solid #fff;
}
.btn-fullscreen .fullcls:hover {
  border: 2px solid #fff;
  cursor: pointer;
}
.content-box {
  left: 250px;
}
</style>
