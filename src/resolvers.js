const products = [{
  _id: '12',
  name: 'GraphQL Course',
  quantity: 1
}, {
  _id: '13',
  name: 'NodeJS Course',
  quantity: 1
}];

import Product from './models/product';

export const resolvers = {
  Query: {
    async allProduct(root, args, context, info) {
      return await Product.find();
    },
    async getProduct(root, args) {
      const {_id} = args;
      return await Product.findById(_id);
    }
  },
  Mutation: {
    async createProduct(_, args, context, info) {
      const {input} = args;
      return await Product.create(input);
    },
    async updateProduct(_, args) {
      const {input, _id} = args;
      return await Product.findOneAndUpdate({
        _id
      }, input, {new: true});
    },
    async deleteProduct(_, args) {
      const {_id} = args;
      return await Product.findByIdAndRemove({
        _id
      });
    }
  }
};