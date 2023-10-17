<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movies: []
    };
  },
  created() {
    axios.get('/api/movies')
      .then(response => {
        this.movies = response.data;
      })
      .catch(error => {
        console.error("There was an error fetching the movies:", error);
      });
  }
}
</script>
