import {promises} from 'fs';
import path from 'path';

(async () => {
  try {
    const list = await promises.readdir('.');
    console.log('list: ', list);
    const file = path.resolve('.', list[0]);
    console.log('file: ', file);
    const content = await promises.readFile(file, {encoding: 'utf-8'});
    console.log('content: ', content);
  } catch (err) {
    console.log('err: ', err);
  }
})();
