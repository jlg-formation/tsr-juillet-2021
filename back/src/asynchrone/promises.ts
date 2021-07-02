import fs from 'fs';
import path from 'path';

function readdir(path: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const readFile = (path: string, options: any): Promise<string | Buffer> =>
  new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, result) =>
      err ? reject(err) : resolve(result)
    );
  });

readdir('.')
  .then(list => {
    console.log('list: ', list);
    const file = path.resolve('.', list[0]);
    console.log('file: ', file);
    return readFile(file, {encoding: 'utf-8'});
  })
  .then(content => {
    console.log('content: ', content);
  })
  .catch(err => {
    console.log('err: ', err);
  });
