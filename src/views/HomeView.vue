<template>
  <div class="home">
    <h2 v-if="user">Logged {{ test }} in as {{ user.email }}</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
</template>

<script>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'

// @ is an alias to /src


export default {
  name: 'HomeView',
  props: {
    test: String
  },
  setup(props){
    const store = useStore()
    const user = computed(()=>store.state.user)
    const authCheck = computed(()=>store.getters.isAuthenticated)

    return { user, authCheck }
  }
}
</script>
