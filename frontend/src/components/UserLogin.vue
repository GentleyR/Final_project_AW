<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      axios.post('/api/users/login', {
        email: this.email,
        password: this.password
      })
      .then(() => {
        // Handle successful login, e.g., store user data or redirect to the dashboard
      })
      .catch(() => {
        // Handle errors, e.g., show an error message
      });
    }
  }
}
</script>
