const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// const message = 'I am user number 3';
// const hash = SHA256(message).toString();
//
// console.log('Message:', message);
// console.log('Hash:', hash);

// let data = {
//   id: 10,
// };
//
// const token = jwt.sign(data, '123abc');
// console.log(token);
//
// const decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// const password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

// const hashedPassword = '$2a$10$O5apuPPzVajjY2Aa5iegLOVyUL0cqhj2i3PDKgZR/1XM5fsIIMDni';
//
// bcrypt.compare(password, hashedPassword, (err, res) => {
//   console.log(res);
// });
