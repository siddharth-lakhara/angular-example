import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css', '../../app.component.css']
})
export class NgSwitchComponent implements OnInit {

  currentSelection = 1;

  constructor() { }

  ngOnInit() {
  }

  updateSelection(val) {
    this.currentSelection = val;
  }
}
