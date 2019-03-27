import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // CustomElementsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    // SwUpdatesModule,
    // SharedModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent
    // DocViewerComponent,
    // DtComponent,
    // FooterComponent,
    // ModeBannerComponent,
    // NavMenuComponent,
    // NavItemComponent,
    // SearchBoxComponent,
    // NotificationComponent,
    // TopMenuComponent,
  ],
  providers: [
    // Deployment,
    // DocumentService,
    // { provide: ErrorHandler, useClass: ReportingErrorHandler },
    // GaService,
    // Logger,
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
    // LocationService,
    // { provide: MatIconRegistry, useClass: CustomIconRegistry },
    // NavigationService,
    // ScrollService,
    // ScrollSpyService,
    // SearchService,
    // svgIconProviders,
    // TocService,
    // { provide: CurrentDateToken, useFactory: currentDateProvider },
    // { provide: WindowToken, useFactory: windowProvider },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
