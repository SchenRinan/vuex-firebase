<template>
  <div class="home">
    <h2 v-if="user">Logged in as {{ user.email }}</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    user: Object,
    authIsReady: Boolean
  },
}
</script>
