module.exports = {
  devServer: {
    proxy: {
      '/api/users/register': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
};

fetch('/api/users/register', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      username: 'exampleuser',
      email: 'user@example.com',
      password: 'password123',
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
