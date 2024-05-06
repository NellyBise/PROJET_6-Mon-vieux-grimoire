const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: 'e-mail non valide',
    },
  },
  password: {
    type: String,
    required: true,
    validate: [
      {
        validator: function (value) {
          return value && value.length >= 6;
        },
        message: 'Le mot de passe doit contenir au moins 6 caractères',
      },
      {
        validator: function (value) {
          return /^[^<>@=]*$/.test(value);
        },
        message:
          'Le mot de passe ne peut pas contenir les caractères < > @ et =',
      },
    ],
  },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
