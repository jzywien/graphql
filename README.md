# graphql

## Sample Queries
Run server with `npm start`

Navigate to http://localhost:3000/graphql
```
query{
  allProduct{
    _id
    name
    quantity
  }
}

query{
  getProduct(_id:"5b216523212e3b36e21f8663") {
    _id
    name
    quantity
  }
}

mutation{
  createProduct(input: {
    name:"React Course"
    quantity:2
  })
  {
    _id
    name
    quantity
  }
}

mutation{
  updateProduct(_id:"5b216523212e3b36e21f8663", input:{
    name:"Updated Product"
  })
  {
    _id
    name
    quantity
  }
}

mutation{
  deleteProduct(_id:"5b216523212e3b36e21f8663")
  {
    _id
    name
    quantity
  }
}
```