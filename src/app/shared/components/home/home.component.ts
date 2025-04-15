import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { OfService } from '../../services/of.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  interval$ = interval(1000);
  intervalSub!: Subscription;
  constructor(private _ofService: OfService) {}

  ngOnInit(): void {
    this.intervalSub = this._ofService.of2$.subscribe((res) => {
      console.log(res);
    });

    // this.intervalSub = interval(1000)
    //   .subscribe((res) => { // sucess >> next function/method
    //     console.log(res)
    //   })
    // .subscribe({
    //   next: () => {},
    //   error: () => {},
    //   complete: () => {},
    // })
    // The Object above inside the subscribe method is called Observer Object
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }
}
