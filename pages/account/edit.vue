<template>
    <view class="index">
        ﻿
        <view class="page-section page-section-gap">
            ﻿
            <view class="uni-list">
                <view class="uni-list-cell">
                    <view class="list-left">
                        账户名称
                    </view>
                    <view class="list-right">
                        <input class="uni-input" maxlength="10" v-model="name" placeholder="输入账户名称"/>
                    </view>
                </view>
            </view>
            <view class="uni-list" v-if="isAssets">
                <view class="uni-list-cell">
                    <view class="list-left">
                        账户余额
                    </view>
                    <view class="list-right">
                        <input class="uni-input" maxlength="10" ﻿type="digit" v-model="balance" placeholder="输入账户余额"/>
                    </view>
                </view>
            </view>

            <view class="uni-list" v-if="!isAssets">
                <view class="uni-list-cell">
                    <view class="list-left">
                        账户类型
                    </view>
                    <view class="list-right" style="width: 345px">
                        <picker @change="bindPickerChange" :value="typeIndex" :range="liabilityTypes">
                            <view class="uni-input">{{liabilityTypes[typeIndex]}}</view>
                        </picker>
                    </view>
                </view>
            </view>
            <view class="uni-list" v-if="!isAssets">
                <view class="uni-list-cell">
                    <view class="list-left">
                        信用额度
                    </view>
                    <view class="list-right">
                        <input class="uni-input" maxlength="10" ﻿type="digit" v-model="lineOfCredit"
                               placeholder="输入账户余额"/>
                    </view>
                </view>
            </view>
            <view class="uni-list" v-if="!isAssets">
                <view class="uni-list-cell">
                    <view class="list-left">
                        当前欠款
                    </view>
                    <view class="list-right">
                        <input class="uni-input" maxlength="10" ﻿type="digit" v-model="credit" placeholder="输入当前欠款"/>
                    </view>
                </view>
            </view>
            <view class="uni-list" v-if="!isAssets">
                <view class="uni-list-cell">
                    <view class="list-left">
                        账单日
                    </view>
                    <view class="list-right" style="width: 345px">每月
                        <picker @change="statementPickerChange" :value="stateIndex" :range="fullDates">
                            <view class="uni-input" style="color: red;display:inline-block;">{{fullDates[stateIndex]}}</view>
                        </picker>
                        日
                    </view>
                </view>
            </view>
            <view class="uni-list" v-if="!isAssets">
                <view class="uni-list-cell">
                    <view class="list-left">
                        还款日
                    </view>
                    <view class="list-right" style="width: 345px">每月
                        <picker @change="repaymentPickerChange" :value="repayIndex" :range="fullDates">
                            <view class="uni-input" style="color: red;display:inline-block;">{{fullDates[repayIndex]}}</view>
                        </picker>
                        日
                    </view>
                </view>
            </view>
            <view class="uni-list">
                <view class="uni-list-cell">
                    <view class="list-left">
                        账户描述
                    </view>
                    <view class="list-right">
                        <input class="uni-input" v-model="description" placeholder="输入账户描述"/>
                    </view>
                </view>
            </view>
            <button ﻿@click="save" class="mini-btn" type="primary" size="mini"
                    style="background-color:#2782D7;color:#FFFFFF;width:50%;margin-left:25%;margin-top: 50px;">保存
            </button>

        </view>
    </view>
</template>
<script>
    import localStorage from '../../common/localStorage'

    export default {
        data() {
            return {
                totalCost: 0,
                totalIncome: 0,
                assetsTypes: ['支付宝', '微信', '现金', '银行卡', '其他'],
                liabilityTypes: ['信用卡', '花呗', '京东白条', '其他'],
                fullDates: [],
                typeIndex: 0,
                repayIndex: 0,
                stateIndex: 0,
                name: '',
                type: null,
                balance: null,
                lineOfCredit: null,
                description: '',
                credit: null,
                statementDate: 10,
                repaymentDate: 10
            }
        },
        methods: {
            bindPickerChange: function (e) {
                this.type = e.target.value;
                this.typeIndex = e.target.value;
            },
            // TODO @yanwenbo 处理日期的值
            repaymentPickerChange: function (e) {
                this.repayIndex = e.target.value
            },
            statementPickerChange: function (e) {
                this.stateIndex = e.target.value
            },
            radioChange(e) {
                let radioVal = e.detail.value;
                this.isAssets = radioVal === 'assets';
            },
            save() {
                if (!this.checkForm()) {
                    return;
                }
                if (this.isAssets) {
                    this.saveAssetsAccount();
                } else {
                    this.saveLiabilityAccount()
                }
            },
            checkForm() {
                return true;
                // TODO 校验参数合法性
            },
            jumpToAccount() {
                uni.reLaunch({url: './account'});
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
            jumpToOtherPage(name, param) {
                if (name === 'add') {
                    uni.navigateTo({
                        url: './add'
                    })
                }
            },
            getAssetsDetail(id) {
                uni.request({
                    url: 'http://localhost:10002/api/account/' + id,
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
            getLiabilityDetail(id) {
                uni.request({
                    url: 'http://localhost:10002/api/account/liability/' + id,
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
            },
        },
        onLoad(param) {
            if (!param && param.id && param.type) {
                this.isAssets = type === 'assets';
                if (this.isAssets){
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

    .uni-list-cell {
        padding: 10px;
    }
</style>
