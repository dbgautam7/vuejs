import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './index.css'
import router from './routes';
import axios from 'axios';

axios.defaults.baseURL = 'https://vue-completecourse.firebaseio.com/';

const app = createApp(App);
app.use(store);
app.use(router)

app.mount('#app');
