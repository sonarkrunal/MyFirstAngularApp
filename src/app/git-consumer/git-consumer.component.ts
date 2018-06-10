import { Component, OnInit } from '@angular/core';
import {GitAccessServiceService} from '../git-access-service.service';

@Component({
  selector: 'app-git-consumer',
  templateUrl: './git-consumer.component.html',
  styleUrls: ['./git-consumer.component.css'],
  providers: [GitAccessServiceService]
})
export class GitConsumerComponent implements OnInit {
  result;

  constructor(private gitAccessObj: GitAccessServiceService) { }

  ngOnInit() {
  }

  gitUserDetail(){
    this.gitAccessObj.getGitUsersDetails().subscribe(response=>{
      this.result = response;
    })
  }

}
