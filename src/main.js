import Vue from "vue";
import Buefy from "buefy";
import App from "./App.vue";
import "./assets/scss/app.scss";

const qs = require("qs");

Vue.use(Buefy);

Vue.config.productionTip = false;

const rootId = "app";
const rootElement = document.getElementById(rootId);
const apiTokens = JSON.parse(rootElement.dataset.apiTokens);

const queriesValue = qs.parse(location.search.slice(1)).queries;
const queries = Array.isArray(queriesValue) ? queriesValue : [];

new Vue({
  render: h =>
    h(App, {
      props: { apiTokens, queries }
    })
}).$mount(`#${rootId}`);
