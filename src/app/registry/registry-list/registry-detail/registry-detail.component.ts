import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Product} from '../../../products/product.model';
import {Observable} from 'rxjs';
import {RegistryService} from '../../registry.service';
import {Registry} from '../../registry.model';

@Component({
  selector: 'app-registry-detail',
  templateUrl: './registry-detail.component.html',
  styleUrls: ['./registry-detail.component.css']
})
export class RegistryDetailComponent implements OnInit {
  @Input() registry: Registry;
  @Input() registryIndex: number;

  constructor(private route: ActivatedRoute,
              private registryService: RegistryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.registryIndex = +params['id'];
      }
    );
  }
  getRegistryProducts(index: number): Observable<Product[]>{
    return new Observable<Product[]>(subscriber => {
      subscriber.next(
        this.registryService.getRegistryProducts(this.registryIndex));
    });
  }
}
