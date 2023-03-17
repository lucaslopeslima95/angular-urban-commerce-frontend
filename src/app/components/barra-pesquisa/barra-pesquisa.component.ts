import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent {

  descricao:string="";
  constructor(private router:Router){}
  pesquisar(){
    if(this.descricao){
      this.router.navigate(["produtos"],{queryParams:{descricao:this.descricao}});
    }
    this.router.navigate(["produtos"]);
  }
}
