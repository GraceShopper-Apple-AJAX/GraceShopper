const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  // token: {
  //     type: Sequelize.TEXT
  // },
  status: {
    type: Sequelize.ENUM('new', 'in progress', 'complete', 'abandoned')
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isNumeric: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  street_line1: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  street_line2: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  state_or_province: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  content: {
    type: Sequelize.TEXT
  }
})

const Cart_Item = db.define('cart_item', {
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },

  // The flag to identify whether the product is active on the cart.
  // It can be used to avoid the same product being added to the same
  // cart multiple times.
  active: {
    type: Sequelize.BOOLEAN
  },
  content: {
    type: Sequelize.TEXT
  }
})

const CC_Transaction = db.define('cc_transaction', {
  cc_num: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isCreditCard: true
    }
  },
  cc_type: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  response: {
    type: Sequelize.TEXT
  },
  shippingFree: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = {
  Cart,
  Cart_Item,
  CC_Transaction
}
