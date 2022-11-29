import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',

  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  name!: string;
  firstName!: string;
  age!: number;
  quote!: string;
  imageSrc!: string;

  // Affichage ou Masque de l'age avec le bouton
  toDisplay = true;
  cacheAge() {
    this.toDisplay = !this.toDisplay;
  }

  // affichage input en citation

  textValue = '';
  paragraphText = '';

  displayQuote() {
    this.textValue = this.paragraphText;
  }

  constructor() {}

  ngOnInit() {
    this.name = 'John';
    this.firstName = 'Doe';
    this.age = 25;
    this.imageSrc = 'https://randomuser.me/api/portraits/lego/2.jpg';
    // create api call
    // create the form based on api fields
  }
}
