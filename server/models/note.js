'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Note.belongsTo(models.User);
    }
  }
  Note.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Title is required',
          },
          notNull: {
            msg: 'Title is required',
          },
        },
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Body is required',
          },
          notNull: {
            msg: 'Body is required',
          },
        },
      },
      archived: DataTypes.BOOLEAN,
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'UserId is required',
          },
          notNull: {
            msg: 'UserId is required',
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (instance) => {
          instance.archived = false;
        },
      },
      sequelize,
      modelName: 'Note',
    }
  );
  return Note;
};
