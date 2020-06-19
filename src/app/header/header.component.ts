import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/services/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {Observable, Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';

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

  getUser() {
    return this.authService.user
      .pipe(
        tap(user => {
          this.isAuthenticated = !! user;
        }));
  }

  onLogout() {
    this.authService.logout();
  }

  onSaveProducts() {
    this.dataStorageService.storeProducts();
  }

}
