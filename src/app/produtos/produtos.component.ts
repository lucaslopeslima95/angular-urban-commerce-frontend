import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  produtos:IProduto[]|undefined;

  constructor(
    private productService:ProdutoService,
    private route: ActivatedRoute
    ){
  }
  
  ngOnInit(): void {
    const produtos = this.productService.getProdutos();
    /**this.route.queryParamMap.subscribe(params =>{
      const descricao = params.get("descricao")?.toLocaleLowerCase();

    if(descricao){
          this.produtos = produtos.filter(produto => produto.descricao.toLocaleLowerCase().includes(descricao));
          return;
      }
    })*/
    produtos.subscribe(p=>this.produtos=p);
  }


}
