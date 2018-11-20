// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp';

const obj = new ObjectID();
console.log(obj);

MongoClient.connect(url, { useNewUrlParser: true })
.then((client) => {
  const db = client.db(dbName);

  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Chris Brine',
  //   age: 38,
  //   location: 'Kelowna',
  // }, (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert todo', err);
  //     }
  //
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.close();
})
.catch((err) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
});
