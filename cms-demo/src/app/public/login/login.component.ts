import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'demo-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  frmLogin: FormGroup;

  constructor() { }

  ngOnInit() {
    this.frmLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

}
