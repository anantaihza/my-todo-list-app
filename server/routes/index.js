const UserController = require('../controllers/userController');
const errorHandler = require('../middlewares/errorHandler');

const router = require('express').Router();
const noteRouter = require('./notes');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.use('/notes', noteRouter);

router.use(errorHandler);

module.exports = router;
