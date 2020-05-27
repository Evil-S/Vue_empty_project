import util from "./util.js";

const install = (Vue) => {
    Vue.prototype.$util = util;
};

export default install;
