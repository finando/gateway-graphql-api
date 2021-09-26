import { ServiceEndpointDefinition } from '@apollo/gateway';

import env from '@app/env';

const { ACCOUNTS_GRAPHQL_API_URL, TRANSACTIONS_GRAPHQL_API_URL } = env;

const services: ServiceEndpointDefinition[] = [
  {
    name: 'accounts',
    url: ACCOUNTS_GRAPHQL_API_URL
  },
  {
    name: 'transactions',
    url: TRANSACTIONS_GRAPHQL_API_URL
  }
];

export default services;
