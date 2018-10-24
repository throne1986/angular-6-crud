import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-lay-out',
  templateUrl: './lay-out.component.html',
  styleUrls: ['./lay-out.component.scss']
})
export class LayOutComponent implements OnInit {


  loginForm: FormGroup;
  submitted = false;
  invalidLogin = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.controls.email.value === 'webcrafters@gmail.com' && this.loginForm.controls.password.value === 'password') {
        this.router.navigate(['list-user']);
    } else {
      this.invalidLogin = true;
    }
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
