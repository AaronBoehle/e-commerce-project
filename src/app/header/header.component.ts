import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/services/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {Observable, Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';
import {User} from '../user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  getUser(): Observable<User>{
    return this.authService.user
      .pipe(
        tap(user => {
          this.isAuthenticated = !! user;
        }));
  }

  onLogout(): void {
    this.authService.logout();
  }

  onSaveProducts(): void {
    this.dataStorageService.storeProducts();
  }

}
