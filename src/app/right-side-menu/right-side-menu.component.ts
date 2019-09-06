import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings/settings.service';

@Component({
  selector: 'app-right-side-menu',
  templateUrl: './right-side-menu.component.html',
  styleUrls: ['./right-side-menu.component.scss']
})
export class RightSideMenuComponent implements OnInit {

  OEEminValue: number = 10;
  OEEmaxValue: number = 90;

  AvailabilityminValue: number = 10;
  AvailabilitymaxValue: number = 90;

  PerformanceminValue: number = 10;
  PerformancemaxValue: number = 90;

  QualityminValue: number = 10;
  QualitymaxValue: number = 90;


  options: any = {
    floor: 0,
    ceil: 100,
    step: 5,
    showTicks: true,
    showSelectionBar: true,
    showOuterSelectionBars: true,
    minRange: 5,
    maxRange: 75,
    noSwitching: true,
    pushRange: true
  };

  constructor(public settingsService: SettingsService) { }

  ngOnInit() {
  }

  changeComplete(value) {
    this.settingsService.navbar_background_color = value.color.hex;
  }

}
