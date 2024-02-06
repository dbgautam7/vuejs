import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './index.css'
import router from './routes';
import axios from 'axios';
import VueSocialSharing from 'vue-social-sharing'

axios.defaults.baseURL = 'https://vue-completecourse.firebaseio.com/';

const app = createApp(App);
app.config.productionTip = false;
app.use(store);
app.use(VueSocialSharing)
app.use(router)

app.mount('#app');
