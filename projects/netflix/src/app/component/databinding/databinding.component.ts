import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  public Product:any = {};

  public LoadProduct():void{
    fetch("https://jsonplaceholder.typicode.com/photos/1")
    .then(response=> response.json())
    .then(data => {
      this.Product = data;
    })
  }

  constructor(){}
  ngOnInit(): void{
    this.LoadProduct();

  }

}
