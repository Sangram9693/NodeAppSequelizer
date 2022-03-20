module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 'root',
  DATABASE: 'node_project',
  DIALECT: 'postgres',
  POOL: {
    max: 10,
    min: 0,
    acquire: 50000,
    idle: 10000,
  },
};
