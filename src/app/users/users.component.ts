import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  users: any;


  constructor(private data: DataService) { }

  ngOnInit() 
  { 
      
  }

  search(username: any)
  {
    console.log(username);
    let valuser = username.target.value;
    
    this.data.getUsers(valuser).subscribe(
      data => this.users = data    )
    }

}
