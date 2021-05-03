import '@/assets/scss/index.scss';
import 'vite-plugin-svg-icons/register';

import { registerSW } from 'virtual:pwa-register';
import { createApp } from 'vue';

import App from '@/App.vue';
import SvgIcon from '@/components/global/SvgIcon.vue';

const app = createApp(App);

registerSW();

// Globals Components
app.component('SvgIcon', SvgIcon);

// Mounted App
app.mount('#app');
