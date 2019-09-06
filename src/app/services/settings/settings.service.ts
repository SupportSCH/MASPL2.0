import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  navbar_background_color: any = "#121725";

  left_sidemenu_position: any = "over";
  right_sidemenu_position: any = "over";

  constructor() { }


}
