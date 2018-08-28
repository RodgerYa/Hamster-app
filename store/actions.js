export default {
    loginAction ({commit}, param) {
        commit('login', param);
    },
    loginOutAction ({commit}) {
        commit('loginOut');
    },
    // lazy loading openid
    // TODO @yanwenbo 微信里面的openid的概念
    getUserOpenId: async function ({
                                       commit,
                                       state
                                   }) {
        return await new Promise((resolve, reject) => {
            if (state.openid) {
                resolve(state.openid)
            } else {
                uni.login({
                    provider: 'hamster',
                    success: (data) => {
                        commit('login');
                        state.token = data.token;
                        //TODO @yanwenbo 模拟异步请求服务器获取 openid 后面了解微信开发流程后再处理 openid 相关
                        setTimeout(function () {
                            const openid = '123456789'
                            console.log('uni.request mock openid[' + openid + ']');
                            commit('setOpenid', openid)
                            resolve(openid)
                        }, 1000)
                    },
                    fail: (err) => {
                        console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
                        reject(err)
                    }
                })
            }
        })
    }
};