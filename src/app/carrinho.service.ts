import { IProdutoCarrinho } from './produtos';
import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens:IProdutoCarrinho[] = [];
  constructor() { }

  obtemCarrinho(){
      return JSON.parse(localStorage.getItem("carrinho")|| "");
  }
  adicionarAoCarrinho(produto:IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho",JSON.stringify(this.itens));
  }
  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
