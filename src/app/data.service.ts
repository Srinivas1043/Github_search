import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(userName:any)
  {
    console.log(userName);
    console.log("https://api.github.com/users?q="+userName);
    return this.http.get("https://api.github.com/search/users?q="+userName);
    }

    getUser(userlogin: any)
    {
      return this.http.get("https://api.github.com/users/"+userlogin);
    }
    
 }
