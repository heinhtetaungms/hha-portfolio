import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {AnalyticsService} from "../../../services/analytics/analytics.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000
  }

  @ViewChild('imgContainer') imgContainer!: ElementRef;

  constructor(public analyticsService: AnalyticsService) {
  }

  ngOnInit(): void {

  }

}
