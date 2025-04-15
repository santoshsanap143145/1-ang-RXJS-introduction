import { Component, OnDestroy, OnInit } from '@angular/core';
import { OfService } from '../../services/of.service';
import { Observable, Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {
  intervalSub!: Subscription;
  postsTitleArr!: Array<string>;
  constructor(
    private _ofService: OfService,
    private _postsService: PostService
  ) {}

  ngOnInit(): void {
    // this.intervalSub = this._ofService.of1$.subscribe((res) => {
    //   console.log(res);
    // });

    this.intervalSub = this._postsService.fetchAllPosts()
        .subscribe((res: Array<any>) => {
          this.postsTitleArr = res
      });


  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }
}
