import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
  type Product {
    _id: ID
    name: String!
    quantity: Int
  }
  type Query {
    getProduct(_id: ID): Product
    allProduct: [Product]
  }
  input ProductInput {
    name: String!
    quantity: Int
  }
  type Mutation {
    createProduct(input: ProductInput) : Product
    updateProduct(_id: ID!, input: ProductInput) : Product
    deleteProduct(_id: ID!) : Product
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});