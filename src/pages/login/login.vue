<template>
  <div class="login" :style="{ height: loginHeight, width: loginWidth }">
    <fairy-loading
      :fullscreenLoading="loadingShow"
      :text="'登录中······'"
    ></fairy-loading>
    <div class="logdiv center">
      <marquee
        style="
          position: absolute;
          left: 0%;
          top: 2%;
          color: #409eff;
          font-size: 19px;
        "
        >{{ msgValue }}</marquee
      >
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        label-width="100px"
        class="demo-dynamic form"
      >
        <el-form-item
          prop="loginName"
          label="用户名: "
          :rules="[
            { required: true, message: '用户名不能为空', trigger: 'blur' },
          ]"
        >
          <el-input
            style="width: 70%"
            v-model="dynamicValidateForm.loginName"
          ></el-input> </el-form-item
        ><br />
        <el-form-item
          :label="'密码: '"
          prop="loginPwd"
          :rules="{
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
          }"
        >
          <el-input
            style="width: 70%"
            type="password"
            v-model="dynamicValidateForm.loginPwd"
          ></el-input>
        </el-form-item>
        <br />
        <!-- <el-form-item
          :label="'验证码: '"
          prop="loginyzm"
          :rules="{
            required: true,
            message: '验证码不能为空',
            trigger: 'blur',
          }"
        >
          <el-input
            style="width: 70%"
            type="text"
            v-model="dynamicValidateForm.loginyzm"
          ></el-input
          >&emsp;<span
            @click="randyzm()"
            style="
              display: inline-block;
              text-align: center;
              width: 90px;
              font-size: 20px;
              height: 32px;
              color: #2b3b4b;
              background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
            "
            >{{ yzmn }}</span
          >
        </el-form-item> -->
        <el-form-item>
          <p class="loginp">
            <el-checkbox
              @change="check"
              v-model="dynamicValidateForm.checked"
              class="loginckd"
              >记住密码</el-checkbox
            >
          </p>
          <el-button
            class="loginbtn btnLogin"
            @click="submitForm('dynamicValidateForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>

      <Vcode
        :show="isShow"
        :canvasWidth="400"
        :canvasHeight="250"
        :puzzleScale="1"
        :sliderSize="40"
        :range="10"
        :imgs="[Img1, Img2, Img3, Img4, Img5]"
        successText="验证成功！"
        failText="验证失败，请重试！"
        sliderText="拖动滑块验证"
        @success="success"
        @close="close"
        @fail="onFail"
      />
    </div>
  </div>
</template>

<script>
import storage from "@/storage/storage.js";
import Vcode from "vue-puzzle-vcode";

export default {
  name: "login",
  data() {
    return {
      loginHeight: "100%",
      loginWidth: "100%",
      Img1: require("@/assets/images/verify/1.jpg"),
      Img2: require("@/assets/images/verify/2.jpg"),
      Img3: require("@/assets/images/verify/3.jpg"),
      Img4: require("@/assets/images/verify/4.jpg"),
      Img5: require("@/assets/images/verify/5.jpg"),
      dynamicValidateForm: {
        loginName: "fairy",
        loginPwd: "fairy",
        loginyzm: "",
        checked: true,
      },
      yzmn: "",
      yzm: "",
      loadingShow: false,
      msgValue: "用户名密码随便输入",
      isShow: false,
    };
  },
  components: {
    storage,
    Vcode,
  },
  created() {
    //this.wdht();

    //登录添加键盘事件,注意,不能直接在焦点事件上添加回车
    let that = this;
    document.onkeydown = function (e) {
      let key = window.event.keyCode;
      if (key === 13) {
        that.submitForm("dynamicValidateForm");
      }
    };

    this.randyzm();
  },
  mounted() {
    /**
     * 记住密码从tolist拿去 判断
     * */
    let _this = this;
    let ches = storage.get("dynamicValidateForm");
    if (ches != null && ches.checked) {
      _this.dynamicValidateForm.loginName = ches.loginName;
      _this.dynamicValidateForm.loginPwd = ches.loginPwd;
      _this.dynamicValidateForm.checked = ches.checked;
    } else {
      _this.dynamicValidateForm.loginName = "";
      _this.dynamicValidateForm.loginPwd = "";
      _this.dynamicValidateForm.checked = false;
    }

    /*    /!**
                 * 跑马灯效果
                 * *!/
                setInterval(function () {  //定时任务
                    var first=_this.msgValue.substring(0,1);
                    var end=_this.msgValue.substring(1);
                    _this.msgValue=end+first;
                },200);*/
  },
  methods: {
    // 用户通过了验证
    success(msg) {
      console.log("拼图验证成功");
      this.isShow = false; // 通过验证后，需要手动隐藏模态框
      this.loadingShow = !this.loadingShow;
      sessionStorage.setItem(
        "loginMsg",
        JSON.stringify(this.dynamicValidateForm)
      );
      if (this.dynamicValidateForm.checked) {
        storage.set("dynamicValidateForm", this.dynamicValidateForm);
      } else {
        storage.remove("dynamicValidateForm");
      }
      this.$router.push({ path: "/homePage" });
    },
    // 用户点击遮罩层，应该关闭模态框
    close() {
      this.isShow = false;
    },
    onFail(msg) {
      console.log("拼图验证失败");
    },
    randyzm() {
      //生成随机验证码

      let code = "";
      let coden = "";
      var codeLength = 4; //验证码的长度
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      ); //随机数
      for (var i = 0; i < codeLength; i++) {
        //循环操作
        var index = Math.floor(Math.random() * 62); //取得随机数的索引（0~61）
        code += random[index]; //根据索引取得随机数加到code上
        coden += random[index] + " "; //根据索引取得随机数加到code上
      }
      this.yzm = code; //把code值赋给验证码
      this.yzmn = coden; //把code值赋给验证码
    },
    wdht() {
      /**
       * 拿到浏览器的高宽
       * @type {string}
       */
      this.loginHeight = window.innerHeight + "px";
      this.loginWidth = window.innerWidth + "px";
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //图形验证码
          this.isShow = true;
          // if (
          //   this.dynamicValidateForm.loginyzm.toUpperCase() !=
          //   this.yzm.toUpperCase()
          // ) {
          //   this.$message({
          //     message: "验证码不正确！！！",
          //     type: "warning",
          //   });
          //   this.randyzm();
          //   return;
          // } else {
          //   this.loadingShow = !this.loadingShow;
          //   sessionStorage.setItem(
          //     "loginMsg",
          //     JSON.stringify(this.dynamicValidateForm)
          //   );
          //   if (this.dynamicValidateForm.checked) {
          //     storage.set("dynamicValidateForm", this.dynamicValidateForm);
          //   } else {
          //     storage.remove("dynamicValidateForm");
          //   }
          //   this.$router.push({ path: "/homePage" });
          // }
        } else {
          this.loadingShow = false;
          console.log("error submit!!");
          return false;
        }
      });
    },
    /**
     * checkbox
     */
    check() {},
  },
};
</script>

<style scoped>
.login {
  position: relative;
  /* background: url("../../assets/images/login/login.jpg") no-repeat; */
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  /* background-size: cover; */
}

.logdiv {
  width: 40%;
  height: 49%;
  min-height: 580px;
  filter: alpha(opacity=70); /*支持 IE 浏览器*/
  -moz-opacity: 0.7; /*支持 FireFox 浏览器*/
  opacity: 0.7; /*支持 Chrome, Opera, Safari 等浏览器*/
  border-radius: 10px;
  box-shadow: 0 0 1px #5e91ff inset;
  background-color: white;
}
.form {
  margin-top: 17%;
  margin-left: 10%;
}
.loginbtn {
  width: 60%;
  margin-left: 4%;
  margin-top: 1%;
}
.loginckd {
  width: 60%;
  margin-left: 46%;
}
</style>

/**
* 修改登录按钮样式
*/

<style>
.logdiv .el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  /* background: #409eff; */
  /* border: 1px solid #409eff; */
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.loginp .el-checkbox__inner {
  display: inline-block;
  position: relative;
  border: 1px solid #409eff;
  border-radius: 2px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #fff;

  z-index: 1;
  -webkit-transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}
</style>