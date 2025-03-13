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
import './style/GSkill.css';
import './style/GServices.css';
import './style/GProjects.css';
createApp(App).use(store).use(router).mount('#app')
