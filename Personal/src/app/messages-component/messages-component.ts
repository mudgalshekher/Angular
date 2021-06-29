import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messages-component',
  templateUrl: './messages-component.html',
  styleUrls: ['./messages-component.css']
})
export class MessagesComponent implements OnInit {
  name: string;
  firstName: string;

  constructor() { }

  ngOnInit(): void {
    this.name = "John Doe";
    this.firstName = this.name.split(" ")[0];
  }

}
