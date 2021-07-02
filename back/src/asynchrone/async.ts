import fs from 'fs';
import path from 'path';

fs.readdir('.', (err, list) => {
  if (err) {
    console.log('err: ', err);
    return;
  }
  console.log('list: ', list);
  const file = path.resolve('.', list[0]);
  console.log('file: ', file);
  fs.readFile(file, {encoding: 'utf-8'}, (err, content) => {
    if (err) {
      console.log('err: ', err);
      return;
    }
    console.log('content: ', content);
  });
});
