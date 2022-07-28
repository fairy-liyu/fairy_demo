import axios from 'axios';
import { Message } from 'element-ui';

axios.defaults.timeout = 5000; //超时终止请求
axios.defaults.baseURL = 'http://localhost:8081/'; //配置请求地址

var type = 'SM2';
// 对称加密选AES、SM4
// 非对称加密选 SM2

/** SM4加密所需 ----------- start------------- */
const SM4 = require("gm-crypt").sm4;
let sm4Config = {
    //配置sm4参数
    key: "HENG1AN2WEN3YIN4",//这里这个key值是跟后端要的
    mode: "ecb", // 加密的方式有两种，ecb和cbc两种，也是看后端如何定义的，不过要是cbc的话下面还要加一个iv的参数，ecb不用
    cipherType: "base64" // 
};
let sm4 = new SM4(sm4Config);//这里new一个函数，将上面的sm4Config作为参数传递进去。然后就可以开心的加密了
/** SM4加密所需 ----------- end------------- */
/** SM2加密所需 ----------- start ------------- */
const sm2 = require('sm-crypto').sm2
let keypair = sm2.generateKeyPairHex()
let publicKey = '047a9964d4145890c93326fbcca17b0ed6b588ed6d1c4a46640e874b1235aed9158ae29ee149d53d821596d42926194f761926b8c6286cdc813b11b136e1ce4f0a';//公钥
let privateKey = '6fa8b8c360269723bfe907b998dc4430aa256f025efd7b4c3a251d6a81b78c2d';//私钥
// let publicKey = keypair.publicKey; // 前端生成公钥
// let privateKey = keypair.privateKey; // 前端生成私钥
const cipherMode = 1 // 1 - C1C3C2，0 - C1C2C3，默认为1
/** SM2加密所需 ----------- end ------------- */


/** AES加密所需 ----------- start ------------- */
import Crypto from './encryp';
let aesKey = 'e4ea89835ad64eb1b8d76069e33908d4';//加密密钥
let aesIv = "ff465fdecc764337"; //加密aesIV，偏移量
/** AES加密所需 ----------- end ------------- */


//http request 拦截器
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        config.headers = {
            /*'Content-Type':'application/x-www-form-urlencoded'*/
            'Content-Type': 'application/json;charset=UTF-8'
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);


//http response 拦截器

axios.interceptors.response.use(
    response => {
        if (response.data.errCode == 2) {
            router.push({
                path: "/login",
                querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
            })
        }
        return response;
    },
    error => {
        Message({
            Message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error)
    }
)



/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resove, reject) => {
        switch (type) {    // 根据当前加密类型走向获取加密数据
            case 'SM2':
                postSm2(url, data).then(res => {
                    resove(res)
                }).catch(err => {
                    reject(err)
                });
                break;
            case 'SM4':
                postSm4(url, data).then(res => {
                    resove(res)
                }).catch(err => {
                    reject(err)
                });;
                break;
            case 'AES':
                postAes(url, data).then(res => {
                    resove(res)
                }).catch(err => {
                    reject(err)
                });;
                break;
            default:
                postDefault(url, data).then(res => {
                    resove(res)
                }).catch(err => {
                    reject(err)
                });;
                break;
        }
    })

}
/**
 * 默认不加密post请求
 * @param {*} url 请求路径
 * @param {*} data 请求参数
 * @returns 
 */
function postDefault(url, data) {
    return new Promise((resolve, reject) => {
        console.log('data', data)
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}
/**
 * SM2加密post请求
 * @param {*} url 请求路径
 * @param {*} data 请求参数
 * @returns 
 */
function postSm2(url, data) {
    return new Promise((resolve, reject) => {
        data = JSON.stringify(data)
        data = sm2.doEncrypt(data, publicKey, cipherMode) // 加密结果

        console.log('sm2加密', data)
        axios.post(url, data)
            .then(response => {
                response.data = JSON.parse(sm2.doDecrypt(response.data, privateKey, cipherMode))
                console.log('sm2解密', response)
                resolve(response.data);
            }, err => {
                err.data = JSON.parse(sm2.doDecrypt(err.data, privateKey, cipherMode))
                console.log('sm2解密', err)
                reject(err.data)
            })
    })
}
/**
 * SM4加密post请求
 * @param {*} url 请求路径
 * @param {*} data 请求参数
 * @returns 
 */
function postSm4(url, data) {
    return new Promise((resolve, reject) => {
        let action = JSON.stringify(data);
        // 引用sm4包进行加密
        action = sm4.encrypt(action); //数据加密
        console.log('sm4加密', action)
        axios.post(url, action)
            .then(response => {
                response.data = JSON.parse(sm4.decrypt(response.data))
                console.log('sm4解密', response)
                resolve(response.data);
            }, err => {
                err.data = JSON.parse(sm4.decrypt(err.data))
                console.log('sm4解密', err)
                reject(err.data)
            })
    })
}
/**
 * AES加密post请求
 * @param {*} url 请求路径
 * @param {*} data 请求参数
 * @returns 
 */
function postAes(url, data) {
    return new Promise((resolve, reject) => {
        data = JSON.stringify(data)// 注意：如果是对象/数组的话，需要先转换成字符串
        // 加密
        data = Crypto.encrypt(data, aesKey, aesIv);
        console.log('AES加密', data)
        axios.post(url, data)
            .then(response => {
                //调用解密方法
                response.data = JSON.parse(Crypto.decrypt(response.data, aesKey, aesIv));
                console.log('AES解密', response);
                resolve(response.data);
            }, err => {
                //调用解密方法
                err.data = JSON.parse(Crypto.decrypt(err.data, aesKey, aesIv));
                console.log('AES解密', response);
                reject(err)
            })
    })
}
/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}
