import { ApolloGateway, RemoteGraphQLDataSource } from '@apollo/gateway';

import logger from '@app/utils/logging';
import type { Context } from '@app/types';

import serviceList from './services';

export default new ApolloGateway({
  logger,
  serviceList,
  serviceHealthCheck: false,
  buildService: ({ url }) =>
    new RemoteGraphQLDataSource<Context>({
      url,
      apq: true,
      willSendRequest: async ({ request: { http }, context }) => {
        http?.headers.set('request-id', (context as Context).requestId);
        http?.headers.set('authorization', (context as Context).authorization);
      }
    })
});
