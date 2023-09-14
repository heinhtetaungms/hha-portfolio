import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HomeComponent} from "./home.component";
import {BannerComponent} from "./banner/banner.component";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {CarouselModule} from "ngx-owl-carousel-o";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { AboutComponent } from './about/about.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { MoreProjectsComponent } from './more-projects/more-projects.component';
import { ContactComponent } from './contact/contact.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    ExperiencesComponent,
    ProjectsComponent,
    MoreProjectsComponent,
    ContactComponent,
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    CarouselModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }
