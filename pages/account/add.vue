<template>
    <view class="index">
        ﻿
        <view class="page-section page-section-gap">
            <radio-group class="uni-flex" name="radio" style="justify-content: space-between; padding: 35px 70px;"
                         @change="radioChange">
                <label>
                    <radio value="assets"/>
                    资产账户</label>
                <label>
                    <radio value="liability"/>
                    负债账户</label>
            </radio-group>
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
                        账户类型
                    </view>
                    <view class="list-right" style="width: 345px">
                        <picker @change="bindPickerChange" :value="typeIndex" :range="assetsTypes">
                            <view class="uni-input">{{assetsTypes[typeIndex]}}</view>
                        </picker>
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
                            <view class="uni-input" style="color: red">{{fullDates[stateIndex]}}</view>
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
                            <view class="uni-input" style="color: red">{{fullDates[repayIndex]}}</view>
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
                isAssets: true,
                isLiability: false,
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
            saveAssetsAccount() {
                let param = {};
                param.type = this.type;
                param.name = this.name;
                param.balance = (parseFloat(this.balance) * 100).toFixed(0);
                param.description = this.description;
                uni.request({
                    url: 'http://localhost:10002/api/account/create',
                    method: 'POST',
                    header: {token: localStorage.getToken()},
                    data: param,
                    success: (res) => {
                        if (res.success) {
                            console.log("新增资产账户成功");
                            uni.relaunch({url: './account'});
                        }
                        // TODO @yanwenbo 弹窗提醒，弹窗比较多 优化反感： 1/使用message 2/封装弹窗组件
                    }
                });
            },
            saveLiabilityAccount() {
                let param = {};
                param.type = this.type;
                param.name = this.name;
                param.amount = (parseFloat(this.credit) * 100).toFixed(0);
                param.lineOfCredit = (parseFloat(this.lineOfCredit) * 100).toFixed(0);
                param.statementDate = this.statementDate;
                param.repaymentDate = this.repaymentDate;
                param.description = this.description;
                uni.request({
                    url: 'http://localhost:10002/api/account/liability/create',
                    method: 'POST',
                    header: {token: localStorage.getToken()},
                    data: param,
                    success: (res) => {
                        if (res.data.success) {
                            console.log("新增资产账户成功");
                            this.jumpToAccount();
                        }
                        // TODO @yanwenbo 弹窗提醒，弹窗比较多 优化反感： 1/使用message 2/封装弹窗组件
                    }
                });
            },
            jumpToAccount(){
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
            jumpToOtherPage(name, param) {
                if (name === 'add') {
                    uni.navigateTo({
                        url: './add'
                    })
                }
            }
        },
        onLoad() {
            this.fullDates = Array.from({length: 30}, (_, index) => index + 1);
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

    .uni-list-cell {
        padding: 10px;
    }
</style>
