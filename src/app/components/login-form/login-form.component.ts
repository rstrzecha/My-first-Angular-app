import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  //Formularze
  //W Angularze są dwa podejścia do tworzenia formularzy
  //Template driven
  //Reactive Forms

  loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        'username': new FormControl(null, Validators.required), //będzie kotrolowało pojedynczy input z formularza
        'password': new FormControl(null, Validators.required),
        'age': new FormControl(null, Validators.required)
      }
    )

  }

  onFormSubmit() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid, 'czy formularz jest poprawnie wypełniony');

    //gdy dany forlmularz jest wypełniony poprawnie
    if(this.loginForm.valid) {
      this.loginForm.reset();
    }

  }
  
  ngOnDestroy(): void {
  }


}
