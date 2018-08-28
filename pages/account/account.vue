<template>
    <view class="index" style="background: #fff">
        <view class="uni-column" style="padding: 50px">
            <view class="bill-total-content">{{netAsserts}}</view>
            <view style="font-size: 25px; color: #888888;padding: 10px;">净资产</view>
        </view>

        <view class="uni-flex uni-row">
            <view class="uni-flex uni-column" style="justify-content: center">
                <view class="account-head-money" style="justify-content: center">{{asserts}}</view>
                <view class="text bill-total-head">资产</view>
            </view>
            <view class="uni-flex uni-column" style="justify-content: center">
                <view class="text account-head-money">{{liability}}</view>
                <view class="text bill-total-head">负债</view>
            </view>
        </view>
        <view class="text">
            {{notification}}
        </view>


        <view class="bill-item-contanair">
            <view class="uni-flex uni-row"
                  v-for="(item, index) in billItems" :key="index" @click="jumpToDetail(item.id)">
                <!--<view class="uni-icon"></view>-->
                <view class="text-inline bill-account-name">{{item.accountName}}</view>
                <view class="text-inline bill-amount">{{item.income ? '+'
                    + item.amount : '-' + item.amount}}
                </view>
            </view>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                netAsserts: 0,
                asserts: 0,
                liability: 0,

                cost: 0,
                notification: '',
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
                }],
                lists: [{
                    id: 'view',
                    name: '视图容器',
                    open: false,
                    pages: ['view', 'scroll-view', 'swiper']
                }, {
                    id: 'content',
                    name: '基础内容',
                    open: false,
                    pages: ['text', 'rich-text', 'icon', 'progress']
                }, {
                    id: 'form',
                    name: '表单组件',
                    open: false,
                    pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider',
                        'switch', 'textarea'
                    ]
                }, {
                    id: 'nav',
                    name: '导航',
                    open: false,
                    pages: ['navigator']
                }, {
                    id: 'media',
                    name: '媒体组件',
                    open: false,
                    pages: ['image', 'audio', 'video']
                }, {
                    id: 'map',
                    name: '地图',
                    open: false,
                    pages: ['map']
                }, {
                    id: 'web-view',
                    name: '网页',
                    open: false,
                    pages: ['web-view']
                }]
            }
        },
        onShareAppMessage() {
            return {
                title: '欢迎体验uni-app',
                path: '/pages/component/component'
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
            goDetailPage(e) {
                uni.navigateTo({
                    url: '/pages/component/' + e + '/' + e
                })
            },
            jumpToDetail(id) {
                uni.navigateTo({
                    url: '/bill/bill/' + id
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
</style>
