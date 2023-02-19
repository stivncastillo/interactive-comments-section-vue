import data from "../data/data.json";

export const authModule = {
  namespaced: true,
  state: () => ({
    currentUser: data.currentUser,
  }),
  mutations: {},
  actions: {},
};
