import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT, // WordPress GraphQL URL
  cache: new InMemoryCache(),
});

export default client;
