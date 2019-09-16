import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  public isDisabled = true;
  public name = '';
  public name2 = '';
  constructor() { }

  ngOnInit() {
  }

  handleInputToggle() {
    this.isDisabled = !this.isDisabled;
  }

  handleInputChange(value: string) {
    this.name = value;
  }

}
