import { Component, OnInit } from '@angular/core';
import { OfService } from '../../services/of.service';
import { Observable, Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  intervalSub!: Subscription;
  postsTitleArr!: Array<string>;
  
  postsTitleArr$ !: Observable<Array<string>>
  constructor(
    private _ofService: OfService,
    private _postsService: PostService
  ) {}

  ngOnInit(): void {
    // this.intervalSub = this._ofService.of1$.subscribe((res) => {
    //   console.log(res);
    // });


    this._postsService.fetchAllPosts()
        .subscribe((res: Array<any>) => {
          this.postsTitleArr = res
      });

      //below is other way 
      this.postsTitleArr$ = this._postsService.fetchAllPosts()
  }

}
