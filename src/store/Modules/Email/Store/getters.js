export default {
    getName(state){
        return state.name;
    },
    getEmail(state){
        return state.email;
    },
    getMsg(state){
        return state.msg;
    },
    getErr(state){
        return state.err;
    },getLoader(state){
        return state.loader;
    }
};