const { ObjectID }  = require('mongodb');

const { mongoose }  = require('../server/db/mongoose');
const { Todo }      = require('../server/models/todo');
const { User }      = require('../server/models/user');

// const id = '5bf499eda78af72c845fcf88';
//
// if (!ObjectID.isValid(id)) {
//   return console.log('ID not valid');
// }
//
//
// Todo.find({
//   _id: id,
// }).then((todos) => {
//   if (todos.length < 1) {
//     return console.log('ID not found');
//   }
//   console.log('Todos', todos);
// }).catch((e) => console.log(e));
//
// Todo.findOne({
//   _id: id,
// }).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));
//
// Todo.findByID(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
// 
// User.findById('5bf4a2ce48d1559bf942af0d').then((user) => {
//   if (!user) {
//     return console.log('Unable to find user');
//   }
//
//   console.log(JSON.stringify(user, undefined, 2));
// }, (e) => {
//   console.log(e)
// });
