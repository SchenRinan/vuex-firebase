import { createStore } from 'vuex'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

// import firebase from 'firebase/app'
// import 'firebase/auth'



const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  getters: {
    // isAuthenticated: (state) => !!state.user,
    // currentUser: (state) => state.user,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setAuthIsReady(state, payload){
      state.authIsReady = payload
    }
  },
  actions: {
    async signIn({ commit }, { email, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        commit('setUser', userCredential.user);
        return userCredential.user
      } catch (error) {
        throw error
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

    // async checkAuthState({ commit }) {
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       commit('setUser', user);
    //     } else {
    //       commit('setUser', null);
    //     }
    //   });
    // },
  },
  modules: {
  }
})

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  unsub()
})

export default store