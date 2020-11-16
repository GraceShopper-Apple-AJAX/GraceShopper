const {green, red} = require('chalk');
const {db, Product, User, Order, Order_Items} = require('../server/db/models');

const seed = async () => {
  try {
    await db.sync({force: true});
    const products = await Promise.all([
      Product.create({
        name: "Burnt Marshmallow S'more",
        description:
          'Slightly burnt but not bitter marshmallows infused with our premium vanilla',
        scoop_price: 3.99,
        pint_price: 6.99,
        tub_price: 9.99,
        discount_percentage: 0.25,
        status: 'in_stock',
        scoop_quantity: 100,
        tub_quantity: 100,
        pint_quantity: 100,
        imageUrl: 'https://bit.ly/3pyzdvQ',
      }),

      Product.create({
        name: 'Burnt Sage',
        description:
          'This ice cream will get rid of all the negative energy in your life!',
        scoop_price: 3.99,
        pint_price: 6.99,
        tub_price: 9.99,
        discount_percentage: 0.25,
        status: 'in_stock',
        scoop_quantity: 100,
        tub_quantity: 100,
        pint_quantity: 100,
        imageUrl: 'https://bit.ly/3pyzdvQ',
      }),

      Product.create({
        name: 'Buttered Almond',
        description: "Utterly butterly and delicious; you'll go nuts for this!",
        scoop_price: 3.99,
        pint_price: 6.99,
        tub_price: 9.99,
        discount_percentage: 0.25,
        status: 'in_stock',
        scoop_quantity: 100,
        tub_quantity: 100,
        pint_quantity: 100,
        imageUrl: 'https://bit.ly/3pyzdvQ',
      }),

      Product.create({
        name: 'Dark Chocolate Fantasy',
        description:
          'Made from organic, fair-trade cocoa beans that will make your wildest dreams come true!',
        scoop_price: 3.99,
        pint_price: 6.99,
        tub_price: 9.99,
        discount_percentage: 0.25,
        status: 'in_stock',
        scoop_quantity: 100,
        tub_quantity: 100,
        pint_quantity: 100,
        imageUrl: 'https://bit.ly/3pyzdvQ',
      }),

      Product.create({
        name: 'Coconut Macaroon Swirl',
        description:
          'Freshly-baked macaroons swirled with our luscious coconut ice-cream that will leave you wishing you were on a tropical island.',
        scoop_price: 3.99,
        pint_price: 6.99,
        tub_price: 9.99,
        discount_percentage: 0.25,
        status: 'in_stock',
        quantity: 100,
        imageUrl: 'https://bit.ly/3pyzdvQ',
      }),

      Product.create({
        name: 'Ghost Pepper',
        description:
          "We promise you'll see some stars; only for the brave of heart! If you eat an entire scoop in front of us, you will be awarded a sticker for your valourous act.",
        scoop_price: 6.99,
        pint_price: 9.99,
        tub_price: 12.99,
        discount_percentage: 0.25,
        status: 'in_stock',
        scoop_quantity: 100,
        tub_quantity: 100,
        pint_quantity: 100,
        imageUrl: 'https://bit.ly/3pyzdvQ',
      }),

      Product.create({
        name: 'Berry Lasagna',
        description:
          "Garfield's favourite, but this one has no meat or tomatoes - only berries and ricotta!",
        scoop_price: 3.99,
        pint_price: 6.99,
        tub_price: 9.99,
        discount_percentage: 0.25,
        status: 'in_stock',
        scoop_quantity: 100,
        tub_quantity: 100,
        pint_quantity: 100,
        imageUrl: 'https://bit.ly/3pyzdvQ',
      }),

      Product.create({
        name: 'Mango Pineapple Freeze',
        description:
          'If you like Pina Coladas, and getting caught in the rain, you should try this!',
        scoop_price: 3.99,
        pint_price: 6.99,
        tub_price: 9.99,
        discount_percentage: 0.25,
        status: 'in_stock',
        scoop_quantity: 100,
        tub_quantity: 100,
        pint_quantity: 100,
        imageUrl: 'https://bit.ly/3pyzdvQ',
      }),

      Product.create({
        name: 'Pickle Rick',
        description: "Morty, this one's for you!",
        scoop_price: 3.99,
        pint_price: 6.99,
        tub_price: 9.99,
        discount_percentage: 0.25,
        status: 'in_stock',
        scoop_quantity: 100,
        tub_quantity: 100,
        pint_quantity: 100,
        imageUrl: 'https://bit.ly/3pyzdvQ',
      }),

      Product.create({
        name: 'Raisin Bran Crunch',
        description: 'High in fibre - low in sugar! Extra crunch, extra poop!',
        scoop_price: 3.99,
        pint_price: 6.99,
        tub_price: 9.99,
        discount_percentage: 0.25,
        status: 'in_stock',
        scoop_quantity: 100,
        tub_quantity: 100,
        pint_quantity: 100,
        imageUrl: 'https://bit.ly/3pyzdvQ',
      }),
    ]);
    const users = await Promise.all([
      User.create({
        firstName: 'Doreen',
        lastName: 'Casey',
        email: 'doreencasey@kyaguru.com',
        password: 'Stockdale',
        mobile: '9854342913',
        address_line1: '252 Dumont Avenue',
        city: 'Mappsville',
        state_or_province: 'Illinois',
        zip: 3023,
      }),
      User.create({
        firstName: 'Hillary',
        lastName: 'Guzman',
        email: 'hillaryguzman@kyaguru.com',
        password: 'Chamberino',
        mobile: '8634412365',
        address_line1: '137 Eckford Street',
        city: 'Barclay',
        state_or_province: 'Maine',
        zip: 5898,
      }),
      User.create({
        firstName: 'Rosa',
        lastName: 'Mcbride',
        email: 'rosamcbride@kyaguru.com',
        password: 'Clayville',
        mobile: '8164103438',
        address_line1: '403 Baycliff Terrace',
        city: 'Cataract',
        state_or_province: 'California',
        zip: 179,
      }),
      User.create({
        firstName: 'Sampson',
        lastName: 'Maddox',
        email: 'sampsonmaddox@kyaguru.com',
        password: 'Crayne',
        mobile: '8424473690',
        address_line1: '618 Rapelye Street',
        city: 'Hessville',
        state_or_province: 'New Jersey',
        zip: 7587,
      }),
      User.create({
        firstName: 'Carey',
        lastName: 'Mcdonald',
        email: 'careymcdonald@kyaguru.com',
        password: 'Garfield',
        mobile: '8525542904',
        address_line1: '433 Coleridge Street',
        city: 'Topanga',
        state_or_province: 'Montana',
        zip: 2452,
      }),
      User.create({
        firstName: 'Lucinda',
        lastName: 'Fields',
        email: 'lucindafields@kyaguru.com',
        password: 'Lupton',
        mobile: '8985052952',
        address_line1: '681 Taylor Street',
        city: 'Calverton',
        state_or_province: 'Nevada',
        zip: 4357,
      }),
      User.create({
        firstName: 'Nadine',
        lastName: 'Serrano',
        email: 'nadineserrano@kyaguru.com',
        password: 'Grill',
        mobile: '9314913415',
        address_line1: '729 Hinsdale Street',
        city: 'Bancroft',
        state_or_province: 'Arizona',
        zip: 3773,
      }),
      User.create({
        firstName: 'Muriel',
        lastName: 'Levine',
        email: 'muriellevine@kyaguru.com',
        password: 'Hickory',
        mobile: '9045773867',
        address_line1: '679 Hull Street',
        city: 'Tooleville',
        state_or_province: 'Illinois',
        zip: 1923,
      }),
      User.create({
        firstName: 'Camille',
        lastName: 'Bailey',
        email: 'camillebailey@kyaguru.com',
        password: 'Rockingham',
        mobile: '8754492767',
        address_line1: '183 Logan Street',
        city: 'Driftwood',
        state_or_province: 'New Jersey',
        zip: 6450,
      }),
      User.create({
        firstName: 'Elvira',
        lastName: 'Rivera',
        email: 'elvirarivera@kyaguru.com',
        password: 'Winchester',
        mobile: '8475093921',
        address_line1: '990 Grove Place',
        city: 'Henrietta',
        state_or_province: 'Tennessee',
        zip: 2526,
      }),
    ]);

    const orders = await Promise.all([
      Order.create({
        is_fulfilled: false,
        userId: 1
      }),
      Order.create({
        is_fulfilled: false,
        userId: 2
      }),
      Order.create({
        is_fulfilled: false,
        userId: 3
      })

    ]);

    const order_items = await Promise.all([
      Order_Items.create({
        quantity: 4,
        selected_size: 'pint',
        historical_price: 2.99,
        productId: 1,
        orderId: 1
      }),
      Order_Items.create({
        quantity: 2,
        selected_size: 'scoop',
        historical_price: 2.99,
        productId: 2,
        orderId: 1
      }),
      Order_Items.create({
        quantity: 7,
        selected_size: 'tub',
        historical_price: 2.99,
        productId: 3,
        orderId: 2
      }),
      Order_Items.create({
        quantity: 11,
        selected_size: 'tub',
        historical_price: 2.99,
        productId: 4,
        orderId: 2
      }),
      Order_Items.create({
        quantity: 8,
        selected_size: 'scoop',
        historical_price: 2.99,
        productId: 5,
        orderId: 3
      }),
      Order_Items.create({
        quantity: 10,
        selected_size: 'pint',
        historical_price: 2.99,
        productId: 6,
        orderId: 3
      }),
    ]);

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
