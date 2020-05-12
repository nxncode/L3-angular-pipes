import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes and Two Way Binding';

  intro : string = 'This tutorial is a tutorial on  Angular';
  trainer : string = 'Nixon';

  date = new Date();
  percent : number = 0.52;
  amount : number = 500;
  num : number = 256.32154875556;
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun','July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']; 
}
