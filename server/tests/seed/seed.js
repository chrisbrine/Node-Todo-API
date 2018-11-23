const { ObjectID }  = require('mongodb');
const jwt           = require('jsonwebtoken');

const { Todo }      = require('../../models/todo');
const { User }      = require('../../models/user');

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  completed: false,
},{
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: new Date().getTime(),
}];

const populateTodos = (done) => {
  Todo.deleteMany({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'chris1@email.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({ _id: userOneId, access: 'auth' }, 'abc123').toString(),
  }],
},{
  _id: userTwoId,
  email: 'chris2@email.com',
  password: 'userTwoPass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({ _id: userTwoId, access: 'auth' }, 'abc123').toString(),
  }],
}];

const populateUsers = (done) => {
  User.deleteMany({}).then(() => {
    const userOne = new User(users[0]).save();
    const userTwo = new User(users[1]).save();

    return Promise.all([ userOne, userTwo ]);
  }).then(() => done());
};

module.exports = { todos, populateTodos, users, populateUsers };
