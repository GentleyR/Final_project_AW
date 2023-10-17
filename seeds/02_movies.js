exports.seed = function(knex) {
  return knex('movies').del()
    .then(function() {
      return knex('movies').insert([
        {title: 'Inception', description: 'A thief enters the dreams of others to steal their secrets.', release_date: '2010-07-16', genre: 'Sci-Fi'},
        {title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years.', release_date: '1994-09-23', genre: 'Drama'},
        {title: 'The Dark Knight', description: 'Batman battles the Joker, a psychopathic criminal.', release_date: '2008-07-18', genre: 'Action'}
      ]);
    });
};
