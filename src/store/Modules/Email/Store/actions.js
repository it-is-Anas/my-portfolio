export default {
        async sendEmail(context){
            const name =  context.getters.getName;
            const email =  context.getters.getEmail;
            const msg =  context.getters.getMsg;
            if(!name.length || !email.length || !msg.length){
                context.commit('setErr','Form inputs have to be not empty');
            }

            const formData = new URLSearchParams();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', msg); // Field name should match your form in Formspree
            
            const ip = 'https://formspree.io/f/mjkyojog';
            const method = 'POST';
            
            context.commit('openLoader');
            const request = await fetch(ip, {
                method: method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const response = await request.json(); // Parse the JSON response        
            
            context.commit('closeLoader');
            
            if (request.ok) {
                context.commit('reset'); 
                context.commit('setErr',' Email sent successfully');
            } else {
                context.commit('setErr',' Error sending email');
            }
        }
};