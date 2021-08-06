import { Component, OnInit } from '@angular/core';
import {cartItems} from '../fakepostsdb';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems1: any[];

  constructor() {
    this.cartItems1 = [];
  }

  ngOnInit(): void {
    this.cartItems1 = cartItems;
  }

}
