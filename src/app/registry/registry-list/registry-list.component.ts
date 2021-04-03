import { Component, OnInit } from '@angular/core';
import {RegistryService} from '../registry.service';
import {Observable} from 'rxjs';
import {Registry} from '../registry.model';

@Component({
  selector: 'app-registry-list',
  templateUrl: './registry-list.component.html',
  styleUrls: ['./registry-list.component.css']
})
export class RegistryListComponent implements OnInit {

  constructor(private readonly registryService: RegistryService) { }

  ngOnInit(): void {
  }

  getRegistries(): Observable<Registry[]> {
    return new Observable<Registry[]>(subscriber => {
      subscriber.next(this.registryService.getRegistries());
    });
  }

}
