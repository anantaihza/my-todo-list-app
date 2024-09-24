const { Op } = require('sequelize');
const { User } = require('../models/index');
const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');

class UserController {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;

      const user = await User.create({
        name,
        email,
        password,
      });

      res.status(201).json({
        status: 'Success',
        message: 'User created',
        data: {
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) throw { name: 'CredentialsRequired' };

      const findUser = await User.findOne({
        where: {
          email: {
            [Op.eq]: email,
          },
        },
      });

      if (!findUser) throw { name: 'Unauthorized' };

      const comparePass = comparePassword(password, findUser.password);

      if (!comparePass) throw { name: 'Unauthorized' };

      const access_token = signToken({ id: findUser.id });

      res.status(200).json({
        status: 'Success',
        message: 'User logged successfully',
        data: {
          access_token,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async getUserLogged(req, res, next) {
    try {
      const { id } = req.user;
      const user = await User.findByPk(id, {
        attributes: ['id', 'name', 'email'],
      });

      res.status(200).json({
        status: 'Success',
        message: 'User retrieved',
        data: {
          id: user.id,
          name: user.name,
          email: user.email
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
