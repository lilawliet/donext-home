import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'; // import the fontawesome core
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // import font awesome icon component
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'; // import specific icons/* add some free styles */
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { components, plugins } from './components';
import App from './App.vue';
import store from './stores';
import router from './router';
import '@/router/permission';
import 'virtual:svg-icons-register';

// css
import '@/styles/bootstrap.css';
import '@/styles/agency.css';
import '@/styles/tailwind.css';

/* add icons to the library */
library.add(faUserSecret);
library.add(faTwitter, faDiscord);

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

app.component('font-awesome-icon', FontAwesomeIcon);

// 加载全局组件
components.forEach((component) => {
  app.component(component.name, component);
});

// 加载全局插件
plugins.forEach((plugin) => {
  app.use(plugin);
});
