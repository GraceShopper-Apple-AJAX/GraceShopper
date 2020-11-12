const {green, red} = require('chalk')
const {db, Product} = require('../server/db/models')

const seed = async () => {
  try {
    await db.sync({force: true})
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
        quantity: 100,
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
        quantity: 100,
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
        quantity: 100,
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
        quantity: 100,
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
        quantity: 100,
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
        quantity: 100,
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
        quantity: 100,
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
        quantity: 100,
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
        quantity: 100,
        imageUrl: 'https://bit.ly/3pyzdvQ',
      }),
    ])
  } catch (err) {
    console.log(red(err))
  }
}

module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'))
      db.close()
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
}
