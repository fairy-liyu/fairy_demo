<template>
  <div id="app">
    <span class="js-cursor-container"></span>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  /**
   * 监听浏览器刷新
   */
  beforeCreate() {},
  created() {
    // 鼠标尾随效果-小星星
    (function fairyDustCursor() {
      var possibleColors = [
        "#D61C59",
        "#E7D84B",
        "#1B8798",
        "#a6c1ee",
        "#fbc2eb",
      ];
      var width = window.innerWidth;
      var height = window.innerHeight;
      var cursor = { x: width / 2, y: width / 2 };
      var particles = [];

      function init() {
        bindEvents();
        loop();
      }

      // Bind events that are needed
      function bindEvents() {
        document.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onWindowResize);
      }

      function onWindowResize(e) {
        width = window.innerWidth;
        height = window.innerHeight;
      }

      function onMouseMove(e) {
        cursor.x = e.clientX;
        cursor.y = e.clientY;

        addParticle(
          cursor.x,
          cursor.y,
          possibleColors[Math.floor(Math.random() * possibleColors.length)]
        );
      }

      function addParticle(x, y, color) {
        var particle = new Particle();
        particle.init(x, y, color);
        particles.push(particle);
      }

      function updateParticles() {
        // Updated
        for (var i = 0; i < particles.length; i++) {
          particles[i].update();
        }

        // Remove dead particles
        for (var i = particles.length - 1; i >= 0; i--) {
          if (particles[i].lifeSpan < 0) {
            particles[i].die();
            particles.splice(i, 1);
          }
        }
      }

      function loop() {
        requestAnimationFrame(loop);
        updateParticles();
      }

      /**
       * Particles
       */

      function Particle() {
        this.character = "*";
        this.lifeSpan = 120; //ms
        this.initialStyles = {
          position: "fixed",
          display: "inline-block",
          top: "0px",
          left: "0px",
          pointerEvents: "none",
          "touch-action": "none",
          "z-index": "10000000",
          fontSize: "25px",
          "will-change": "transform",
        };

        // Init, and set properties
        this.init = function (x, y, color) {
          this.velocity = {
            x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
            y: 1,
          };

          this.position = { x: x + 10, y: y + 10 };
          this.initialStyles.color = color;

          this.element = document.createElement("span");
          this.element.innerHTML = this.character;
          applyProperties(this.element, this.initialStyles);
          this.update();

          document
            .querySelector(".js-cursor-container")
            .appendChild(this.element);
        };

        this.update = function () {
          this.position.x += this.velocity.x;
          this.position.y += this.velocity.y;
          this.lifeSpan--;

          this.element.style.transform =
            "translate3d(" +
            this.position.x +
            "px," +
            this.position.y +
            "px, 0) scale(" +
            this.lifeSpan / 120 +
            ")";
        };

        this.die = function () {
          this.element.parentNode.removeChild(this.element);
        };
      }

      /**
       * Utils
       */

      // Applies css `properties` to an element.
      function applyProperties(target, properties) {
        for (var key in properties) {
          target.style[key] = properties[key];
        }
      }

      if (!("ontouchstart" in window || navigator.msMaxTouchPoints)) init();
    })();
    // 点击效果-爱心
    !(function (e, t, a) {
      function r() {
        for (var e = 0; e < s.length; e++)
          s[e].alpha <= 0
            ? (t.body.removeChild(s[e].el), s.splice(e, 1))
            : (s[e].y--,
              (s[e].scale += 0.004),
              (s[e].alpha -= 0.013),
              (s[e].el.style.cssText =
                "left:" +
                s[e].x +
                "px;top:" +
                s[e].y +
                "px;opacity:" +
                s[e].alpha +
                ";transform:scale(" +
                s[e].scale +
                "," +
                s[e].scale +
                ") rotate(45deg);background:" +
                s[e].color +
                ";z-index:99999"));
        requestAnimationFrame(r);
      }

      function n() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function (e) {
          t && t(), o(e);
        };
      }

      function o(e) {
        var a = t.createElement("div");
        (a.className = "heart"),
          s.push({
            el: a,
            x: e.clientX - 5,
            y: e.clientY - 5,
            scale: 1,
            alpha: 1,
            color: c(),
          }),
          t.body.appendChild(a);
      }

      function i(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
          a.appendChild(t.createTextNode(e));
        } catch (t) {
          a.styleSheet.cssText = e;
        }
        t.getElementsByTagName("head")[0].appendChild(a);
      }

      function c() {
        return (
          "rgb(" +
          ~~(255 * Math.random()) +
          "," +
          ~~(255 * Math.random()) +
          "," +
          ~~(255 * Math.random()) +
          ")"
        );
      }
      var s = [];
      (e.requestAnimationFrame =
        e.requestAnimationFrame ||
        e.webkitRequestAnimationFrame ||
        e.mozRequestAnimationFrame ||
        e.oRequestAnimationFrame ||
        e.msRequestAnimationFrame ||
        function (e) {
          setTimeout(e, 1e3 / 60);
        }),
        i(
          ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
        ),
        n(),
        r();
    })(window, document);
  },
};
</script>
<style lang="scss">
/*引入无须编译的css文件*/
@import "./assets/css/oscss.css";
@import "./assets/css/varuables.scss";
@import "./assets/css/ovflow.css";

* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  min-width: 1024px;
}

#app {
  height: 100%;
  position: relative;
  overflow: hidden;
}

body {
  background: #fff;
  color: #555;
  font-size: 14px;
  font-family: Microsoft YaHei;
  user-select: none;
}

td,
th,
caption {
  font-size: 12px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal;
}

a {
  color: #555;
  text-decoration: none;
}

/*a:hover { text-decoration:underline; }*/
img {
  border: none;
}

ol,
ul,
li {
  list-style: none;
}

input,
textarea,
select,
button {
  font: 14px Verdana, Helvetica, Arial, sans-serif;
  -webkit-user-select: none;
}

table {
  border-collapse: collapse;
}

/*清除浮动*/
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  _height: 1%;
}

/*上下居中*/
.topCenter {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  -webkit-transform: translate(0, -50%);
  -moz-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
}

/*左右居中*/
.leftCenter {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  -moz-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  -o-transform: translate(-50%, 0);
}

/*上下左右居中*/
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
}

.btnLogin {
  color: #fff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: $btn-color;
  border: 1px solid #dcdfe6;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #ffffff;
}

.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}

.content-collapse {
  left: 65px;
}

.container {
  padding-top: 30px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/*红色* 必填项*/
b.require {
  color: #ff0000;
}

#app .input-error:after {
  content: "*请输入有效合法的内容！";
  color: #ff0000;
}
.vercolor {
  color: red;
}
.tablep {
  text-align: center;
  margin-top: 30px;
}
</style>
