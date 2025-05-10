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
  intervalSub2!: Subscription;
  intervalSub3!: Subscription;
  todoArr!: Array<any>;
  completedTodoArr !: Array<any>
  inCompletedTodoArr !: Array<any>

  constructor(
    private _ofService: OfService,
    private _postsService: PostService
  ) {}

  ngOnInit(): void {
    // this.intervalSub = this._ofService.of1$.subscribe((res) => {
    //   console.log(res);
    // });

    this.intervalSub = this._postsService.fetchAllTodos()
        .subscribe((res: Array<any>) => {
          this.todoArr = res
      });

    this.intervalSub2 = this._postsService.completedTodos()
        .subscribe((res: Array<any>) => {
          this.completedTodoArr = res
          console.log(this.completedTodoArr);
          
      });

    this.intervalSub3 = this._postsService.inCompletedTodos()
        .subscribe((res : Array<any>) => {
          this.inCompletedTodoArr = res
          console.log(this.inCompletedTodoArr);

        })
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
    this.intervalSub2.unsubscribe();
    this.intervalSub3.unsubscribe();
  }
}
