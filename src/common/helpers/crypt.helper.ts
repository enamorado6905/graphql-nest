import { compare, hash } from 'bcrypt';

export const CRYPT_SALT = 10;

export async function hashString(fieldToHash: string) {
  return await hash(fieldToHash, CRYPT_SALT);
}

export async function compareString(
  plainString: string,
  encryptedString: string,
) {
  return await compare(plainString, encryptedString);
}
