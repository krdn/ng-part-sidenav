import { Component, ElementRef, HostBinding, HostListener, OnInit,
  QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  isTransitioning = true;

  // Disable all Angular animations for the initial render.
  @HostBinding('@.disabled') isStarting = true;

  ngOnInit(): void {
    // 구독(subscribe) 설정
    // this.navigationService.navigationViews.subscribe((views) => {
    //   this.footerNodes = views.Footer || [];
    //   this.sideNavNodes = views.SideNav || [];
    //   // this.topMenuNodes = views['TopBar']  || [];
    //   // this.topMenuNarrowNodes = views['TopBarNarrow'] || this.topMenuNodes;
    // });
    // this.navigationService.versionInfo.subscribe((vi) => (this.versionInfo = vi));
    // console.log(this.footerNodes);
  }

}
