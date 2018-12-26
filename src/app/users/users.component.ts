import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {


  users: any;
  username:string;

  constructor(private data: DataService) { }

  ngOnInit() 
  { 
      
  }

  search(loginname)
  {
    this.username =  loginname;
    console.log(this.username);
    return this.data.getUsers(loginname).subscribe(
      data => this.users = data    )

      
    }

}
