const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });

  // console.log(user);

  if (username && password) {
    // console.log(username, password);
    user
      .save()
      .then(newUser => {
        // console.log(newUser, username, password);
        res.status(201).json(newUser);
      })
      .catch(err => res.status(500).json(err));
  } else {
    res.status(422).json({ msg: 'Please enter your username and password' });
  }
};

module.exports = {
  createUser,
};
