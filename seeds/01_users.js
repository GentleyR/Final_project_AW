exports.seed = function(knex) {
  return knex('users').del()
    .then(function() {
      return knex('users').insert([
        {username: 'john_doe', email: 'john@example.com', password: 'password123'},
        {username: 'jane_doe', email: 'jane@example.com', password: 'password456'}
      ]);
    });
};
