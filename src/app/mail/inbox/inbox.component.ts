import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

type EmailList = {
  id : number, 
  from : string,
  to : Array<string>,
  subject : string,
  body : string,
  sentAt : string,
  readers : Array<string>,
  starred : Array<any>
}[];

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  
  emails$ : Observable<EmailList> | null = null

  ngOnInit() {
    this.emails$ = this.http.get<EmailList>('http://localhost:3040/api/emails/inbox', {withCredentials: true})
  }
}
