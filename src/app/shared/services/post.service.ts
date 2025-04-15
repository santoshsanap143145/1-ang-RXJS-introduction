import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
    BASE_URL : string = environment.baseUrl;
    POST_URL : string = `${environment.baseUrl}/posts`
  constructor(private _http: HttpClient) {}

  fetchAllPosts(): Observable<Array<string>>{
    return this._http.get<any>(this.POST_URL)
                .pipe(
                    map((arrObj : Array<any>) => {
                        console.log(arrObj)
                        // concert array of object into array of string
                        let arrOfTitles : Array<string> = arrObj.map(post => post.title)
                        return arrOfTitles
                    })
                )
  }

  // All methods of httpClientModule like, get,post,delete, put, patch etc returns observables


}
