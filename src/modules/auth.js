import AuthService from "../service/auth";
import { setItem } from "../helpers/persistenceStorage";

const state = {
  isLoading: false,
  user: null,
  errors: null,
};

const mutations = {
  registerStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
  },
  registerSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
  },
  registerFailure(state, payload) {
    state.isLoading = false;
    state.errors = payload.errors;
  },
};

const actions = {
  register({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit("registerStart");
      AuthService.register(payload)
        .then((response) => {
          commit("registerSuccess", response.data.user);
          setItem("token", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error) => {
          commit("registerFailure", error.response.data);
          reject(error.response.data);
        });
    });
  },
};

export default { state, mutations, actions };
