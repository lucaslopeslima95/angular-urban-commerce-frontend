import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, } from '@angular/core';
import { IProduto } from '../produtos';
import { ProductsService } from'./products.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  produtosList:IProduto[]|undefined;

  constructor(
    private productService:ProductsService,
    private route: ActivatedRoute
    ){
  }
 
  searchProducts():void{
    const produtos = this.productService.getAll();
    this.route.queryParamMap.subscribe(params =>{
    const descricao = params.get("descricao")?.toLocaleLowerCase();

    if(descricao){
          produtos.subscribe(p => this. produtosList = p.filter(
            produto => produto.descricao.toLocaleLowerCase().includes(descricao)));
          return;
      }
    })
    produtos.subscribe(p=>this. produtosList=p);
  }
  ngOnInit(): void {
    this.searchProducts();
  }


}
