import { createStore } from 'vuex';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    currentUser: (state) => state.user,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
  },
  actions: {
    async signIn({ commit }, { email, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        commit('setUser', userCredential.user);
        return userCredential.user;
      } catch (error) {
        throw error;
      }
    },

    async signUp({ commit }, { email, password }) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        commit('setUser', userCredential.user);
        return userCredential.user;
      } catch (error) {
        throw error;
      }
    },

    async signOut({ commit }) {
      try {
        await signOut(auth);
        commit('setUser', null);
      } catch (error) {
        throw error;
      }
    },

    async checkAuthState({ commit }) {
      onAuthStateChanged(auth, (user) => {
        commit('setUser', user);
        commit('setAuthIsReady', true);
      });
    },
  },
  modules: {},
});

// Automatically check the authentication state when the app starts
store.dispatch('checkAuthState');

export default store;
