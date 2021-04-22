import '@/assets/scss/index.scss';
import 'vite-plugin-svg-icons/register';

import { createApp } from 'vue';

import App from '@/App.vue';
import SvgIcon from '@/components/global/SvgIcon.vue';

const app = createApp(App);

// Globals Components
app.component('SvgIcon', SvgIcon);

// Mounted App
app.mount('#app');
