<template xmlns="http://www.w3.org/1999/html">
    <view class="index"
          style="height: 100%;background-image: url(../../static/hm.png);background-position: right bottom, left top; background-size: 100% 100%">
        <form @submit="formSubmit" @reset="formReset" class="login-form">
            <view class="section">
                <view class="line"></view>
                <input @input="keyInputName" name="text" auto-focus placeholder="请输入登录名" maxlength="15"
                       class="text-inline uni-input login-input"/>
                <view v-if="isRegister">
                    <input @input="keyInputUserName" type="text" placeholder="请输入用户姓名" max-length="15"
                           class="text-inline uni-input login-input">
                </view>
                <input @input="keyInputPassword" password type="text" placeholder="请输入密码"
                       class="text-inline ﻿uni-input login-input"/>
                <view class="line"></view>
            </view>
            <view class="btn-area btn-group">
                <button @click="login" class="mini-btn hm-button" type="primary" size="mini"
                        style="margin-right: 20px;background-color:#935d5d;margin-left:28%;">登陆
                </button>
                <button @click="register" class="mini-btn hm-button" type="primary" size="mini"
                        style="margin-left: 20px;background-color:#935d5d">注册
                </button>
            </view>
        </form>
    </view>
</template>
<script>
    import store from '../../store/index';
    import {mapActions} from 'vuex';

    const duration = 2000;

    export default {
        data() {
            return {
                month: 1,
                income: 0,
                cost: 0,
                loginName: null,
                password: null,
                userName: null,
                isRegister: false,

                nodes: [{
                    name: 'div',
                    attrs: {
                        class: 'div_class',
                        style: 'line-height: 60px; color: black;text-align:left;margin: 10px 30px;'
                    },
                    children: [{
                        type: 'text',
                        text: 'first-bill-item'
                    }]
                }]
            }
        },
        methods: {
            ...mapActions([
                'loginAction'
            ]),
            keyInputName(e) {
                this.loginName = e.detail.value;
            },
            keyInputPassword(e) {
                this.password = e.detail.value;
            },
            keyInputUserName(e) {
                this.userName = e.detail.value;
            },
            trigerCollapse(e) {
                for (let i = 0, len = this.lists.length; i < len; ++i) {
                    if (e === i) {
                        this.lists[i].open = !this.lists[i].open;
                    } else {
                        this.lists[i].open = false;
                    }
                }
            },
            goDetailPage(e) {
                uni.navigateTo({
                    url: '/pages/component/' + e + '/' + e
                })
            },
            login() {
                console.log('enter login');
                if (this.isRegister) {
                    this.isRegister = false;
                    console.log('isRegister');
                    return;
                }
                if (!this.checkParam('login')) {
                    console.log('checkout');
                    return;
                }
                let param = {};
                param.loginName = this.loginName.trim();
                param.password = this.password.trim();

                // TODO @yanwenbo 密码加密动作

                uni.request({
                    url: 'http://localhost:10002/api/user/login',
                    data: param,
                    method: 'POST',
                    success: (res) => {
                        console.log("login success", res);
                        let param = res.data.data;

                        this.loginAction(param);
                        console.log(store);
                        uni.showToast({
                            title: '登录成功',
                            icon: 'success',
                            mask: true,
                            duration: duration
                        });
                        setTimeout(this.jumpToBill, 2000);
                    },
                    fail: function fail(err) {
                        uni.showToast({
                            title: '登录失败',
                            icon: 'error',
                            mask: true,
                            duration: duration
                        })
                    }
                });
            },
            register() {
                if (!this.isRegister) {
                    this.isRegister = true;
                    return;
                }
                if (!this.checkParam('register')) {
                    return;
                }
                let param = {};
                param.loginName = this.loginName.trim();
                param.name = this.userName.trim();
                param.password = this.password.trim();

                // TODO @yanwenbo 密码加密动作
                console.log("loginName: ", this.loginName);
                console.log("password: ", this.password);

                uni.request({
                    url: 'http://localhost:10002/api/user/create',
                    data: param,
                    method: 'POST',
                    success: () => {
                        console.log("register success");

                        uni.request({
                            url: 'http://localhost:10002/api/user/login',
                            data: param,
                            method: 'POST',
                            success: (res) => {
                                let param = res.data.data;

                                store.state.token = param.token;
                                store.state.hasLogin = true;
                                uni.showToast({
                                    title: '注册成功,自动登录',
                                    icon: 'success',
                                    mask: true,
                                    duration: duration
                                });
                                setTimeout(this.jumpToBill, 2000);
                            },
                            fail: function fail(err) {
                                uni.showToast({
                                    title: '注册成功，登录失败',
                                    icon: 'error',
                                    mask: true,
                                    duration: duration
                                })
                            }
                        });
                    },
                    fail: function fail(err) {
                        console.log("register fail", err);
                        uni.showToast({
                            title: '注册失败',
                            icon: 'error',
                            mask: true,
                            duration: duration
                        })
                    }
                });
            },
            checkParam(type) {
                if (this.loginName === null) {
                    uni.showToast({
                        title: '登录名不能为空',
                        icon: 'error',
                        mask: true,
                        duration: duration
                    });
                    return false;
                }
                if (type === 'register' && this.userName === null) {
                    uni.showToast({
                        title: '用户名不能为空',
                        icon: 'error',
                        mask: true,
                        duration: duration
                    });
                    return false;
                }
                if (this.password === null) {
                    uni.showToast({
                        title: '密码不能为空',
                        icon: 'error',
                        mask: true,
                        duration: duration
                    });
                    return false;
                }
                if (this.password.trim().length < 6) {
                    uni.showToast({
                        title: '密码至少6位',
                        icon: 'error',
                        mask: true,
                        duration: duration
                    });
                    return false;
                }
                return true;
            },
            jumpToBill() {
                uni.reLaunch({
                    url: '../bill/bill'
                })

            }
        }
    }
</script>

<style>
    @import "../../common/uni.css";

    .index {
        padding-bottom: 1px;
    }

    .uni-card {
        box-shadow: none;
    }

    .uni-list:after {
        height: 0;
    }

    .uni-list:before {
        height: 0;
    }

    .login-form {
        margin: 20px;
    }

    .login-input {
        width: 90%;
        padding: 15px 10px;
        margin-left: 20px;
    }

    .line {
        width: 90%;
        height: 1px;
        margin-left: 30px;
        background-color: #afc0ca;
    }
</style>
