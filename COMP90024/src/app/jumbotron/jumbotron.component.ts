import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  title
  subtitle
  uni

  constructor() { }

  ngOnInit(): void {
    this.title =  "Australian Game of Thrones"
    this.subtitle = "A Cluster and Cloud Computing (COMP90024) Project"
    this.uni = "University of Melbourne"
  }

}
