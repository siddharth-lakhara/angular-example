import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-classes',
  templateUrl: './conditional-classes.component.html',
  styleUrls: ['./conditional-classes.component.css', '../../app.component.css']
})
export class ConditionalClassesComponent implements OnInit {

  className = "A";
  multipleClassesObject = {
    A: true,
    C: true,
  }
  constructor() { }

  ngOnInit() {
  }

  toggleClassName() {
    this.className = this.className === 'A' ? 'B' : 'A';
  }

}
