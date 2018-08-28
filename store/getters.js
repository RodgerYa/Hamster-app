export default {
    getHasLogin: (state) => {
        return state.hasLogin;
    },
    getToken: (state) => {
        return state.token;
    },
    getUserId: (state) => {
        return state.userId;
    },
    getTime: (state) => {
        return state.time;
    }
}