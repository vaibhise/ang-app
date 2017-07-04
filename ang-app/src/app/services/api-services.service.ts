import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiServicesService {

  constructor(private http: Http) { }

  getBenefits(): Observable<any> {
    console.log(2);
		return this.http.get('../assets/services/product.json').map(
      res => {
  			let obj = res.json();
        return obj;
      }
		);
  }

}
