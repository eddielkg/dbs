// const User = require('../models/User');
// const authService = require('../services/auth.service');
// const bcryptService = require('../services/bcrypt.service');

const HelloController = () => {
  
  const sayHello = async (req, res) => {
    try {
      const msg = {hello:"this is test message"};

      return res.status(200).json({ msg });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    sayHello
  };
};

module.exports = HelloController;
