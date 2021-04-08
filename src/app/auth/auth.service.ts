import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, throwError} from 'rxjs';
import {User} from '../user/user.model';
import {Router} from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: number;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  signup(email: string | boolean, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCZw2uwV4WJpGyWPBh7J9UM3wFNw-3eC9E',
      {
        email,
        password,
        returnSecureToken: true
      })
      .pipe(catchError(this.handleError),
        tap(response => {
        this.handleAuth(
          response.email,
          response.localId,
          response.idToken,
          +response.expiresIn);
    }));
  }

  login(email?: string | boolean, password?: string) {
    if (!email || !password) {
      this.router.navigate(['/auth']);
    } else {
      return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZw2uwV4WJpGyWPBh7J9UM3wFNw-3eC9E',
        {
          email,
          password,
          returnSecureToken: true
        })
        .pipe(catchError(this.handleError),
          tap(response => {
            this.handleAuth(
              response.email,
              response.localId,
              response.idToken,
              +response.expiresIn);
          }));
    }
  }


  logout(){
    this.user.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/auth']);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogin() {
    const userData: {
      email: string,
      userId: string,
      _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      this.user = new BehaviorSubject<User>(null);
      return;
    }
    if (userData._tokenExpirationDate) {
      const loadedUser = new User(userData.email, userData.userId, userData._token, new Date(userData._tokenExpirationDate));
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.user.next(loadedUser);
      this.autoLogout(expirationDuration);
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + (+expiresIn * 1000));
    const user = new User(
      email,
      userId,
      token,
      expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(e: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!e.error || !e.error.error) {
      return throwError(errorMessage);
    }
    switch (e.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is incorrect';
        break;
    }
    return throwError(errorMessage);
  }
}
