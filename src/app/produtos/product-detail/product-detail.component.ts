import { CarrinhoService } from './../../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  
  produto:IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtoService:ProductsService,
    private route:ActivatedRoute,
    private notificacaoSevice:NotificacaoService,
    private CarrinhoService:CarrinhoService){}

  ngOnInit(): void {
    const routesParams = this.route.snapshot.paramMap;
    const productId = Number(routesParams.get("id"));
    this.produto = this.produtoService.getOne(productId);
  }

  adicionarProdutoCarrinho(){
    
    const produtoNovo:IProdutoCarrinho = {
      ...this.produto!,
      quantidade:this.quantidade
    }
    this.CarrinhoService.adicionarAoCarrinho(produtoNovo);
    this.notificacaoSevice.notificar("O produto foi adicionado ao carrinho");
  }

}
