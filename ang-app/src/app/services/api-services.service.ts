import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiServicesService {

	public url = 'http://alcoholix.vizualize.com/syntel/trunk/html/';

  constructor(private http: Http) {}

  getBenefits(): Observable<any> {
		const apiName = this.url + 'product.json';

		return this.http.get(apiName).map(
			res => {
				const benefits = res.json();
				console.log(benefits);
				return benefits;
			}
		);
  }

}
