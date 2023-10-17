exports.seed = function(knex) {
  return knex('reviews').del()
    .then(function() {
      return knex('reviews').insert([
        {user_id: 1, movie_id: 1, rating: 5, text_review: 'Amazing movie with a mind-bending plot!'},
        {user_id: 2, movie_id: 1, rating: 4, text_review: 'Great visuals and storytelling.'},
        {user_id: 1, movie_id: 2, rating: 5, text_review: 'A heartwarming tale of hope and friendship.'},
        {user_id: 2, movie_id: 3, rating: 4, text_review: 'Intense action and a memorable villain.'}
      ]);
    });
};
