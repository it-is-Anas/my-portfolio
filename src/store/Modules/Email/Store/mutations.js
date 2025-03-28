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
    },
};