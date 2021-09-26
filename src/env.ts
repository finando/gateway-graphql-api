import { validateEnv } from '@app/utils/common';
import { Environment } from '@app/enums';

const {
  NODE_ENV = Environment.DEVELOPMENT,
  HOST = '0.0.0.0',
  PORT = 8003,
  ACCOUNTS_GRAPHQL_API_URL = 'http://0.0.0.0:8001',
  TRANSACTIONS_GRAPHQL_API_URL = 'http://0.0.0.0:8002'
} = process.env;

export default validateEnv({
  NODE_ENV:
    NODE_ENV === Environment.DEVELOPMENT
      ? Environment.DEVELOPMENT
      : Environment.PRODUCTION,
  HOST,
  PORT: Number(PORT),
  ACCOUNTS_GRAPHQL_API_URL,
  TRANSACTIONS_GRAPHQL_API_URL
});
