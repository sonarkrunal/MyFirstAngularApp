import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GitAccessServiceService {

  constructor(private http: Http) { }

  getGitUsersDetails(): Observable <any>{
    return this.http.get("https://api.github.com/search/users?q=%22a%22").map(response =>{ 
    const result = response.json;
    return result;
  });
  }

}
