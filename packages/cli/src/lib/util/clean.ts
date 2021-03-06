import { logger, } from '../cli-shared-utils/lib/logger';
import rimraf from 'rimraf';

export default async (path: string) => {
  try {
    await new Promise((res, rej) => {
      rimraf(path, (err) => {
        if (err) {
          rej(err);
        } else {
          res(null);
        }
      });
    });
    logger.debug(`${path} cleaned.`);
  } catch(e) {
    logger.debug(`${path} clean fail`, e);
  }
};