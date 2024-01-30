<template>
  <div id="app" class="container-fluid mt-5">
    <div class="col-md-6 offset-md-3">
      <h2 class="mb-4">Login</h2>
      <form @submit.prevent="signIn">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" id="email" v-model="email" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Login</button>
      </form>
      <p class="mt-3">Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
      <p v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
// create a firebase project
// create a config and firebase index files
// add logic to sign up and login
// add auth restrictions
// add persistent login
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default  {
  setup(){
    const store = useStore()
    const router = useRouter()

    const email = ref('');
    const password = ref('');
    const error = ref(null)
    const signIn = async () => {
      try {
        await store.dispatch('signIn', {
          email: email.value,
          password: password.value,
        })
        // Redirect to another page or perform additional actions after successful sign-up
        router.push('/')
      } catch (err) {
        console.error('Sign-up error:', err.message);
        // Handle error (e.g., show error message)
        error.value = err.message
      }
    }
    return { email, password, error, signIn };
  }
}
</script>