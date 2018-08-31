<template>
    <view class="index" style="background: #fff">
        <view class="index-hd uni-column uni-flex" style="justify-content: center;color: #FFFFFF">
            <view class="add-account">
                <image src="../../static/add.png" @click="jumpToOtherPages('add')" style="width: 60px; height: 60px;"></image>
            </view>
            <view class="uni-row uni-flex"
                  style="justify-content: center;border-bottom:#fff 1px solid;margin-right: 10px;height: 130px">
                <view style="font-size: 30px;padding: 14px;margin: 72px 5px 0 0;">净资产:</view>
                <view class="bill-total-content" style="font-size: 90px">{{netAssets}}</view>
            </view>
            <view class="uni-flex uni-row" style="justify-content: space-between;width:85%;padding:20px;">
                <view class="uni-flex uni-row" style="justify-content: flex-start">
                    <view class="text bill-total-head" style="font-size: 25px;">资产:</view>
                    <view class="text account-head-money">{{assets}}</view>
                </view>
                <view class="uni-flex uni-row" style="justify-content: flex-end">
                    <view class="text bill-total-head" style="font-size: 25px;">负债:</view>
                    <view class="text account-head-money">{{liability}}</view>
                </view>
            </view>
        </view>

        <view class="account-list" v-if="hasLogin">
            <view class="uni-card" v-for="(item, index) in assetsAccounts" :key="index"
                  @click="jumpToAssetsDetail(item.id)">
                <view class="account-card-item uni-row">
                    <image class="uni-card-media-logo" style="display: inline-block"
                           :src="'../../static/' + item.type + '.png'"></image>
                    <view class="uni-card-media-body account-msg uni-row">
                        <text class="text account-name">{{item.name}}</text>
                        <text class="text account-amount">{{item.balance}}</text>
                    </view>
                </view>
            </view>
            <view class="uni-card" v-for="(item, index) in liabilityAccounts" :key="index"
                  @click="jumpToLiabilityDetail(item.id)">
                <view class="account-card-item uni-row uni-flex" style="justify-content: space-between">
                    <image class="uni-card-media-logo" style="display: inline-block"
                           :src="'../../static/' + item.type + '.png'"></image>
                    <view class="uni-card-media-body account-msg uni-row">
                        <text class="text account-name">{{item.name}}</text>
                        <text class="text account-amount" style="color: #d81e06">{{item.amount}}</text>
                    </view>
                </view>

            </view>
        </view>

        <view v-if="!hasLogin" style="margin-top:20%;">
            <view style="margin: 60px 0 30px 0; justify-content: center" class="uni-flex">
                <image src="../../static/money-1.png" style="width: 128px; height: 128px;"></image>
            </view>
            <view class="uni-text remind-login">每一笔账单，都是生活的点滴</view>
            <button @click="jumpToOtherPages('login')" class="mini-btn" type="primary" size="mini"
                    style="background-color:#2782D7;color:#FFFFFF;width:50%;margin-left:25%;">登录
            </button>
        </view>
    </view>
</template>
<script>
    import localStorage from '../../common/localStorage'

    export default {
        data() {
            return {
                hasLogin: false,
                netAssets: 0,
                assets: 0,
                liability: 0,
                liabilityAccounts: [{
                    id: 1,
                    accountName: '花呗',
                    amount: 3000,
                    type: 'MYHUABEI'
                }],
                assetsAccounts: [{
                    id: 1,
                    accountName: '支付宝',
                    balance: 30000,
                    logo: 'ALIPAY'
                }, {
                    id: 2,
                    accountName: '微信',
                    balance: 1500,
                    logo: 'VCHATPAY'
                }]
            }
        },
        methods: {
            jumpToOtherPages(nameStr, param) {
                let name = nameStr.trim();
                switch (name) {
                    case 'add':
                        uni.navigateTo({
                            url: './add'
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
            },
            goDetailPage(e) {
                uni.navigateTo({
                    url: '/pages/component/' + e + '/' + e
                })
            },
            jumpToLiabilityDetail(id) {
                uni.navigateTo({
                    url: '/bill/bill/' + id
                })
            },
            jumpToAssetsDetail(id) {
                uni.navigateTo({
                    url: '/bill/bill/' + id
                })
            }
        },
        onLoad() {
            this.hasLogin = localStorage.getHasLogin();
            uni.request({
                url: 'http://localhost:10002/api/account/list',
                method: 'GET',
                header: {'token': localStorage.getToken()},

                success: (res) => {
                    if (res.data.success && res.data.data) {
                        let param = res.data.data;
                        console.log(param);
                        this.assets = parseFloat(param.totalAssets).toFixed(2);
                        this.liability = parseFloat(param.totalLiability).toFixed(2);
                        this.netAssets = parseFloat(parseInt(param.totalAssets) - parseInt(param.totalLiability)).toFixed(2);

                        this.liabilityAccounts = param.liabilityAccounts;
                        this.assetsAccounts = param.assetsAccounts;
                    }
                }
            })
        }
    }
</script>

<style>
    @import "../../common/uni.css";

    .index {
        padding-bottom: 1px;
    }

    .account-head-money {
        font-size: 30px;
    }

    .bill-amount {
        text-align: right;
        margin: 8px;
    }

    .bill-account-name {
        text-align: left;
    }

    .bill-total-head {
        border: 0;
    }

    .account-card-item {
        padding: 20px;
    }

    .account-msg {
        position: absolute;
        right: 60px;
        color: #2782D7;
        font-weight: bold;
        font-size: 28px;
        bottom: 10%;
    }

    .add-account{
        position: absolute;
        top: 0;
        right: 0;
        margin: 20px;
    }
</style>
