<template>
  <div>
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.description }}</p>
    <!-- Display movie details here -->

    <ul>
      <li v-for="review in reviews" :key="review.id">
        {{ review.user }}: {{ review.text }}
      </li>
    </ul>

    <!-- Review Form -->
    <ReviewForm :movieId="movie.id" @submitted="fetchReviews" />
  </div>
</template>

<script>
import axios from 'axios';
import ReviewForm from './ReviewForm.vue';

export default {
  components: {
    ReviewForm
  },
  data() {
    return {
      movie: {},
      reviews: []
    };
  },
  props: {
    movieId: {
      type: Number,
      required: true
    }
  },
  created() {
    this.fetchMovieDetails();
    this.fetchReviews();
  },
  methods: {
    fetchMovieDetails() {
      axios.get(`/api/movies/${this.movieId}`)
        .then(response => {
          this.movie = response.data;
        });
    },
    fetchReviews() {
      axios.get(`/api/reviews/${this.movieId}`)
        .then(response => {
          this.reviews = response.data;
        });
    }
  }
}
</script>
