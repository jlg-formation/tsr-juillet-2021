import fs from 'fs';
import path from 'path';

try {
  const list = fs.readdirSync('.');
  console.log('list: ', list);
  const file = path.resolve('.', list[0]);
  console.log('file: ', file);
  const content = fs.readFileSync(file, {encoding: 'utf-8'});
  console.log('content: ', content);
} catch (err) {
  console.log('err: ', err);
}
