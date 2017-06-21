import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.scss']
})
export class ProductlistingComponent implements OnInit {

  public rideGear = [
    {
      prodName: "WR Long Leather Gloves",
      price: "Rs.2,220",
      proddesc: "Come to grips with the cold. Water-resistant riding gloves with touch screen sensitive patches and wiper for the visor attached to the index finger to help you focus on what...",
      prodImage: "https://cdn.shopify.com/s/files/1/0660/7355/products/GLS150005--10_large.jpg",
      avail: "disabled"

    },
    {
      prodName: "Thick And Thin Stripe Matt Black",
      price: "Rs.2,820",
      proddesc: "Construction Outer shell - High impact ABS Classic open face design Adjustable nylon chin straps with micrometric lock system Protection Impact protection - shell made of High impact ABS that...",
      prodImage: "https://cdn.shopify.com/s/files/1/0660/7355/products/DSC_0929_large.jpg",
      avail: ""

    },
    {
      prodName: "Explorer Black V2 Jacket",
      price: "Rs.8,500",
      proddesc: "Light yet heavy-duty. A hard-working, good-looking jacket that makes sure you’re never the worse for the wear. Mesh lining for summers, removable winter lining and an airflow mesh panelling for...",
      prodImage: "https://cdn.shopify.com/s/files/1/0660/7355/products/595134B_4_99eced67-d937-436c-b434-c49f4baa9a9d_large.jpg",
      avail: ""

    },
    {
      prodName: "Throwover Rider Saddle Bag",
      price: "Rs.4,500",
      proddesc: "Constructed from waxed canvas with genuine leather trim, YKK metal zippers with leather pull fobs and brass hardware for a classic yet rugged design that only gets better with time....",
      prodImage: "https://cdn.shopify.com/s/files/1/0660/7355/products/TOA150001-BEIGE-0245_09945c42-641b-4a16-a100-b2f7ece86683_large.jpg",
      avail: ""

    },
    {
      prodName: "Polar buff",
      price: "Rs.1,020",
      proddesc: "Great as protective wear and just as stylish as an accessory while you are on the road. made with double layered premium micro fleece & micro poly fabrics for moisture...",
      prodImage: "https://cdn.shopify.com/s/files/1/0660/7355/products/1_0fc60b82-9a30-4708-9c07-967be2195ad4_large.jpg",
      avail: "disabled"

    },
    {
      prodName: "Trifold leather wallet",
      price: "Rs.1,139",
      proddesc: "Roomy without being bulky, this well-organised leather wallet has a separate compartment for ID or cards. A sleek, welcome addition to every pocket. Genuine leather Tri-fold with fabric lining Flip-up...",
      prodImage: "https://cdn.shopify.com/s/files/1/0660/7355/products/primary_764b32ac-0d53-4733-b568-dc50fe7c551b_large.jpg",
      avail: ""

    }
  ];

  constructor() { }

  ngOnInit() {
    var prodSort = _.sortBy(this.rideGear, 'prodName');
    this.rideGear = prodSort;

  }

}
