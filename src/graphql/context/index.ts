import { v4 as uuid } from 'uuid';

import { Context } from '@app/types';

export default async ({ req }): Promise<Context> => {
  const requestId = req.headers['request-id'] || uuid();
  const authorization = req.headers.authorization;

  return {
    requestId,
    authorization
  };
};
