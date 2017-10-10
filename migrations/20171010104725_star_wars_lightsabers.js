
exports.up = function(knex, Promise) {
  return Promise.all([
  knex.schema.createTable('lightsabers', (table) => {
    table.increments();
    table.string('color');
  })
])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  knex.schema.dropTable('lightsabers')
])
};
