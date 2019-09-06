import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-date-shift-filter',
  templateUrl: './date-shift-filter.component.html',
  styleUrls: ['./date-shift-filter.component.css']
})
export class DateShiftFilterComponent implements OnInit {

  ShiftDropdown: any = [
    {
      shift_desc: "Shift 1",
      shift_code: "S001"
    },
    {
      shift_desc: "Shift 2",
      shift_code: "S002"
    },
    {
      shift_desc: "Shift 3",
      shift_code: "S003"
    }
  ]

  constructor(public dialogRef: MatDialogRef<DateShiftFilterComponent>) { }

  ngOnInit() {
  }

  onDateChangeEvent(date) {

  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onFilter(): void {
    this.dialogRef.close();
  }


}
