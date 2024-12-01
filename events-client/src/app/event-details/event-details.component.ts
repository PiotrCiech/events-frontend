import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {DatePipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-event-details',
  imports: [
    MatDialogClose,
    MatDialogActions,
    MatButton,
    DatePipe,
    MatDialogContent,
    MatDialogTitle,
    NgIf
  ],
  templateUrl: './event-details.component.html',
  standalone: true,
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
