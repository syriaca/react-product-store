import gql from "graphql-tag";
const PRODUCTS_QUERY = gql`
  query {
    product {
      id
      name
      price
      description
      createdAt
      image {
        id
        url
      }
    }
  }
`;
export default PRODUCTS_QUERY;