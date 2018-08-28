<template>
    <view class="index">
        <view class="index-hd">
            <view class="uni-flex uni-row" style="justify-content: center;">

                <view class="uni-flex uni-column" style="justify-content: center;margin-right: 20px">
                    <view class="text bill-total-content">
                        {{income}}
                    </view>
                    <view class="text bill-total-head">
                        {{month}}月收入
                    </view>
                </view>
                <view class="uni-flex uni-column" style="justify-content: center; margin-left: 20px">
                    <view class="text bill-total-content">
                        {{cost}}
                    </view>
                    <view class="text bill-total-head">
                        {{month}}月支出
                    </view>
                </view>
            </view>
        </view>
        <view class="bill-item-container" v-if="hasLogin">
            <view class="uni-flex uni-row uni-list bill-item"
                  v-for="(item, index) in billItems" :key="index" @click="jumpToOtherPages('detail', item.id)">
                <view class="text-inline">
                    <view class="text-inline-item bill-account-name">{{item.accountName}}</view>
                    <view class="text-inline-item bill-amount">{{item.income ? '+' + item.amount : '-' + item.amount}}
                    </view>
                </view>
            </view>
        </view>
        <view v-if="!hasLogin">
            <view style="margin: 30px 0">
                <image src="../../static/write-1.png" style="width: 64px; height: 64px;"></image>
            </view>
            <view class="uni-text remind-login">每一笔账单，都是生活的点滴</view>
            <button ﻿@click="jumpToOtherPages('login')" class="mini-btn" type="primary" size="mini"
                    style="background-color:#2782D7;color:#FFFFFF;width:50%;margin-left:25%;">登录
            </button>
        </view>
    </view>
</template>
<script>
    import store from "../../store";

    export default {
        data() {
            return {
                month: 1,
                income: 0,
                cost: 0,
                hasLogin: false,
                billItems: [{
                    id: 1,
                    userName: '我',
                    accountType: '支付宝',
                    accountName: '支付宝',
                    amount: 10.00,
                    income: false,
                    time: '2018-08-17'
                }, {
                    id: 2,
                    userName: '我',
                    accountType: '微信',
                    accountName: '微信支付',
                    amount: 12.00,
                    income: false,
                    time: '2018-08-17'
                }, {
                    id: 3,
                    userName: '我',
                    accountType: '银行卡',
                    accountName: '中国银行',
                    amount: 10000.00,
                    income: true,
                    time: '2018-08-17'
                }],
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
        onShareAppMessage() {
            return {
                title: '欢迎使用仓鼠记账',
                path: '/pages/bill/bill'
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
            jumpToOtherPages(nameStr, param) {
                let name = nameStr.trim();
                switch (name) {
                    case 'detail':
                        uni.navigateTo({
                            url: '/bill-detail/id=' + param
                        });
                        break;
                    case 'login':
                        uni.navigateTo({
                            url: '../user/login'
                        });
                        break;
                    default:
                        break;
                }
            }
        },
        updated() {
            this.hasLogin = store.state.hasLogin;
        },
        mounted() {
            this.hasLogin = store.state.hasLogin;
            if (this.hasLogin) {
                const requestTash = uni.request({
                    url: 'http://localhost:10002/api/bill/list',
                    header: {'token': store.state.token},
                    success:  (res) => {
                        console.log('success request, res:', res);
                        let param = res.data.data;
                        if (param && param.length > 0) {
                            console.log('enter if', param);
                            this.billItems = param;
                            this.billItems.income = param.income;
                            // FIXME @yanwenbo 这里后端的接口返回需要 额外字段
                            this.billItems.cost = param.cost;
                            this.month = res.data.month;
                        } else {
                            console.log('billItem is []');
                            this.billItems = [];
                        }
                        console.log("hasLogin:", this.hasLogin)
                        // TODO @yanwenbo 数据格式化处理

                    }
                });
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

    .bill-amount {
        text-align: right;
        margin: 8px;
        color: #5c6063;
        font-weight: bold;
        font-size: 35px;

    }

    .bill-account-name {
        text-align: left;
        color: #201209;
        font-size: 32px;
    }

    .text-inline-item {
        width: 45%;
        display: inline-block;
    }

    .bill-item {
        justify-content: center;
        box-sizing: border-box;
        border-radius: 10px;
        /*border-top: #afc0ca solid 1px;*/
        box-shadow: 1px 2px 2px #afc0ca;
        padding: 10px 0;
    }

    .bill-item-container {
        padding-top: 30px;
        border-radius: 10px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .remind-login {
        font-size: 25px;
        color: #afc0ca;
        padding: 20px;
        text-align: center;
    }
</style>
