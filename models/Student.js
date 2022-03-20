module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define('students', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    class_no: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    roll_no: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });
  return Student;
};
