import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		loginProvider: "",
		openid: null,
		token: ''
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		}
	},
	actions: {
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
	}
})

export default store
