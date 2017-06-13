
exports.up = function(knex, Promise) {
  return knex.schema.createTable('idea', (table)=>{
    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('author');
    table.text('idea').notNullable();
    table.float('rating');
    table.boolean('adopted');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('idea');
};
