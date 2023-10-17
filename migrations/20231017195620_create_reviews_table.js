exports.up = function(knex) {
    return knex.schema.createTable('reviews', table => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('users.id');
      table.integer('movie_id').unsigned().notNullable();
      table.foreign('movie_id').references('movies.id');
      table.integer('rating').notNullable(); // e.g., a rating out of 5 stars.
      table.text('review_text').notNullable(); // The text content of the review.
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('reviews');
  };
  