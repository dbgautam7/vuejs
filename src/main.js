
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './index.css'
import router from './routes';
import axios from 'axios';
import VueSocialSharing from 'vue-social-sharing'
import { vfmPlugin } from 'vue-final-modal'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

axios.defaults.baseURL = 'https://vue-completecourse.firebaseio.com/';

const app = createApp(App);
app.config.productionTip = false;
app.use(store);
app.use(VueSocialSharing)
app.use(router)
app.use(vfmPlugin)
app.component("v-select", vSelect);
app.mount('#app');
