import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import 'rxjs/Rx';

import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.scss'],
  providers: [ApiServicesService]
})
export class ProductlistingComponent implements OnInit {

  constructor(private apiServices: ApiServicesService) { }

  public rideGear = [];

  ngOnInit() {
    console.log(1);
    this.getProtectionBenefits();
  }

  getProtectionBenefits() {
    this.apiServices.getBenefits().subscribe(
      (data) => this.rideGear = data
    );
  }

}
