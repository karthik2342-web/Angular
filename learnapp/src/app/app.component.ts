import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnapp';
  x=9;
  y=10;sum(n:number,m:number){
    return n+m;
  }
}
