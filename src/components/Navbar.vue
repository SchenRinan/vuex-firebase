<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Your Logo</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav" v-if="authIsReady">
          <li class="nav-item">
            <router-link to="/login" class="nav-link" v-if="!user">Login</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <button class="btn btn-primary" @click="handleLogout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  props: {
    user: Object,
    authIsReady: Boolean,
  },
  setup(){
    const handleLogout = async () => {
      try {
        await store.dispatch('signOut');
      } catch (error) {
        console.error('Logout error:', error);
      }
    }

    return { handleLogout }
  }
}
</script>

<style>

</style>