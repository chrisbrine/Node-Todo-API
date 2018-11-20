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

  // deleteMany

  // db.collection('Todos').deleteMany({ text: 'Eat lunch' })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // deleteOne

  // db.collection('Todos').deleteOne({ text: 'Eat lunch' })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // findOneAndDelete

  // db.collection('Todos').findOneAndDelete({ completed: false })
  //   .then((result) => {
  //     console.log(result);
  //   });

  client.close();
})
.catch((err) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
});
