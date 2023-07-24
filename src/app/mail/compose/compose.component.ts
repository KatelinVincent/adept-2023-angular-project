import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent {
constructor(private formBuilder : FormBuilder, private router : Router, private http: HttpClient) {}

to : Array<string> = []

composedEmail = this.formBuilder.group({
  recipient : '',
  subject : '',
  body : ''
})

add(){
  this.to.push(this.composedEmail.controls.recipient.value!)
  this.composedEmail.controls.recipient.reset()
  console.log(this.to)
}
remove(recipient : string){
  this.to.splice(this.to.indexOf(recipient),1)
}

validEmail() : boolean {
  return !(this.to.length >= 1 && this.composedEmail.controls.subject.value !== '')
}

onSend() {
  this.http.post('http://localhost:3040/api/emails', {
    "to": this.to,
    "subject": this.composedEmail.controls.subject.value,
    "body": this.composedEmail.controls.body.value
}, {withCredentials: true}).subscribe(() => {
  this.router.navigate(['/mail/inbox'])
})
}

}
