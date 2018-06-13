import express from 'express';
import graphqlHttp from 'express-graphql';
import schema from './schema';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/gql_db');

app.use('/graphql', graphqlHttp({
  graphiql: true,
  schema,
  context: {
    userId: 1
  }
}));

app.get('/', (req, res) => res.json({
  msg: 'hello graphql'
}));

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});