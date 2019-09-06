import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, NativeDateModule, MatNativeDateModule, MatInputModule, MatSelectModule, MatDialogModule, MatRadioModule, MatRadioButton } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavMenuModule } from './components/side-nav-menu/mat-sidenav-menu.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DateShiftFilterComponent } from './modals/date-shift-filter/date-shift-filter.component';
import { RightSideMenuComponent } from './right-side-menu/right-side-menu.component';

import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorCircleModule } from 'ngx-color/circle';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    SideMenuComponent,
    DateShiftFilterComponent,
    RightSideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavMenuModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    ColorSketchModule,
    ColorCircleModule,
    MatRadioModule,
    FormsModule,
    Ng5SliderModule
  ],
  entryComponents: [
    DateShiftFilterComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
