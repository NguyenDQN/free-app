import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  public canDisplay(): boolean {
    const date: Date = new Date();

    if (date.getDay() === 0  || date.getDay() === 6) {
      return false;
    }

    const hours: number = date.getHours();

    if ( !(hours >= 8 && hours <= 17)) {
      return false;
    }
    return true;
  }
}
