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

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5bdb8b72e7c3943074b2c75e'),
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false,
  }).then((result) => {
    console.log(result);
  });

  // client.close();
})
.catch((err) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
});
