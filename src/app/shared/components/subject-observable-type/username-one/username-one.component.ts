import { Component, OnInit } from '@angular/core';
import { UsernameService } from 'src/app/shared/services/username.service';

@Component({
  selector: 'app-username-one',
  templateUrl: './username-one.component.html',
  styleUrls: ['./username-one.component.scss']
})
export class UsernameOneComponent implements OnInit {

  constructor(private _userNameService: UsernameService) { }
  userName !: string
  ngOnInit(): void {
    this._userNameService.userName$
    .subscribe(res => {
      this.userName = res
    })
  }

}
