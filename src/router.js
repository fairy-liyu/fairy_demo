import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            title: '登录页面',
            component: resolve => require(['@/pages/login/login.vue'], resolve)
        },
        {
            path: '/cockpit',
            name: 'cockpit',
            title: '驾驶舱页面',
            component: resolve => require(['@/pages/cockpit/cockpit.vue'], resolve)
        },
        {
            path: '/',
            component: resolve => require(['@/views/Home.vue'], resolve),//
            redirect: '/homePage',
            meta: {
                keepAlive: false, // 不需要被缓存
                title: '首页'
            },
            children: [
                /**
                 * 主页
                 */
                {
                    path: '/homePage',
                    component: resolve => require(['@/pages/homePage/homePage.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: '首页'
                    },
                },
                {
                    path: '/table',
                    component: resolve => require(['@/pages/homePage/page/table/table.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'element-ui表格'
                    },
                },
                {
                    path: '/iconfont',
                    component: resolve => require(['@/pages/homePage/page/iconfont/iconfont.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'iconfont图标'
                    },
                },
                {
                    path: '/datepaick',
                    component: resolve => require(['@/pages/homePage/page/datadk/datepaick.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: '日历本'
                    },
                },
                {
                    path: '/testkey',
                    component: resolve => require(['@/pages/homePage/page/keyborad/testKeyborard.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: '键盘'
                    },
                },
                {
                    path: '/eleform',
                    component: resolve => require(['@/pages/homePage/page/element-ui/ele-form.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'form表单'
                    },
                },
                {
                    path: '/eleimages',
                    component: resolve => require(['@/pages/homePage/page/element-ui/pic/images.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'images图片'
                    },
                },
                {
                    path: '/descriptions',
                    component: resolve => require(['@/pages/homePage/page/element-ui/desc/desc.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'descriptions'
                    },
                },
                {
                    path: '/mock',
                    component: resolve => require(['@/pages/homePage/page/mockdata/mockdata.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'mock数据'
                    },
                },
                {
                    path: '/vueEdito',
                    component: resolve => require(['@/pages/homePage/page/VueEditor/VueEdito.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: '富文本编辑器'
                    },
                }, {
                    path: '/markdown',
                    component: resolve => require(['@/pages/homePage/page/VueEditor/markdown.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'markdown编辑器'
                    },
                }, {
                    path: '/elupload',
                    component: resolve => require(['@/pages/homePage/page/upload/elupload.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: '文件上传'
                    },
                },
                {
                    path: '/404',
                    component: resolve => require(['@/pages/homePage/page/error/404.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: '404'
                    },
                },
                {
                    path: '/500',
                    component: resolve => require(['@/pages/homePage/page/error/500.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: '500'
                    },
                },
                {
                    path: '/btn',
                    component: resolve => require(['@/pages/homePage/page/button/btn.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'button'
                    },
                },
                {
                    path: '/highcharts',
                    component: resolve => require(['@/pages/homePage/page/highcharts/highcharts.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'highcharts'
                    },
                },
                {
                    path: '/echarts',
                    component: resolve => require(['@/pages/homePage/page/echarts/echarts.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'echarts'
                    },
                },
                {
                    path: '/VeeValidate',
                    component: resolve => require(['@/pages/homePage/page/veevalidate/VeeValidate.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'VeeValidate校验'
                    },
                },
                {
                    path: '/baiduMap',
                    component: resolve => require(['@/pages/homePage/page/map/baiduMap.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: '百度地图'
                    },
                },
                {
                    path: '/gaodeMap',
                    component: resolve => require(['@/pages/homePage/page/map/gaodeMap.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: '高德地图'
                    },
                },
                {
                    path: '/tolist',
                    component: resolve => require(['@/pages/homePage/page/tolist/tolist.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'tolist'
                    },
                },
                {
                    path: '/result',
                    component: resolve => require(['@/pages/homePage/page/result/result.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: 'result'
                    },
                },
                {
                    path: '/author',
                    component: resolve => require(['@/pages/homePage/page/author/author.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: '作者信息'
                    },
                },
                {
                    path: '/comCheckbox',
                    component: resolve => require(['@/pages/homePage/page/connections/comCheckbox.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: '多选下拉框'
                    },
                },
                //404页面需要放在最下面
                {
                    path: '*',
                    component: resolve => require(['@/pages/homePage/page/error/404.vue'], resolve),//
                    meta: {
                        keepAlive: false, // 不需要被缓存
                        title: '404'
                    },
                },
            ]
        },

    ]
})
