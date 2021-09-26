import { ApolloServer } from 'apollo-server';

import logger from '@app/utils/logging';

import context from './graphql/context';
import plugins from './graphql/plugins';
import gateway from './graphql/gateway';
import onHealthCheck from './graphql/health-check';

export default new ApolloServer({
  context,
  plugins,
  gateway,
  onHealthCheck,
  logger
});
