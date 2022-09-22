import fetch from 'isomorphic-fetch';
import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api.apito.io/secured/graphql',
  fetch,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer 1t1vnGcYNCZ5e81r9Tfq8OOZswopkVSu1XJx25ziqhS5TWndu3GOVfUfY9rqYPDn7uIfecFXSGEDgiP89yppIZTICuy2yE4tufzEJMGRVKp7kbx4zJbQbnh9Gm5FLew1ISn4LEtGkZyBNZJtaO98eCf7sLMxwJk8EL`,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;
