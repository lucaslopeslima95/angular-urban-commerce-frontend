import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';


@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    FormsModule
  ]
})
export class CarrinhoModule { }
