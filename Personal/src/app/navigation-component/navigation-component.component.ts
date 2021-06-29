import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation-component.component.html',
  styleUrls: ['./navigation-component.component.css']
})
export class NavigationComponentComponent implements OnInit {
  name: String;
  firstName: String;
  items: any[];
  constructor() { }

  ngOnInit(): void {
    this.name = "John Doe";
    this.firstName = this.name.split(" ")[0];
    this.items = this.retrieveCourses();
  }

  retrieveCourses(): any[]{
    return [
      {Name: "Algorithms and Complexity", Completion: 47.75},
      {Name: "Security Analytics", Completion: 85},
      {Name: "Advanced AI", Completion: 13},
      {Name: "Machine Learning Basics", Completion: 5}
    ]
  }

}
