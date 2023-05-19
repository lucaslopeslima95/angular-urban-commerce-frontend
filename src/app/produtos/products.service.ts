import { Injectable } from '@angular/core';
import { IProduto, IProdutoCarrinho } from '../produtos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private httpClient:HttpClient) {}

  produto:IProdutoCarrinho = {} as IProdutoCarrinho;

  listprodutos:IProdutoCarrinho[] = {} as IProdutoCarrinho[];

  url:string = 'https://java-urban-commerce-backend-production-149a.up.railway.app';
  
  getAll():Observable<IProduto[]>{
    this.httpClient.get<IProdutoCarrinho[]>(this.url+"/produtos").subscribe(p => this.listprodutos = p);
    return this.httpClient.get<IProdutoCarrinho[]>(this.url+"/produtos");
  }
  
  getOne(produtoId : string | null ){
    
    this.listprodutos.find(produto => produto.id === produtoId)
    
    return this.listprodutos.find(produto => produto.id === produtoId);
  }
}
