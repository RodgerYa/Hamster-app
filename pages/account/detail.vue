<template>
    <view class="index" style="background: #fff">
        <view class="edit-account">
        <image src="../../static/write-0.png" @click="jumpToOtherPages('edit')"
               style="width: 60px; height: 60px;"></image>
    </view>
        <view class="index-hd uni-column uni-flex" style="justify-content: center;color: #FFFFFF">
            <view class="add-account">
                <image src="../../static/add.png" @click="jumpToOtherPages('add')"
                       style="width: 60px; height: 60px;"></image>
            </view>
            <view class="uni-row uni-flex"
                  style="justify-content: center;border-bottom:#fff 1px solid;margin-right: 10px;height: 130px">
                <view style="font-size: 30px;padding: 14px;margin: 72px 5px 0 0;">账户余额:</view>
                <view class="bill-total-content" style="font-size: 90px">{{balance}}</view>
            </view>
            <view class="uni-flex uni-row" style="justify-content: space-between;width:85%;padding:20px;">
                <view class="uni-flex uni-row" style="justify-content: flex-start">
                    <view class="text bill-total-head" style="font-size: 25px;">累计流入:</view>
                    <view class="text account-head-money">{{totalAssets}}</view>
                </view>
                <view class="uni-flex uni-row" style="justify-content: flex-end">
                    <view class="text bill-total-head" style="font-size: 25px;">累计流出:</view>
                    <view class="text account-head-money">{{totalLiability}}</view>
                </view>
            </view>
        </view>

        <view class="uni-card" v-for="(item, index) in billList" :key="index">
            <view class="account-card-item uni-row" @click="jumpToOtherPages('billItem', item.id)">
                <image class="uni-card-media-logo" style="display: inline-block"
                       :src="'../../static/' + costIconMap.get(item.type) + '.png'"></image>
                <view class="uni-card-media-body account-msg uni-row">
                    <text class="text account-name">{{costTypeMap.get(item.type)}}</text>
                    <text class="text account-amount">{{item.amount}}</text>
                </view>
            </view>
        </view>

    </view>
</template>
<script>
    import localStorage from '../../common/localStorage'

    export default {
        data() {
            return {
                id: 1,
                accountType: null,
                totalAssets: 100,
                totalLiability: 0,
                balance: 100,
                billItems: [{
                    type: 0,
                    amount: 50,
                    icon: null,
                    created: '2018-09-03'
                }, {
                    type: 2,
                    amount: 1900,
                    icon: null,
                    created: '2018-09-03'
                }],
                hasLogin: false
            }
        },
        methods: {
            jumpToOtherPages(nameStr, param) {
                let name = nameStr.trim();
                let path = '';
                switch (name) {
                    case 'edit':
                        path = './edit?id=' + this.id + '&type=' + this.accountType;
                        break;
                    case 'login':
                        path = '../user/login';
                        break;
                    default:
                        break;
                }
                uni.navigateTo({url: path})
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
            },
            getAssetsDetail() {
                uni.request({
                    url: 'http://localhost:10002/api/account/' + this.id,
                    method: 'GET',
                    header: {'token': localStorage.getToken()},
                    success: (res) => {
                        let resp = res.data;
                        if (resp && resp.success) {
                            let param = resp.data;
                            if (param) {
                                this.name = param.name;
                                this.balance = formatAmount(param.balance);
                                this.amount = formatAmount(param.amount);
                                this.totalCost = formatAmount(param.totalCost);
                                this.totalIncome = formatAmount(param.totalIncome);
                                this.description = param.description;
                            }
                        } else {
                            console.log(resp.data.message);
                        }

                    }
                })
            },
            getLiabilityDetail() {
                uni.request({
                    url: 'http://localhost:10002/api/account/liability/' + this.id,
                    method: 'GET',
                    header: {'token': localStorage.getToken()},
                    success: (res) => {
                        let resp = res.data;
                        if (resp && resp.success) {
                            let param = resp.data;
                            if (param) {
                                this.name = param.name;
                                this.lineOfCredit = formatAmount(param.lineOfCredit);
                                this.amount = formatAmount(param.amount);
                                this.totalCost = formatAmount(param.totalCost);
                                this.statementDate = param.statementDate;
                                this.repaymentDate = param.repaymentDate;
                                this.description = param.description;
                            } else {
                                console.log(resp.data.message);
                            }
                        }

                    }
                })
            }
        },
        onLoad(param) {
            this.hasLogin = localStorage.getHasLogin();
            if (this.hasLogin) {
                this.id = param.id;
                this.accountType = param.type;
                if (param.type === 'assets') {
                    this.getAssetsDetail();
                } else {
                    this.getLiabilityDetail();
                }
            }
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

    .edit-account {
        position: absolute;
        top: 0;
        right: 0;
        margin: 20px;
    }
</style>
