import { Component, OnInit } from '@angular/core';
// import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // selectedCustomer={};
  // customers: Customer[]=[
  //   {customerNo:1, name:"deepanshu",address:"Indirapuram",city:"Ghaziabad", country:"India"},
  //   {customerNo:2, name:"Afnan",address:"Lalbagh",city:"Lucknow", country:"India"},
  //   {customerNo:3, name:"Priyanshu",address:"ThanaChowk",city:"Chapra", country:"India"},
  //   {customerNo:4, name:"Pritish",address:"Kavi nagar",city:"Ghaziabad", country:"India"},
  //   {customerNo:5, name:"Ishan",address:"Noida",city:"Meerut", country:"India"},
  // ]
}
