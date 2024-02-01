<template>
  <div class="home">
    <h2 v-if="user">Logged in as {{ user.email }}</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

// @ is an alias to /src


export default {
  name: 'HomeView',
  setup(){
    const store = useStore()
    const user = computed(()=>store.state.user)
    const authCheck = computed(()=>store.getters.isAuthenticated)

    return { user, authCheck }
  }
}
</script>
