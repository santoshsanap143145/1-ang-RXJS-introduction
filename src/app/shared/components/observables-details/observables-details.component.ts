import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables-details',
  templateUrl: './observables-details.component.html',
  styleUrls: ['./observables-details.component.scss'],
})
export class ObservablesDetailsComponent implements OnInit, OnDestroy {
  sub!: Subscription
  constructor() {}

  ngOnInit(): void {
    let obj$ = new Observable((observer) => {
      let count = 1;
      setInterval(() => {
        observer.next(count);
        count++;
        // if(count > 12){
        //   observer.error(`Something went wrong!!`)
        // }
        if (count === 5) {
          observer.complete();
        }
      }, 1000);
    });

    this.sub = obj$.subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Observable is Complete!!!!!');
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
