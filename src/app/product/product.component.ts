import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  maxprice=0;
  products=[
    {id:1,Name:"Redmi Note 11", Price:"11999", Color:"Black", Availability:"Available", image:"/assets/redminote11.jpg"},
    {id:2,Name:"Apple Iphone 14 Pro Max", Price:"132990", Color:"Deep Purple", Availability:"Available", image:"/assets/iphone14.jpg"},
    {id:3,Name:"Samsung Galaxy S23", Price:"79999", Color:"Green", Availability:"Not Available", image:"/assets/samsung.jpg"},
    {id:4,Name:"OnePlus Nord CE 2 Lite", Price:"18999", Color:"Black", Availability:"Available", image:"/assets/one+.jpg"},
    {id:5,Name:"Google Pixel 7 Pro", Price:"74250", Color:"Hazel", Availability:"Available", image:"/assets/google.jpg"},
    {id:6,Name:"Nokia 8210 4G", Price:"3749", Color:"Blue", Availability:"Available", image:"/assets/nokia.jpg"}
]
getmaxprice(){
  for (let x of this.products){
  if(this.maxprice<parseInt(x.Price)){
    this.maxprice=parseInt(x.Price)
  }
} return this.maxprice.toString();
}
}
