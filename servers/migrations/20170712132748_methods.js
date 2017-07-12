exports.up = function (knex, Promise) {
  return knex.schema.createTable('methods', tbl => {
    tbl.increments().primary()
    tbl.string('name').notNullable()
    tbl.text('description').notNullable()
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('methods')
};
