import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
	fuels={
	"petrolRate":102.35,
	"dieselRate":100.10
	}
}
