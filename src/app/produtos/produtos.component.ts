import { ActivatedRoute } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit,OnChanges{
  produtos:IProduto[]|undefined;

  constructor(
    private productService:ProdutoService,
    private route: ActivatedRoute
    ){
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      this.searchProducts();
    }
  }
  searchProducts():void{
    const produtos = this.productService.getProdutos();
    this.route.queryParamMap.subscribe(params =>{
      const descricao = params.get("descricao")?.toLocaleLowerCase();

    if(descricao){
          produtos.subscribe(p => this.produtos = p.filter(
            produto => produto.descricao.toLocaleLowerCase().includes(descricao)));
          return;
      }
    })
    produtos.subscribe(p=>this.produtos=p);
  }
  ngOnInit(): void {
    this.searchProducts();
  }


}
