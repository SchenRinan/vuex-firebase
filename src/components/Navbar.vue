<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Your {{ test }}Logo</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-if="!user">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <button v-if="user" class="btn btn-primary" @click="handleLogout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, defineProps } from 'vue'
import { mapGetters } from 'vuex';

export default {
  props: {
    test: String,
  },
  setup(props){
    //const store = useStore()
    //const user = computed(()=>store.state.user)
    //const authCheck = computed(()=> store.state.authIsReady) 
    //const user = computed(()=>store.getters.currentUser)
    //const authCheck = computed(()=>store.getters.isAuthenticated)
    const { currentUser, authCheck } = mapGetters(['currentUser', 'isAuthenticated'])

    //const handleLogout = async () =>{
    //  await store.dispatch('signOut')
    //}
    const handleLogout = async () => {
      try {
        await this.$store.dispatch('signOut');
      } catch (error) {
        console.error('Logout error:', error);
      }
    }

    return { handleLogout, user: currentUser, authCheck }
  }
}
</script>

<style>

</style>