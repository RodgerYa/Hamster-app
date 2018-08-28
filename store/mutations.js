export default {
    login (state, param) {
        state.hasLogin = true;
        state.token = param.token;
        state.loginName = param.loginName;
        state.userId = param.userId;
        state.time = new Date().getTime();
    },
    loginOut (state) {
        state.hasLogin = false;
        state.token = null;
    }
};