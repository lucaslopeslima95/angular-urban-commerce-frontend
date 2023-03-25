import { Router } from '@angular/router';
import { CarrinhoService } from './../../carrinho.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showNetWorks:boolean = false;
  constructor(
    public carrinhoService:CarrinhoService,
    private router:Router){
      if(window.innerWidth > 600){
          document.getElementById("redes")?.remove

      }
    }

    goToProducts():void{
         this.router.navigate(["/produtos"]);
    }
    goToCart():void{
      this.router.navigate(["/carrinho"])
    }
    gotToContact():void{
      this.router.navigate(["/contato"]);
    }

}
