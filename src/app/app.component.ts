import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: ` <app-user-profile></app-user-profile> `,
})
export class AppComponent {
  title = 'mySecondApp';
}
