import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

 produto:IProdutoCarrinho = {} as IProdutoCarrinho;

  url:string = 'https://java-urban-commerce-backend-production.up.railway.app';

  constructor(private httpClient:HttpClient) {}

  listprodutos:IProdutoCarrinho[] = {} as IProdutoCarrinho[];
  
  postProdutos(produto:IProdutoCarrinho){
    return this.httpClient.post<IProdutoCarrinho>(this.url, produto).subscribe(
      produtoInDatabase => produto = produtoInDatabase
    );
  }
  getProdutos():Observable<IProduto[]>{
    return this.httpClient.get<IProdutoCarrinho[]>(this.url+"/produtos");
  }
}
