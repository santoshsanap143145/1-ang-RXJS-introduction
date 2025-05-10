import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  // userName$: Subject<string> = new Subject<string>()
  userName$: BehaviorSubject<string> = new BehaviorSubject<string>('IAmSantosh')
  constructor() { }
}
//  Subject
// Definition:
// A Subject is a special type of Observable in RxJS that allows values to be multicasted to many observers. Unlike regular Observables, a Subject is also an Observer, so you can send values using .next().

// Key Points:
// Does not hold any initial or current value.
// Subscribers only receive values emitted after they subscribe.
// Acts both as an Observable and an Observer.
// Useful when you want to manually control value emissions (e.g., event emitters).
// Can be subscribed to by multiple observers, making it multicast.

// BehaviorSubject
// Definition:
// A BehaviorSubject is a type of Subject that requires an initial value and always returns the current/latest value to new subscribers.

// Key Points:
// Holds and emits the latest value to subscribers.
// Requires an initial value at the time of creation.
// New subscribers instantly receive the last emitted value, even if they subscribed late.
// Ideal for storing state or current values (like UI state, user info, form values).
// You can retrieve the current value synchronously using .getValue().

