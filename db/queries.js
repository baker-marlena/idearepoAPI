const knex = require('./knex');

module.exports = {
  getAll: () => {
    return knex('idea');
  },
  getOne: (id) => {
    return knex('idea').where('id', id);
  },
  create: (idea) => {
    return knex('idea').insert(idea, '*');
  },
  updateRating: (id, rating) => {
    return knex('idea').update('rating', rating, '*').where('id', id);
  },
  delete: (id) => {
    return knex('idea').del().where('id', id);
  },
  getByAuthor: (query) =>{
    return knex('idea').where('author', 'like', `%${query}%`);
  },
  getByTitle: (query) => {
    return knex('idea').where('title', query).debug();
  }
}
