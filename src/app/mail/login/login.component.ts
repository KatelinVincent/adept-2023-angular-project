import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, protected router: Router, private http: HttpClient) { }

  loginCredentials = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  })

  onSubmit() {
    this.http.post('http://localhost:3040/api/emails/login', this.loginCredentials.value, {withCredentials: true}).subscribe((response) => {
        this.router.navigate(['mail/inbox'])
    })
  }
}