import { Component, OnInit } from '@angular/core';
import { UsernameService } from 'src/app/shared/services/username.service';

@Component({
  selector: 'app-username-two',
  templateUrl: './username-two.component.html',
  styleUrls: ['./username-two.component.scss']
})
export class UsernameTwoComponent implements OnInit {

 constructor(private _userNameService: UsernameService) { }
   userName !: string
   ngOnInit(): void {
     this._userNameService.userName$
     .subscribe(res => {
       this.userName = res
     })
   }

}
