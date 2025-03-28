export default {
    sendEmail(context){
        const name =  context.getters.getName;
        const email =  context.getters.getEmail;
        const msg =  context.getters.getMsg;
        if(!name.length || !email.length || !msg.length){
            context.commit('setErr','Form inputs have to be not empty');
        }
    }
};