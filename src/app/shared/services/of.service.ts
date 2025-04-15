import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfService {
  of$: Observable<number> = of(10, 21, 30, 41, 50, 61);

  of1$: Observable<number> = this.of$.pipe(
    filter((num) => {
      return num % 2 === 0;
    })
  );

  of2$: Observable<string> = this.of$.pipe(
    map((num) => {
      return `The Value is ${num}`;
    })
  );

  constructor() {}
}
