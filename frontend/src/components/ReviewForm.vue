<template>
  <div>
    <h3>Submit a Review</h3>
    <form @submit.prevent="submitReview">
      <textarea v-model="text" placeholder="Your review"></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      text: ''
    };
  },
  props: {
    movieId: {
      type: Number,
      required: true
    }
  },
  methods: {
    submitReview() {
      axios.post('/api/reviews', {
        movieId: this.movieId,
        text: this.text
      })
      .then(() => {
        this.text = ''; // Clear the form
        this.$emit('submitted'); // Notify parent component
      })
      .catch(() => {
        // Handle errors, e.g., show an error message
      });
    }
  }
}
</script>
