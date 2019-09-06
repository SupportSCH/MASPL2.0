import { Component, OnInit } from '@angular/core';
import { DashboardChartsService } from '../services/dashboard/dashboard-charts.service';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { DashboardApiService } from '../services/dashboard/dashboard-api.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dashboardChartsService: DashboardChartsService,
    public dashboardService: DashboardService,
    public dashboardApiService: DashboardApiService) { }

  ngOnInit() {
    this.dashboardChartsService.oeeChart();
    this.dashboardChartsService.availabilityChart();
    this.dashboardChartsService.performanceChart();
    this.dashboardChartsService.qualityChart();

    this.dashboardChartsService.qualityOkRejectChart();

    this.dashboardChartsService.hourlyProductionChart();
    this.dashboardChartsService.activityAnalysis();

    this.dashboardChartsService.currentTrendChart();
    this.dashboardChartsService.voltageTrendChart();

    this.dashboardChartsService.currentLiveChart();
    this.dashboardChartsService.voltageLiveChart();
  }

  ngOnDestroy() {
    this.dashboardChartsService.disposeCharts();
  }


}
