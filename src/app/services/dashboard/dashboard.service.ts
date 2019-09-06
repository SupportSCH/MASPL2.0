import { Injectable } from '@angular/core';
import { DashboardChartsService } from './dashboard-charts.service';
import { DashboardApiService } from './dashboard-api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public dashboardChartsService: DashboardChartsService,
    public dashboardApiService: DashboardApiService) {

  }

}
