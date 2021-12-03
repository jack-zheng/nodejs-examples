var mongoose = require('mongoose')
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:3000/test');

const userSchema = new Schema({
  username: {
      type: String,
      required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
});

// 将文档结构发部为模型
// 第一个参数，首字母大写的单数名字，mongoose 会将它转位 小写复数 的表
const User = mongoose.model('User', userSchema);

// 操作模型
// add
// var admin = new User({username: 'zs', password: '123', email: 'sdf@sap.com'})
// admin.save().then(() => {console.log('create admin...'); console.log(admin);});

// query
// User.find({username: 'zs'},(err, users) => {
//     console.log(users);
//   });

// User.findOne((err, users) => {
//     console.log(users);
//   });

// delete
// User.remove({
//     username: 'zs'
// }, (err, ret) => {
//     console.log(ret);
// });

// update
User.findByIdAndUpdate('61aa076bf7f7dd4bf6ed737b', {
    password: '233'
}, (err, ret) => console.log(ret));