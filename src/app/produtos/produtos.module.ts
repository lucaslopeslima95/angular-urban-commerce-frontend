
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutosComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
    
  ]
})
export class ProdutosModule { }
