import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (protected router:Router) {}
  imageUrl = "https://i.redd.it/such-a-beautiful-cat-love-this-photo-v0-65acqnv39g691.jpg?s=ef87fe656b19842041f2112e1120cd43cd0f3a4d"
}
