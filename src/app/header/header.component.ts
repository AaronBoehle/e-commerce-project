import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../shared/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onSaveProducts() {
    this.dataStorageService.storeProducts();
  }
}
