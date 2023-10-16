import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AlertService } from '../commons/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService) {

  }

  sending = false;
  loginForm = this.formBuilder.group(
    {
      username: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
    }
  );

  ngOnInit(): void {

  }

  public onSubmit(): void {  
    
    if(this.loginForm.valid) {
      //conectar con un servicio de login!
      this.updateSending();
      this.authService.login(this.loginForm.controls.username.value,this.loginForm.controls.password.value)
        .subscribe(
          data => {
            //si da ok!
            this.updateSending();
            this.router.navigate(['/dashboard']);
          },
          error => {
            this.updateSending();
            this.alertService.error(error.message);
          }          
        );
    }
  }

  private updateSending(): void {
    this.sending = !this.sending;
  }
}
