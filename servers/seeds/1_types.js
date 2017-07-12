exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([{
          name: 'Veggies'
        },
        {
          name: 'Meats'
        },
        {
          name: 'Desserts'
        },
        {
          name: 'Other'
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('types_id_seq', (SELECT MAX(id) FROM types));")
    });
};
