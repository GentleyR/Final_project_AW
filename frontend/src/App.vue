<template>
  <div id="app">
    <div>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <!-- Add more links as needed -->
    </div>
    <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
