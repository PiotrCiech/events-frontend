import { Component } from '@angular/core';
import {EventsListComponent} from './events-list/events-list.component';

@Component({
  selector: 'app-root',
  imports: [EventsListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'flow-dog';
}
