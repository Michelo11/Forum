import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBook,
  faBookmark,
  faChevronDown,
  faCity,
  faCode,
  faComment,
  faFolderOpen,
  faMagnifyingGlass,
  faPaperPlane,
  faSwatchbook,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./assets/main.css";

library.add(
  faPaperPlane,
  faUser,
  faMagnifyingGlass,
  faBookmark,
  faFolderOpen,
  faBook,
  faChevronDown,
  faCity,
  faCode,
  faSwatchbook,
  faThumbsUp,
  faComment
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
