export default {
    set(key, value) {
        uni.setStorage({
            key: key.toString(),
            data: value,
            success: function () {
                console.log("setStorage success");
            }
        })
    },
    get(key) {
        try {
            const value = uni.getStorageSync(key);
            if (value) {
                return value
            }
        } catch (e) {
            console.log("getStorage(" + key + ") fail, error is " + e);
        }
    },
    getToken() {
        try {
            const value = uni.getStorageSync('user');
            if (value && value.token) {
                console.log("getToken ", value.token);
                return value.token
            }
        } catch (e) {
            console.log("getToken fail, error is " + e);
        }
    },
    getHasLogin() {
        try {
            const value = uni.getStorageSync('user');
            if (value && value.hasLogin) {
                console.log("getHaslogin ", value.hasLogin);
                return value.hasLogin
            }
        } catch (e) {
            console.log("get hasLogin fail, error is " + e);
        }
    }
};
