import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onsubmit(value: any) {
    console.log(value);
  }

  citys = [
    {
      id: 1,
      name: 'Hanoi'
    }, {
      id: 2,
      name: 'HCM'
    }
  ]
}
