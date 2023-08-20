import { writeFile } from 'fs/promises';
import { join } from 'path';
import { PaginateInterface } from '../../interfaces/paginated.interface';
import * as bcrypt from 'bcrypt';

/**
 * This function created json errors  router./dist/exceptions
 * @param data
 * @returns
 */
export async function writeHttpLog(data: Record<string, any>) {
  try {
    const LOGS_DIR = join(__dirname, `${Date.now()}-log.json`);
    await writeFile(LOGS_DIR, JSON.stringify(data));
  } catch (err) {
    return;
  }
}

/**
 * This function check if there are element
 * @param element
 * @param array
 * @returns
 */
export function arrayCheckElement(element: any, array: Array<any>): boolean {
  return array.includes(element);
}

/**
 * Return paginated
 *
 */
export async function paginated(
  total: number,
  perPage: number,
  page: number,
): Promise<PaginateInterface<any>> {
  const [_total, _perPage, _page] = await Promise.all([
    total ? total : 0,
    perPage ? perPage : 10,
    page <= 0 ? 0 : page,
  ]);
  return { total: _total, per_page: _perPage, page: _page, nodes: [] };
}

export async function bcryptCheckPassword(
  password: string,
  passwordDB: string,
): Promise<boolean> {
  return bcrypt.compare(password, passwordDB);
}

/**
 * Return hash password
 *
 */
export async function bcryptEncryptPassword(
  password: string,
  salt: number,
): Promise<string> {
  const genSalt = await bcrypt.genSalt(salt);
  return bcrypt.hash(password, genSalt);
}

/**
 * Return text random
 *
 */
export function textRandom(id: string, long: number): string {
  let text = '';
  for (let i = 0; i < long; i++) {
    text += id.charAt(Math.floor(Math.random() * id.length));
  }
  return text;
}

/**
 * Return text random
 *
 */
export function textClear(text: string): string {
  return text.replace(/\s+/g, '');
}
