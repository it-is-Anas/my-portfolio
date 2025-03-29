export default {
    setName(state,name){
        state.name = name;
    },
    setEmail(state,email){
        state.email = email;
    },
    setMsg(state,msg){
        state.msg = msg;
    },
    setErr(state,err){
        state.err = err;
        setTimeout(() => {
            state.err = '';
        }, 2000);
    },openLoader(state){
        state.loader = true;
    },closeLoader(state){
        state.loader = !true;
    },reset(state){
        state.name = '';
        state.email = '';
        state.msg = '';
    }
};