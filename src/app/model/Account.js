const { mongoose } = require("mongoose")

const Schema = mongoose.Schema;

const Account = new Schema({
  username: String,
  password: String,
  email: String,
  phone: String,
})

module.exports = mongoose.model('Account', Account);