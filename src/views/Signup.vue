<template>
  <div id="app" class="container-fluid mt-5">
    <div class="col-md-6 offset-md-3">
      <h2 class="mb-4">Sign Up</h2>
      <form @submit.prevent="signUp">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Sign Up</button>
      </form>
      <p class="mt-3">Already have an account? <router-link to="/login">Login</router-link></p>
      <p v-if="error">{{ error.message }}</p>
    </div>
  </div>
</template>

<script>
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
    const signUp = async () => {
      try {
        await store.dispatch('signUp', {
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
    return { email, password, signUp };
  }
}
</script>

<style>

</style>