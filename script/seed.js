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
        scoop_quantity: 100,
        tub_quantity: 100,
        pint_quantity: 100,
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
      User.Create({
        firstName:"Beatrice",
        lastName:"Jaspar",
        email:"bjaspar0@bloomberg.com",
        password:"oQxmsG9ro",
        mobile: 2692158031,
        address_line1:"87721 Prentice Point",
        city:"Kalamazoo",
        state_or_province:"Michigan",
        zip: 49006
     }),
     User.Create({
        firstName:"Reba",
        lastName:"Giraudeau",
        email:"rgiraudeau1@aboutads.info",
        password:"2Rg2XRORmwz",
        mobile: 7128555902,
        address_line1:"49 Arrowood Alley",
        city:"Sioux City",
        state_or_province:"Iowa",
        zip: 51110
     }),
     User.Create({
        firstName:"Desdemona",
        lastName:"MacRitchie",
        email:"dmacritchie2@si.edu",
        password:"hQ5Sp1yP7nA",
        mobile: 4154868113,
        address_line1:"71290 Manitowish Center",
        city:"San Francisco",
        state_or_province:"California",
        zip: 94116
     }),
     User.Create({
        firstName:"Tiertza",
        lastName:"Von Brook",
        email:"tvonbrook3@jiathis.com",
        password:"ZXXpOvm5VXXA",
        mobile: 5625104274,
        address_line1:"754 Burning Wood Drive",
        city:"Whittier",
        state_or_province:"California",
        zip: 90605
     }),
     User.Create({
        firstName:"Mathe",
        lastName:"Westhead",
        email:"mwesthead4@google.com",
        password:"l2L36qwjelmZ",
        mobile: 8596631089,
        address_line1:"70 Upham Center",
        city:"Lexington",
        state_or_province:"Kentucky",
        zip: 40505
     }),
     User.Create({
        firstName:"Terri",
        lastName:"Boutellier",
        email:"tboutellier5@google.com",
        password:"GYcZTJCyNUNe",
        mobile: 8174212987,
        address_line1:"21 Utah Drive",
        city:"Fort Worth",
        state_or_province:"Texas",
        zip: 76121
     }),
     User.Create({
        firstName:"Wanda",
        lastName:"Strafen",
        email:"wstrafen6@abc.net.au",
        password:"DeDhscLURxqJ",
        mobile: 2036847380,
        address_line1:"638 Londonderry Court",
        city:"New Haven",
        state_or_province:"Connecticut",
        zip: 06520
     }),
     User.Create({
        firstName:"Zolly",
        lastName:"Kubalek",
        email:"zkubalek7@t-online.de",
        password:"0kOhDAigRP",
        mobile: 7202109636,
        address_line1:"8369 Maryland Court",
        city:"Denver",
        state_or_province:"Colorado",
        zip: 80249
     }),
     User.Create({
        firstName:"Catharine",
        lastName:"Faichnie",
        email:"cfaichnie8@w3.org",
        password:"rI7qmv",
        mobile: 4057642511,
        address_line1:"079 Buell Crossing",
        city:"Edmond",
        state_or_province:"Oklahoma",
        zip: 73034
     }),
     User.Create({
        firstName:"Devlen",
        lastName:"Fidgett",
        email:"dfidgett9@biblegateway.com",
        password:"eA6NN1plz",
        mobile: 5165399424,
        address_line1:"6 Delladonna Circle",
        city:"Port Washington",
        state_or_province:"New York",
        zip: 11054
     }),
     User.Create({
        firstName:"Rutter",
        lastName:"Martignon",
        email:"rmartignona@ask.com",
        password:"9GGdP2",
        mobile: 2608139623,
        address_line1:"9797 Holmberg Road",
        city:"Fort Wayne",
        state_or_province:"Indiana",
        zip: 46805
     }),
     User.Create({
        firstName:"Godart",
        lastName:"Geibel",
        email:"ggeibelb@e-recht24.de",
        password:"S2PnAf9SF3S",
        mobile: 4801017720,
        address_line1:"9 Warner Hill",
        city:"Phoenix",
        state_or_province:"Arizona",
        zip: 85040
     }),
     User.Create({
        firstName:"Rocky",
        lastName:"Stockman",
        email:"rstockmanc@sogou.com",
        password:"oqh4lB",
        mobile: 7869758329,
        address_line1:"48 Orin Way",
        city:"Miami",
        state_or_province:"Florida",
        zip: 33134
     }),
     User.Create({
        firstName:"Truman",
        lastName:"Boys",
        email:"tboysd@mtv.com",
        password:"yKz5JD",
        mobile: 3107707331,
        address_line1:"96 Melody Alley",
        city:"Inglewood",
        state_or_province:"California",
        zip: 90398
     }),
     User.Create({
        firstName:"Thedrick",
        lastName:"O'Hederscoll",
        email:"tohederscolle@abc.net.au",
        password:"mwwUwMZFxM",
        mobile: 6192150413,
        address_line1:"998 Darwin Circle",
        city:"San Diego",
        state_or_province:"California",
        zip: 92191
     }),
     User.Create({
        firstName:"Dionne",
        lastName:"Langston",
        email:"dlangstonf@hc360.com",
        password:"px8WvYnjm6Qo",
        mobile: 2096736156,
        address_line1:"34 Canary Circle",
        city:"Fresno",
        state_or_province:"California",
        zip: 93726
     }),
     User.Create({
        firstName:"Millie",
        lastName:"Winear",
        email:"mwinearg@creativecommons.org",
        password:"S6czmcrLLzL",
        mobile: 8164706576,
        address_line1:"416 Shopko Point",
        city:"Kansas City",
        state_or_province:"Missouri",
        zip: 64130
     }),
     User.Create({
        firstName:"Othilia",
        lastName:"Rosbrough",
        email:"orosbroughh@imageshack.us",
        password:"g9PIw0JJYHW",
        mobile: 9044171710,
        address_line1:"42 Holmberg Road",
        city:"Jacksonville",
        state_or_province:"Florida",
        zip: 32209
     }),
     User.Create({
        firstName:"Tildie",
        lastName:"Irnis",
        email:"tirnisi@earthlink.net",
        password:"Cje4vCEvk",
        mobile: 9169722085,
        address_line1:"0 Village Green Center",
        city:"Sacramento",
        state_or_province:"California",
        zip: 94273
     }),
     User.Create({
        firstName:"Arturo",
        lastName:"Gidney",
        email:"agidneyj@spotify.com",
        password:"EkPoz8qBMP",
        mobile: 5043153201,
        address_line1:"92 Forest Pass",
        city:"Metairie",
        state_or_province:"Louisiana",
        zip: 70033
     })
      
    ]);

    const orders = await Promise.all([
      Order.create({
        total_price: 0,
        is_fulfilled: false,
        userId: 3,
      }),
      Order.create({
        total_price: 72.14,
        is_fulfilled: false,
        userId: 4,
      }),
      Order.create({
        total_price: 130.55,
        is_fulfilled: false,
        userId: 7,
      }),
      Order.create({
        total_price: 65.0,
        is_fulfilled: false,
        userId: 1,
      }),
      Order.create({
        total_price: 214.22,
        is_fulfilled: true,
        userId: 3,
      }),
      Order.create({
        total_price: 81.14,
        is_fulfilled: false,
        userId: 9,
      }),
      Order.create({
        total_price: 108.72,
        is_fulfilled: false,
        userId: 5,
      }),
      Order.create({
        total_price: 43.19,
        is_fulfilled: false,
        userId: 1,
      }),
      Order.create({
        total_price: 37.86,
        is_fulfilled: false,
        userId: 6,
      }),
      Order.create({
        total_price: 22.26,
        is_fulfilled: false,
        userId: 10,
      }),
      Order.create({
        total_price: 137.04,
        is_fulfilled: false,
        userId: 5,
      }),
    ]);

    const order_items = await Promise.all([
      Order_Items.create({
        quantity: 4,
        selected_size: 'pint',
        historical_price: 2.99,
        productId: 1,
        orderId: 1,
      }),
      Order_Items.create({
        quantity: 2,
        selected_size: 'scoop',
        historical_price: 2.99,
        productId: 2,
        orderId: 4,
      }),
      Order_Items.create({
        quantity: 7,
        selected_size: 'tub',
        historical_price: 2.99,
        productId: 3,
        orderId: 7,
      }),
      Order_Items.create({
        quantity: 11,
        selected_size: 'tub',
        historical_price: 2.99,
        productId: 4,
        orderId: 2,
      }),
      Order_Items.create({
        quantity: 8,
        selected_size: 'scoop',
        historical_price: 2.99,
        productId: 5,
        orderId: 3,
      }),
      Order_Items.create({
        quantity: 10,
        selected_size: 'pint',
        historical_price: 2.99,
        productId: 6,
        orderId: 4,
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
