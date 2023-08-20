export const JWT_AUTH = {
  secret: process.env.JWT_SECRET || 'MySecretSeedHere',
  expireIn: process.env.JWT_EXPIRES_IN || '12h',
};

/**
 *
 */
export const VALIDATION_PIPE = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transform: true,
};

export const FORMATTED_ERROR =
  "Your query doesn't match the schema. Try double-checking it!";
