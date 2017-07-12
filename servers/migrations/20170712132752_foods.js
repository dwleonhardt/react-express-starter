exports.up = function (knex, Promise) {
  return knex.schema.createTable('foods', (tbl) => {
    tbl.increments().primary()
    tbl.string('name').notNullable()
    tbl.integer('type_id').references('types.id').notNullable().onDelete('CASCADE')
    tbl.integer('method_id').references('methods.id').notNullable().onDelete('CASCADE')
    tbl.text('item_image').notNullable()
    tbl.text('instructions').notNullable()
    tbl.text('ingredients').notNullable()
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('foods')
};
