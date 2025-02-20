import state from "./state";
import actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
