<template>
    <view class="index">
        <view class="info-head uni-flex" style="justify-content: center;padding: 20px 0">
            <view class="user-image">
                <image src="../../static/pika.png" style="width: 150px;height: 150px;"></image>
            </view>
            <view class="user-message uni-row">
                <view @click="login" style="font-size: 30px;margin-top: 25px;">{{!hasLogin ? '暂未登录,点击登录' :
                    info.userName}}
                </view>
                <view style="font-size: 25px; color: #888888;padding: 10px;">{{!hasLogin ? '暂无描述' :
                    info.description}}
                </view>
            </view>
        </view>

        <view class="uni-card" v-for="(list,index) in lists" :key="index">
            <view class="uni-list">
                <view class="uni-list-cell uni-collapse">
                    <view class="uni-list-cell-navigate uni-navigate-bottom" hover-class="uni-list-cell-hover"
                          :class="list.open ? 'uni-active' : ''"
                          @click="trigerCollapse(index)">
                        {{list.name}}
                    </view>
                    <view class="uni-list uni-collapse" :class="list.open ? 'uni-active' : ''">
                        <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in list.pages"
                              :key="key" :url="item.url"
                              @click="goDetailPage(item.url)">
                            <view>
                                <image :src="'../../static/' + item.imagePath"
                                       style="width:30px;height:30px;margin:-8px;"></image>
                            </view>
                            <view class="uni-list-cell-navigate uni-navigate-right"> {{item.name}}</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view v-if="hasLogin">
            <button ﻿@click="loginOut" class="mini-btn" type="primary" size="mini"
                    style="background-color:#ea986c;color:#FFFFFF;width:50%;margin-left:25%;">退出登录
            </button>
        </view>
    </view>
</template>
<script>
    import localStorage from '../../common/localStorage'
    import ws from '../../web/ws'

    export default {
        data() {
            return {
                hasLogin: false,
                info: {
                    userName: null,
                    description: null
                },
                lists: [{
                    id: 'account',
                    name: '记账小工具',
                    open: true,
                    pages: [{
                        name: '心愿存钱',
                        url: '',
                        imagePath: 'wish.png'
                    }, {
                        name: '记账提醒',
                        url: '',
                        imagePath: 'notify.png'
                    }, {
                        name: '周期记账',
                        url: '',
                        imagePath: 'repeat.png'
                    }]
                }, {
                    id: 'app',
                    name: '其他',
                    open: true,
                    pages: [{
                        name: '主题换肤',
                        url: '',
                        imagePath: 'color.png'
                    }, {
                        name: '帮助与反馈',
                        url: '',
                        imagePath: 'message.png'
                    }, {
                        name: '一元慈善',
                        url: '',
                        imagePath: 'love.png'
                    }]
                },
                ]
            }
        },
        methods: {
            trigerCollapse(e) {
                for (let i = 0, len = this.lists.length; i < len; ++i) {
                    if (e === i) {
                        this.lists[i].open = !this.lists[i].open;
                    } else {
                        this.lists[i].open = false;
                    }
                }
            },

            loginOut() {
                if (this.hasLogin) {
                    uni.showModal({
                        content: "退出后无法继续使用记账，是否退出登录？",
                        confirmText: "确定",
                        cancelText: "取消",
                        success: (res) => {
                            if (res.confirm) {
                                this.loginOutAction();
                            }
                        }
                    })
                }
            },
            loginOutAction() {
                uni.request({
                    url: 'http://localhost:10002/api/user/loginout',
                    method: 'GET',
                    header: {'token': localStorage.getToken()},
                    success: () => {
                        console.log('i am login out.')
                        ws.closeWs();
                    }
                })
            },
            login() {
                uni.reLaunch({
                    url: '../user/login'
                })
            }
        },
        mounted() {
            this.hasLogin = localStorage.getHasLogin();
            if (this.getHasLogin()) {
                uni.request({
                    url: 'http://localhost:10002/api/user/' + this.getUserId(),
                    method: 'GET',
                    header: {'token': store.state.token},
                    success:  (res) => {
                        console.log('success get user info request, res:', res);
                        let param = res.data.data;
                        if (param) {
                            this.info = param;
                        }
                    }
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

    .user-message {

    }
</style>
