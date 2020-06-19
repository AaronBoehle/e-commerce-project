import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/services/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onSaveProducts() {
    this.dataStorageService.storeProducts();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
