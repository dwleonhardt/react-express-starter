exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('methods').del()
    .then(function () {
      // Inserts seed entries
      return knex('methods').insert([{
          name: 'Direct Heat',
          description: "Direct heat grilling is the most basic and common grilling method. The words speak for this method. Food items are placed over direct heat in order to cook them. This can be done over a charcoal, gas, wood or any other heat source. The heat is usually high and ideal for searing.  Searing involves using high heat to burn both sides of your food item for a few minutes to seal flavors. The thicker your meat the longer you can sear. After searing, the food item can then be transferred to the not-so part of the grill to cook. Hamburgers, steaks, chops, sausages even kabobs do well with direct heat. These foods usually take 30 minutes or less to be fully cooked.",
        },
        {
          name: 'Indirect Heat',
          description: "Indirect grilling is a method where the food is cooked with reflected or indirect heat. It involves not placing the food over a direct heat source and keeping the lid covered most of the time. If the food must be placed over the heat source then the temperature will have to be low for the food to cook inderectly. It\'s like roasting in an oven. Large pieces that take a while to cook like whole turkeys, leg of lamb and many roasts can be cooked in this way",
        },
        {
          name: 'Smoking',
          description: 'Smoking is one of those grilling techniques that has a more specialized approach to it. It can only be done outdoors. You can smoke while grilling with gas or while grilling with charcoal. This actual technique involves cooking food at a low temperature in a closed chamber and for a long time, hence the industry term, low and slow. You can use any of your favorite choice of hardwood smoking wood chips, chunks, pellets or even dust to flavor the food. The heat source is usually somewhere beside the food or even in a different chamber or box.The result is usually very tender, smoke-flavored food that is to die for. You know what that means! Specially designed equipment is available for the avid smoker.',
        }, {
          name: 'Rotisserie',
          description: 'Rotisserie grilling is one of those grilling methods that is quickly gaining in popularity. It is also referred to as spit roasting. In this method, food is placed in a chamber with a motorized turn spit or a rotating skewer. There are special ceramic or infrared burners that produce the indirect heat needed for cooking. A charcoal fire can also be used to produce the indirect heat. Some new grills have a built-in motor assembly to rotate the food. After-market motors are available for do-it-yourself installation if your grill does not have one. You can cook whole birds, roasts and ribs in this way.',
        },
        {
          name: 'Plank Grilling',
          description: 'Plank grilling is a very unique way of grilling. The idea is to place food on a piece of wood (plank), as heat is applied, the plank smolder-smokes and infuses the food item with its wood flavor. Planks are readily available for retail online. Most reputable specialty gourmet and grilling equipment retailers will have cedar planks and other wood-type planks in store. If you do not find your favorite flavor planks, call them out.',
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('methods_id_seq', (SELECT MAX(id) FROM methods));")
    });
};
