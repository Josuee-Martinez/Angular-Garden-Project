import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products = {};

  constructor(private productService: ProductService) {

  }

  // run() {
  //   this.productService.getProducts().subscribe(products => {
  //     let ul = document.getElementById('list')
  
  //     for(let i = 0; i < 899; i++) {
  //       let prodId = products[i].id;
  //       let prodDesc = products[i].product_description;
  //       let prodPrice = products[i].product_price;

  //       let li = document.createElement('li');
  //       li.className = 'list-item';
  //       li.style.padding = '5em';
  //       li.style.border = '2px solid black';
        
  //       li.style.backgroundImage = "url('https://icon2.kisspng.com/20180202/ojw/kisspng-houseplant-dragon-tree-dracaena-fragrans-light-green-plants-potted-large-leaves-deductible-png-5a745517613358.6543659415175733993981.jpg')";

  //       li.appendChild(document.createTextNode(`Product id: ${prodId}, Product Description: ${prodDesc}, Product Price:, $${prodPrice}.`))
  //       ul.appendChild(li)
  //     }
     
  //   // fetch('https://efa-gardenapp-backend.herokuapp.com/api/product').then(function(data) {
  //   //   console.log(data)
  //   })

    
  // }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => 
        // console.log(data)
        this.products = data
        // console.log(this.products)
        );
  }

  deleteProduct(e) {
    e.preventDefault();
    var delID = e.target.elements[0].id;
    var delUrl = `https://efa-gardenapp-backend.herokuapp.com/api/product/${delID}`;
    var token = sessionStorage.getItem('token');
    console.log(token);

    fetch(delUrl, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: token
      })
    }).then(response => response.json())
      .then(json => { console.log(json)})

      .then(del =>
        this.productService.getProducts()
      .subscribe(data =>     
        this.products = data
        ) )
    }

}
