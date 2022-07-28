// import JSEncrypt from 'jsencrypt'
import JSEncrypt from 'encryptlong';


export default {

    //加密方法
    RSAencrypt(pas, publicKey) {
        //实例化jsEncrypt对象
        let encryptor = new JSEncrypt();
        //设置公钥
        encryptor.setPublicKey(publicKey);
        return encryptor.encryptLong(pas);
    },

    //解密方法
    RSAdecrypt(pas, privateKey) {
        let decryptor = new JSEncrypt();
        // 私钥
        decryptor.setPrivateKey(privateKey)
        return decryptor.decryptLong(pas);
    },


};