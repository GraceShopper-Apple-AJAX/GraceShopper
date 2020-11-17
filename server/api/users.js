const router = require('express').Router();
const {User} = require('../db/models');

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

router.put('/:userId', async (req,res,next)=>{
  try{
    const user = await User.findByPk(req.params.userId);
    await User.update(req.body);
    res.json(user)
  } catch (err){
    next(err)
  }
})

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


module.exports = router;
