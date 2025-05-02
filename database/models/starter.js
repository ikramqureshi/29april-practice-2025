// database/models/starter.js

const { UUIDV4 } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Starter = sequelize.define('starters', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    public_id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    starter_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'starters',
    freezeTableName: true,       // prevents pluralizing to 'Starters'
 //   timestamps: true,
  });

  return Starter;
};
