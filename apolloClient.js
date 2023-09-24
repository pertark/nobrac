import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/id/QmYRqkqsHhM4LWvjP9X9psZGnbnaMH2n8io3Mh697fNZSG',
  cache: new InMemoryCache(),
});

export default client;
