import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit{

  active:number = 0

  ngOnInit(): void {
  }

}
