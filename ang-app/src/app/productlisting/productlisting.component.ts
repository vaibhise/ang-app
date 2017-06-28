import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { Observable } from 'rxjs/Rx';

import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.scss'],
  providers: [ApiServicesService]
})
export class ProductlistingComponent implements OnInit {

  constructor(private apiServices: ApiServicesService) { }

  ngOnInit() {
    //var prodSort = _.sortBy(this.rideGear, 'prodName');
    // this.rideGear = prodSort;
  }

  getProtectionBenefits(): Observable<any> {
    return this.apiServices.getBenefits().map(
      res => {
        return res;
      }
    );
  }

}
