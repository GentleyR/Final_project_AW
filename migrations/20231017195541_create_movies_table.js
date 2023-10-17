exports.up = function(knex) {
    return knex.schema.createTable('movies', table => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.date('release_date').notNullable();
      table.string('poster_url'); // URL to the movie's poster image.
      table.string('genre').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('movies');
  };
  