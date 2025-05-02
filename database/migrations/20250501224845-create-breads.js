'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('breads', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      public_id: {
        type: Sequelize.UUID,
     //   defaultValue: Sequelize.literal('uuid_generate_v4()'), // if you have uuid extension
        primaryKey: true,
      },
      breads_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false,
      },
   
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('breads');
  }
};
