import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private productService:ProductsService,
    private route: ActivatedRoute
    ){
  }
  
  ngOnInit(): void {
    const produtos = this.productService.getAll();
    this.route.queryParamMap.subscribe(params =>{
      const descricao = params.get("descricao")?.toLocaleLowerCase();

      if(descricao){
          this.produtos = produtos.filter(produto => produto.descricao.toLocaleLowerCase().includes(descricao));
          return;
      }
      this.produtos = produtos;
    })
  }


}
