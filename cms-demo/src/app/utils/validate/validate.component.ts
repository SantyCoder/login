import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidateService } from './validate.service';
@Component({
  selector: 'demo-app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {

  message: string;

  @Input() control: FormControl;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage(){
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        this.message = ValidateService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        return this.message;
      }
    }
    return null;
  }

}
