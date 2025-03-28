export default {
    sendEmail(context){
        const name =  context.getters.getName;
        const email =  context.getters.getEmail;
        const msg =  context.getters.getMsg;
        console.log(name,email,msg);
    }
};