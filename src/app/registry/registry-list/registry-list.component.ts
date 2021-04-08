import { Component, OnInit } from '@angular/core';
import {RegistryService} from '../registry.service';
import {Observable, of} from 'rxjs';
import {Registry} from '../registry.model';
import {Product} from '../../products/product.model';

@Component({
  selector: 'app-registry-list',
  templateUrl: './registry-list.component.html',
  styleUrls: ['./registry-list.component.css']
})
export class RegistryListComponent implements OnInit {
  selected: Registry;

  constructor(private readonly registryService: RegistryService) { }

  ngOnInit(): void {
    this.selected = this.getRegistryList().find(x => x.isDefault);
  }
  getRegistryList(): Registry[] {
    return this.registryService.getRegistryList()
      .sort(registry => registry.isDefault === true ? -1 : 1);
  }
  getRegistry(registryIndex: number) {
    this.selected = this.getRegistryList()[registryIndex];
  }

}
