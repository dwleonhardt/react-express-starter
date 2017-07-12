exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([{
        name: 'Grilled Asparagus and Ricotta Pizza',
        item_image: 'http://assets.marthastewart.com/styles/wmax-520-highdpi/d32/med105744_0710_grilled_asparagus/med105744_0710_grilled_asparagus_vert.jpg?itok=HgsvMbjy',
        instructions: 'Heat it up: Set up a grill with heat source, coals or gas, on one side over medium-high. Clean and lightly oil hot grill. Stretch it: On a lightly floured work surface, stretch or roll 1 piece Basic Grilled Pizza Dough or 4 ounces store-bought dough into a 10-inch-long oval or other desired shape. Brush one side lightly with Herb Oil or olive oil and season with salt and pepper. Grill it: Using your hands, place dough, oiled side down, directly over heat source. Brush dough with herb oil or olive oil and cook until underside is lightly charred and bubbles form all over top, 1 to 2 minutes. With tongs, flip dough and cook until lightly charred, 1 to 2 minutes. Slide dough to cooler side of grill. Top it: Top with ricotta cheese, lemon zest and asparagus; cover grill. Cook until cheese melts and toppings are heated through, 2 to 5 minutes. Drizzle with herb oil before serving.',
        ingredients: '1/4 cup ricotta, 1/2 bunch asparagus, grilled, 1 tablespoon grated lemon zest, Herb Oil, Basic Grilled Pizza Dough, Coarse salt and ground pepper',
        method_id: 1,
        type_id: 4
      }]);
    }).then(() => {
      return knex.raw("SELECT setval('foods_id_seq', (SELECT MAX(id) FROM foods));")
    });
};
