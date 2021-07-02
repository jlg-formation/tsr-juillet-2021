import {interval} from 'rxjs';
import {map, startWith, take} from 'rxjs/operators';

interval(1000)
  .pipe(
    map(n => 2 * n),
    startWith('xxx'),
    take(5)
  )
  .subscribe({
    next: obj => {
      console.log('obj: ', obj);
    },
    error: err => {
      console.log('err: ', err);
    },
    complete: () => {
      console.log('completed.');
    },
  });
