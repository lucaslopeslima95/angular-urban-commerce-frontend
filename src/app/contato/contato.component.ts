import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  formContato = this.formsBuilder.group({
    nome:["",[Validators.minLength(4),Validators.required]],
    assunto:["",Validators.minLength(10),Validators.required],
    telefone:["",Validators.minLength(11),Validators.required],
    email:["",Validators.minLength(11),Validators.email,Validators.required],
    menssagem:["",Validators.minLength(20),Validators.required],
  })
  constructor(
    private formsBuilder:FormBuilder
  ){}
  eviarFormulario(){
    alert("Formulario Enviado");
    this.formContato.reset();
  }
}
