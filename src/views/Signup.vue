<template>
  <div id="app" class="container-fluid mt-5">
    <div class="col-md-6 offset-md-3">
      <h2 class="mb-4">Sign Up</h2>
      <form @submit.prevent="signup">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="form.username" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="form.password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </form>
      <p class="mt-3">Already have an account? <router-link to="/login">Login</router-link></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
setup(){
  const form = ref({
          name: '',
          email: '',
          username: '',
          password: ''
        })
  const signup = () => {
        // You can add signup logic here
        console.log('Name:', form.value.name);
        console.log('Email:', form.value.email);
        console.log('Username:', form.value.username);
        console.log('Password:', form.value.password);
        // Redirect or perform further actions based on signup status
      };

  return { form, signup };
}
}
</script>

<style>

</style>