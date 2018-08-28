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
        <view class="bill-item-container">
            <view class="uni-flex uni-row uni-list bill-item"
                  v-for="(item, index) in billItems" :key="index" @click="jumpToDetail(item.id)">
                <view class="text-inline">
                    <view class="text-inline-item bill-account-name">{{item.accountName}}</view>
                    <view class="text-inline-item bill-amount">{{item.income ? '+' + item.amount : '-' + item.amount}}
                    </view>
                </view>
            </view>
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
            jumpToDetail(id) {
                uni.navigateTo({
                    url: '/bill/bill/' + id
                })
            }
        },
        created() {
            // const requestTash = uni.request({
            //     url: 'localhost:10002/api/bill/list',
            //     header: 'token: ' + store.state.token,
            //     success: function (res) {
            //         let param = res.data;
            //
            //         // TODO @yanwenbo 数据格式化处理
            //
            //         this.billItems = param;
            //         this.month = res.month;
            //         param.forEach(item => {
            //             if (item.isIncome) {
            //                 this.billItems.income += item.amount;
            //             } else {
            //                 this.billItems.cost += item.amount;
            //             }
            //         });
            //     }
            // });

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
</style>
