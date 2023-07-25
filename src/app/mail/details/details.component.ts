import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

type EmailContent = {
  id : number,
  from : string, 
  to : Array<string>, 
  subject : string, 
  body : string
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  requestBody$ : Observable<EmailContent> | null = null
  emailId : string = ''

  constructor(private http: HttpClient, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() : void {
    this.route.paramMap.subscribe(params => {
      this.emailId = params.get('id')!
      this.requestBody$ = this.http.get<EmailContent>(`http://localhost:3040/api/emails/${this.emailId}`, {withCredentials: true})
    })
  }
  delete(request : EmailContent){
    this.http.delete(`http://localhost:3040/api/emails/${this.emailId}`, {withCredentials: true}).subscribe(() => {
      this.router.navigate(['/mail/inbox'])
    })
  }
}

