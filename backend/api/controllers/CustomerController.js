const Customer = require('../models/Customer');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

const CustomerController = () => {
  const register = async (req, res) => {
    const { body } = req;

    if(body.customerName == null 
      || body.customerAge == null
      || body.serviceOfficerName == null
      || body.NRIC == null
      || body.registrationTime == null
      || body.branchCode == null
      || body.productType == null){
      return res.status(400).json({ msg: 'Bad Request: There are some empty Parameters' });
    } 

    if(body.customerName.length > 64 
      || body.customerAge < 18
      || body.serviceOfficerName.length > 64 
      || body.NRIC.length != 9){
      return res.status(400).json({ msg: 'Bad Request: There are bad Parameters' });
    } 

    try {
      const customer = await Customer.create({
        customerName: body.customerName,
        customerAge: body.customerAge,
        serviceOfficerName: body.serviceOfficerName,
        NRIC: body.NRIC,
        registrationTime: body.registrationTime,
        branchCode: body.branchCode,
        productType: body.productType,
      });
      
      if(customer)

      return res.status(200).json({ id: customer.id });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const getAll = async (req, res) => {
    try {
      const customers = await Customer.findAll();

      return res.status(200).json({ customers });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };


  return {
    register,
    getAll,
  };
};

module.exports = CustomerController;
