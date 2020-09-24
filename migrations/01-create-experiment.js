module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Experiments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      file: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      username: {
        type: Sequelize.STRING,
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Experiments')
  },
}
