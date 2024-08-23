import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faUsers, faGear, faChevronRight, faBars, faFolder, faDollarSign, faPlusCircle, faPlus, faList, faPen, faPenAlt, faDumbbell, faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent FontAwesome from automatically adding CSS which causes a flash of unstyled content
config.autoAddCss = false;

library.add(faHouse, faUsers, faGear, faChevronRight, faBars, faFolder, faDollarSign, faPlusCircle, faPlus, faList, faPen, faPenAlt, faDumbbell, faCopy, faTrash);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});