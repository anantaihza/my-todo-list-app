const UserController = require('../controllers/userController');
const errorHandler = require('../middlewares/errorHandler');

const router = require('express').Router();
const usersRouter = require('./users');
const noteRouter = require('./notes');
const authentication = require('../middlewares/authentication');

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Todo list app"
  })
})
router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.use(authentication);

router.use('/users', usersRouter);
router.use('/notes', noteRouter);

router.use(errorHandler);

module.exports = router;
