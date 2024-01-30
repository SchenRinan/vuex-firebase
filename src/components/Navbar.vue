<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Your Logo</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav" v-if="authCheck">
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
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup(){
    const store = useStore()
    const user = computed(()=>store.state.user)

    const handleLogout = async () =>{
      await store.dispatch('signOut')
    }

    return { handleLogout, user, authCheck: computed(()=> store.state.authIsReady) }
  }
}
</script>

<style>

</style>