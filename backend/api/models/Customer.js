const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(customer) {
    // user.password = bcryptService().password(user); // eslint-disable-line no-param-reassign
  },
};

const tableName = 'customers';

const Customer = sequelize.define('Customer', {
  customerName: {
    type: Sequelize.STRING,
    unique: true,
  },
  customerAge: {
    type: Sequelize.INTEGER,
  },
  serviceOfficerName: {
    type: Sequelize.STRING,
  },
  NRIC: {
    type: Sequelize.STRING,
  },
  registrationTime: {
    type: Sequelize.STRING,
  },
  branchCode: {
    type: Sequelize.INTEGER,
  },
  productType: {
    type: Sequelize.STRING,
  },
}, { hooks, tableName });

// eslint-disable-next-line
Customer.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  //delete values.password;

  return values;
};

module.exports = Customer;
