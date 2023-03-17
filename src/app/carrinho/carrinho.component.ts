import { IProdutoCarrinho,IProduto } from './../produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{

  itensDoCarrinho:IProdutoCarrinho[]=[];

  total = 0;
  
  constructor(
    public carrinhoService:CarrinhoService,
    private router:Router){}
  ngOnInit(): void {
    this.itensDoCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  removerProdutoCarrinho(produtoId:number){
    this.itensDoCarrinho = this.itensDoCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerprodutoCarrinho(produtoId);
    this.calcularTotal();
  }
  calcularTotal(){
    this.total = this.itensDoCarrinho.reduce((prev,curr)=> prev+(curr.preco*curr.quantidade),0);
  }
  comprar(){
    alert("Parabens voce finalizou a sua compra");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
}
