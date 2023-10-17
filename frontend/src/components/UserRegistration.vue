<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="username" placeholder="Username" />
      <input v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      axios.post('/api/users/register', {
        username: this.username,
        email: this.email,
        password: this.password
      })
      .then(() => {
        // Handle successful registration, e.g., redirect to login or show a success message
      })
      .catch(() => {
        // Handle errors, e.g., show an error message
      });
    }
  }
}
</script>
