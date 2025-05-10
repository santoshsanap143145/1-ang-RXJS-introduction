import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsernameService } from 'src/app/shared/services/username.service';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.scss']
})
export class UsernameFormComponent implements OnInit {
  constructor(private _userNameService: UsernameService) { }

  ngOnInit(): void {
  }

  onClickgetusername(userName: HTMLInputElement){
    let val = userName.value
    this._userNameService.userName$
          .next(val)
  }

}
