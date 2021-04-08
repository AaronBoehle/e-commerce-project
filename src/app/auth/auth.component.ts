import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  signupForm: FormGroup;

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.initAuthForm();
  }
  initAuthForm() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required
        // Minimum eight characters, at least one letter, one number and one special character
        // Validators.pattern('"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"\n')
      ])
    });
  }
  onBackToLogin(): void {
    this.isLoginMode = !this.isLoginMode;
    this.signupForm.reset();
    this.error = null;
  }
  onSubmit(): void {
    const email: boolean | string = this.signupForm.value.email;
    const password: string = this.signupForm.value.password;
    let authObservable: Observable<AuthResponseData> = new Observable<AuthResponseData>();
    this.isLoading = true;
    if (!this.signupForm.valid) {
      return;
    }
    authObservable = this.isLoginMode
      ? this.authService.login(email, password)
      : this.authService.signup(email, password);

    authObservable.subscribe(
      () => {
        this.isLoading = false;
        const url = this.route.snapshot.queryParams['redirectURL'] || '/products';
        this.router.navigate([url]);
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    this.signupForm.reset();
    this.error = null;
  }

}
