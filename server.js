const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex')(require('./knexfile').development);

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test route
app.get('/', (req, res) => {
    res.send('Movie Review API is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// User Registration
app.post('/api/users/register', async (req, res) => {
    const { username, email, password } = req.body;

    // TODO: Hash the password before storing (use bcrypt or similar library)

    try {
        const userId = await knex('users').insert({ username, email, password });
        res.json({ success: true, userId });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error registering user.' });
    }
});

// User Login
app.post('/api/users/login', async (req, res) => {
    const { email, password } = req.body;

    // TODO: Check hashed password (use bcrypt or similar library)

    try {
        const user = await knex('users').where({ email }).first();
        if (user && user.password === password) { // This is a basic check. In real-world scenarios, you'd compare hashed passwords.
            res.json({ success: true, userId: user.id });
        } else {
            res.status(400).json({ success: false, message: 'Invalid credentials.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error logging in.' });
    }
});

app.get('/api/movies', async (req, res) => {
    try {
        const movies = await knex('movies').select();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching movies.' });
    }
});

// Single Movie Details
app.get('/api/movies/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await knex('movies').where({ id }).first();
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({ success: false, message: 'Movie not found.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching movie details.' });
    }
});

app.post('/api/reviews', async (req, res) => {
    const { movie_id, rating, text_review } = req.body;

    try {
        const reviewId = await knex('reviews').insert({ movie_id, rating, text_review });
        res.json({ success: true, reviewId });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error submitting review.' });
    }
});

// List Reviews for a Movie
app.get('/api/reviews/:movie_id', async (req, res) => {
    const { movie_id } = req.params;
    try {
        const reviews = await knex('reviews').where({ movie_id });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching reviews.' });
    }
});
