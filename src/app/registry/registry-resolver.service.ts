import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Registry} from './registry.model';
import {RegistryService} from './registry.service';
import {DataStorageService} from '../shared/services/data-storage.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RegistryResolverService implements Resolve<Registry[]>{

  constructor(private registryService: RegistryService,
              private dataStorageService: DataStorageService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Registry[]> | Promise<Registry[]> | Registry[] {
    const registryList: Registry[] = this.registryService.getRegistries();
    return (registryList?.length === 0) ? this.dataStorageService.getRegistries('userId') : registryList;
  }
}
