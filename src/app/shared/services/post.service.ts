import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  BASE_URL: string = environment.baseUrl;
  POST_URL: string = `${environment.baseUrl}/posts`;
  TODOS_URL: string = `${environment.baseUrl}/todos`;
  constructor(private _http: HttpClient) {}

  fetchAllPosts(): Observable<Array<string>> {
    return this._http.get<any>(this.POST_URL).pipe(
      map((arrObj: Array<any>) => {
        console.log(arrObj);
        // convert array of object into array of string
        let arrOfTitles: Array<string> = arrObj.map((post) => {
          return post.title;
        });
        return arrOfTitles;
      })
    );
  }

  // All methods of httpClientModule like, get,post,delete, put, patch etc returns observables

  fetchAllTodos(): Observable<any[]> {
    return this._http.get<any[]>(this.TODOS_URL)
      .pipe(
        tap(arr => {
          console.log('Before filter', arr)
        }),
    )
  }

  completedTodos(): Observable<any[]> {
    // Completed TODOS
    return this.fetchAllTodos().pipe(
      map((arr: Array<any>) => {
        let completedTodos: Array<any> = arr.filter((todo) => todo.completed);
        return completedTodos;
      })
    );
  }

  inCompletedTodos(): Observable<any[]> {
    // Completed TODOS
    return this.fetchAllTodos().pipe(
      map((arr: Array<any>) => {
        let inCompletedTodos: Array<any> = arr.filter(
          (todo) => !todo.completed
        );
        return inCompletedTodos;
      })
    );
  }
}
