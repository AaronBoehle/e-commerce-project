import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

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

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCZw2uwV4WJpGyWPBh7J9UM3wFNw-3eC9E',
      {
        email,
        password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZw2uwV4WJpGyWPBh7J9UM3wFNw-3eC9E',
      {
        email,
        password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError));
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
    return  throwError(errorMessage);
  }
}
