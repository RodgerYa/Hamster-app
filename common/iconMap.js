var accountIconMap = new Map();

accountIconMap.set(0, "alipay");
accountIconMap.set(1, "vchatpay");
accountIconMap.set(2, "cash");
accountIconMap.set(3, "card");
accountIconMap.set(4, "other");

var liabilityIconTypeMap = new Map();

liabilityIconTypeMap.set(0, "credit-card");
liabilityIconTypeMap.set(1, "huabei");
liabilityIconTypeMap.set(2, "jdbaitiao");
liabilityIconTypeMap.set(3, "other");

var costIconMap = new Map();

costIconMap.set(0, "food");
costIconMap.set(1, "traffic");
costIconMap.set(2, "buy");
costIconMap.set(3, "live");
costIconMap.set(4, "play");
costIconMap.set(5, "medicine");
costIconMap.set(6, "education");
costIconMap.set(7, "other");

module.exports = {
    accountIconMap: accountIconMap,
    liabilityIconTypeMap: liabilityIconTypeMap,
    costIconMap: costIconMap
};