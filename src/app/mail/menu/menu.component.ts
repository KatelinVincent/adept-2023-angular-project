import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(protected router: Router, private http: HttpClient) { }

  logout() {
    this.http.post('http://localhost:3040/api/emails/logout', {withCredentials: true}).subscribe((response) => {
      this.router.navigate(['/mail/login'])
      console.log(response)
  })
  }

}
