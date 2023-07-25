import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DetailsComponent } from '../details/details.component';


type EmailList = {
  id: number,
  from: string,
  to: Array<string>,
  subject: string,
  body: string,
  sentAt: string,
  readers: Array<string>,
  starred: Array<any>
  read: boolean
}[];

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }


  emails: EmailList = []
  emails$: Observable<EmailList> | null = null

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      // console.log(event)
      if (event instanceof NavigationEnd) {
        this.http.get<EmailList>('http://localhost:3040/api/emails/inbox', { withCredentials: true }).subscribe((emails) => {
          this.emails = emails
        })
      }
    }
    )
    this.http.get<EmailList>('http://localhost:3040/api/emails/inbox', { withCredentials: true }).subscribe((emails) => {
      this.emails = emails
    })
  }
  // ToDo: Fix leaky su


  readEmail(email: any) {
    this.http.patch(`http://localhost:3040/api/emails/${email.id}`, {
      "read": true
    }, { withCredentials: true }).subscribe(() => {
      for (let currentEmail of this.emails) {
        if (email === currentEmail) {
          email.read = true
        }
      }
    }
    )
  }

  starred(email: any) {
    this.http.patch(`http://localhost:3040/api/emails/${email.id}`, {
      "starred": !email.starred
    }, { withCredentials: true }).subscribe(() => {
      for (let currentEmail of this.emails) {
        if (email === currentEmail) {
          email.starred = !email.starred
        }
      }
    }
    )
  }
}
// refactor menu