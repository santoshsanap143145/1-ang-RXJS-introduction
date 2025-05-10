import { Component, OnInit } from '@angular/core';
import { UsernameService } from 'src/app/shared/services/username.service';

@Component({
  selector: 'app-username-three',
  templateUrl: './username-three.component.html',
  styleUrls: ['./username-three.component.scss']
})
export class UsernameThreeComponent implements OnInit {

  constructor(private _userNameService: UsernameService) { }
    userName !: string
    ngOnInit(): void {
      this._userNameService.userName$
      .subscribe(res => {
        this.userName = res
      })
    }

}
