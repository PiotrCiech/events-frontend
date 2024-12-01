import { Component, OnInit } from '@angular/core';
import { MockEventsService } from '../mock-events.service';
import {CommonModule} from '@angular/common';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {EventDetailsComponent} from '../event-details/event-details.component';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, MatTable, MatColumnDef, MatHeaderCell, MatCell, MatHeaderCellDef, MatCellDef, MatButton, MatHeaderRow, MatRow, MatRowDef, MatHeaderRowDef],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(private mockEventsService: MockEventsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.mockEventsService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

  displayedColumns: string[] = ['deviceId', 'eventDate', 'type', 'details'];
  showDetails(event: any): void {
    this.dialog.open(EventDetailsComponent, {
      data: event,
      width: '400px'
    });
  }
}
