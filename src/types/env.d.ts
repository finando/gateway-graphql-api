import type { Environment } from '@app/enums';

export interface EnvironmentVariables {
  NODE_ENV: Environment;
  HOST: string;
  PORT: number;
  ACCOUNTS_GRAPHQL_API_URL: string;
  TRANSACTIONS_GRAPHQL_API_URL: string;
}
