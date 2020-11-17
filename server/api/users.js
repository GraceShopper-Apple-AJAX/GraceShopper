const router = require('express').Router();
const {User} = require('../db/models');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const app = require('../../server/index')

router.post('/', async (req, res, next) => {
  try {
    console.log('server received post signup request');
    const user = await User.create(req.body);
    req.login(user, (err) => (err ? next(err) : res.json(user)));
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-wdkq7sro.us.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'https://ice-cream-shoppe',
  issuer: `https://dev-wdkq7sro.us.auth0.com/`,
  algorithms: ['RS256']
});

// app.use(checkJwt);

router.get('/', async (req, res, next) => {
  try {
    if (!req.user.isAdmin()) {
      res.status(401);
      return;
    }
    const users = await User.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email', 'role'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    if (!req.user.isAdmin()) {
      res.status(401);
      return;
    }
    const user = await User.findByPk(req.params.userId, {
      attributes: [
        'firstName',
        'lastName',
        'email',
        'role',
        'address_line1',
        'address_line2',
        'city',
        'state_or_province',
        'zip',
      ],
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
