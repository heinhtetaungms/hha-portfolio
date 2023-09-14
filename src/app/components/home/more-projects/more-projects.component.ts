import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AnalyticsService} from "../../../services/analytics/analytics.service";
import {NavigationEvent} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model";
import {filter} from "rxjs";

@Component({
  selector: 'app-more-projects',
  templateUrl: './more-projects.component.html',
  styleUrls: ['./more-projects.component.scss']
})
export class MoreProjectsComponent implements OnInit{

  constructor(private router: Router,
              public analyticsService: AnalyticsService) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  redirect(route: string, event: any) {
    const id =event.target.id
    if (id == 'demoLink' || id == 'ghLink'){
      return;
    }
    window.open(route, '_blank')
  }

}
