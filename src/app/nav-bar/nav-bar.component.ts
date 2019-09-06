import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { MatDialog } from '@angular/material';
import { DateShiftFilterComponent } from '../modals/date-shift-filter/date-shift-filter.component';
import { SettingsService } from '../services/settings/settings.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, 
    public settingsService: SettingsService,
    public dashboardService: DashboardService,
    public dialog: MatDialog) { }


  refresh() {
    
  }

  // TO Opening the  DATE and SHIFT Filter Modal
  openDateFilterModal() {
    const dialogRef = this.dialog.open(DateShiftFilterComponent, {
      width: "350px",
    });
  }

}
