import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  produtos:IProduto[]|undefined;
  constructor(private productService:ProductsService){
  }
  ngOnInit(): void {
    this.produtos = this.productService.getAll();
  }


}
