// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp';

MongoClient.connect(url, { useNewUrlParser: true })
.then((client) => {
  const db = client.db(dbName);

  console.log('Connected to MongoDB server');

  db.collection('Todos').find({ completed: false }).toArray()
    .then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });

  // client.close();
})
.catch((err) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
});
