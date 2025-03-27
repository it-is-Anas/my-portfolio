import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css';
import 'normalize.css';
// main styles
import './style/mainStyle.css';
import './style/logo.css';
import './style/HeadersStyles.css';
import './style/PopUpsStyles.css';
import './style/Sections.css';
import './style/Buttons.css';
import './style/HeadLine.css';
import './style/Skill.css';
import './style/ProjectCard.css';
import './style/ServiceCard.css';
import './style/InputStyle.css';
import './style/SocialMediaBar.css';
import './style/GlubalCmps.css';
// animations
import './Animations/SlideUp.css';
import './Animations/Grow.css';
import './Animations/Fade.css';


const app = createApp(App);

// g cmp
import AppMsg from './gCmps/AppMsg.vue';
import AppLoader from './gCmps/AppLoader.vue';

app.component('AppMsg',AppMsg);
app.component('AppLoader',AppLoader);

app.use(store).use(router).mount('#app')
