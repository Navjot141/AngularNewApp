import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'NewAngularApp';

  success_msg: boolean = false;
  superPower = 'superWoman';
  contacts = [{
    'firstName': 'ARC',
    'lastName': 'test'
  },
  {
    'firstName': 'AR1C',
    'lastName': 'test'
  },
  {
    'firstName': 'AR2C',
    'lastName': 'test'
  }]
}
