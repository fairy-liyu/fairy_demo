// //引入 mockjs 模块
// import Mock from "mockjs";

// Mock.mock('http://table.cn', {//输出数据
//   //还可以自定义其他数据
// });

const Mock = require("mockjs");

let type = 'SM2'

/** --------------------- SM4 加密所需操作--start------------------------ */
const SM4 = require("gm-crypt").sm4;    // 引用sm4包进行加密
let sm4Config = {
    //配置sm4参数
    key: "HENG1AN2WEN3YIN4",//这里这个key值是跟后端要的
    mode: "ecb", // 加密的方式有两种，ecb和cbc两种，也是看后端如何定义的，不过要是cbc的话下面还要加一个iv的参数，ecb不用
    cipherType: "base64" // 
};
let sm4 = new SM4(sm4Config);//这里new一个函数，将上面的sm4Config作为参数传递进去。然后就可以开心的加密了
/** --------------------- SM4 加密所需操作--end-------------------------- */

/** SM2加密所需 ----------- start ------------- */
const sm2 = require('sm-crypto').sm2
let keypair = sm2.generateKeyPairHex()
let publicKey = '047a9964d4145890c93326fbcca17b0ed6b588ed6d1c4a46640e874b1235aed9158ae29ee149d53d821596d42926194f761926b8c6286cdc813b11b136e1ce4f0a';//公钥
let privateKey = '6fa8b8c360269723bfe907b998dc4430aa256f025efd7b4c3a251d6a81b78c2d';//私钥
// let publicKey = keypair.publicKey; // 前端生成公钥
// let privateKey = keypair.privateKey; // 前端生成私钥
const cipherMode = 1 // 1 - C1C3C2，0 - C1C2C3，默认为1
/** SM2加密所需 ----------- end ------------- */

/** AES加密所需 ------------start ---------- */
import Crypto from '../util/encryp';
let aesKey = 'e4ea89835ad64eb1b8d76069e33908d4';//加密密钥
let aesIv = "ff465fdecc764337"; //加密aesIV，偏移量
/** AES加密所需 ------------end ---------- */

Mock.mock(/mock\/mockAll/, 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    let data = Mock.mock({
        "data|100": [ //生成100条数据 数组
            {
                "id|+1": 1,//生成商品id，自增1
                "msg": "@ctitle(10)", //生成商品信息，长度为10个汉字
                "name": "@cname",//生成商品名 ， 都是中国人的名字
                "tel": /^1(5|3|7|8)[0-9]{9}$/,//生成随机电话号
                "address": "@county(true)", //随机生成地址
                "star|1-5": "★", //随机生成1-5个星星
                "volume|30-1000": 30, //随机生成商品价格 在30-1000之间
                "logo": "@Image('100x40','#2f6caf', '#ffffff','logo')", //生成随机图片，大小/背景色/字体颜色/文字信息
                "food|2": [ //每个商品中再随机生成2个food
                    {
                        "foodName": "@cname", //food的名字
                        "foodPic": "@Image('100x40','#2f6caf', '#ffffff','pic')",//生成随机图片，大小/背景色/字体颜色/文字信息
                        "foodPrice|1-100": 20,//生成1-100的随机数
                        "aname|2": [
                            {
                                "aname": "@cname",
                                "aprice|30-60": 20
                            }
                        ]
                    }
                ]
            }
        ]
    })
    if (type == 'SM4') {
        let action = JSON.stringify(data)
        data = sm4.encrypt(action); //数据加密
    } else if (type == 'SM2') {
        let action = JSON.stringify(data)
        data = sm2.doEncrypt(action, publicKey, cipherMode) // 加密结果
    } else if (type == 'AES') {
        let action = JSON.stringify(data)
        data = Crypto.encrypt(action, aesKey, aesIv);
    } else {

    }
    return data
})

Mock.mock(/mock\/getMock/, 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    let data = Mock.mock({
        "data|100": [ //生成100条数据 数组
            {
                "starOne|1-10": '🌟',
                "numOne|+1": 200,
                "booleanOne|1": true,
                "objectOne|2": {
                    "310000": "上海市",
                    "320000": "江苏省",
                    "330000": "浙江省",
                    "340000": "安徽省"
                },
                "arrayOne|1": [
                    "AMD",
                    "CMD",
                    "UMD"
                ],
                date: Mock.Random.date('yyyy-MM-dd'),
                time: Mock.Random.time('HH:mm:ss'),
            }
        ]
    })
    return data
})
