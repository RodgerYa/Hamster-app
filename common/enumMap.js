var accountTypeMap = new Map();

accountTypeMap.set(0, "支付宝");
accountTypeMap.set(1, "微信支付");
accountTypeMap.set(2, "现金");
accountTypeMap.set(3, "银行卡");
accountTypeMap.set(4, "其他");

var liabilityAccountTypeMap = new Map();

liabilityAccountTypeMap.set(0, "信用卡");
liabilityAccountTypeMap.set(1, "蚂蚁花呗");
liabilityAccountTypeMap.set(2, "京东白条");
liabilityAccountTypeMap.set(3, "其他");

var costTypeMap = new Map();

costTypeMap.set(0, "餐饮");
costTypeMap.set(1, "交通");
costTypeMap.set(2, "购物");
costTypeMap.set(3, "居住");
costTypeMap.set(4, "娱乐");
costTypeMap.set(5, "医疗");
costTypeMap.set(6, "教育");
costTypeMap.set(7, "其他");

module.exports = {
    accountTypeMap: accountTypeMap,
    liabilityAccountTypeMap: liabilityAccountTypeMap,
    costTypeMap: costTypeMap
};