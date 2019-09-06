import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {

  Today: any = new Date();

  constructor(public http: HttpClient,
    public sharedService: SharedService) { }


  // For fetching the Productivity Analysis from the Server
  fetchProductivityAnalysisAPI() {
    let data = {
      "token": "line_productivity_analysis",
      // "search_date" : this.Search_Date
    }

    const headerDict = {
      'Content-Type': 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.sharedService.BaseURL + 'line_productivity_analysis/line_productivity_analysis.php', JSON.stringify(data), requestOptions);
  }

   // For Full Date to Short Date Conversion
   public fullDateStringToDateConversion(fullDate) {
    let FullDate = fullDate.split('T');
    return FullDate[0];
  }
  

}
