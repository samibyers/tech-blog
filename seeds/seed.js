const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'MickyMouse',
    password: 'password'
  },
  {
    username: 'CodeWizard',
    password: 'password'
  },
  {
    username: 'TooTired',
    password: 'password'
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
