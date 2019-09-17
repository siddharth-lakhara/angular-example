import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css', '../../app.component.css']
})
export class NgIfComponent implements OnInit {

  shouldShowElement = true;

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility(){
    this.shouldShowElement = !this.shouldShowElement;
  }

}
