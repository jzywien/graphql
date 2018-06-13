import express from 'express';
import graphqlHttp from 'express-graphql';

const app = express();
const PORT = 3000;

const schema = {};
app.use('/graphql', graphqlHttp({
  graphiql: true,
  schema
}));

app.get('/', (req, res) => res.json({
  msg: 'hello graphql'
}));

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});