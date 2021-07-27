import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: Person;
  hideInputNumber: boolean = false;
  cor:string = "Vermelho";
  hideNumber: boolean = false;
  lista: Array<Person> = []
  // constructor: é o que a classe precisa carregar 
  constructor() {
    this.person = new Person();
  }

  // ngOnInit(): Carrega o que a página precisa 
  ngOnInit(): void {
  }
  hideInputNumberEvent() {
    this.hideInputNumber = true;
  }

  changeColor() {
    let newColor:string = "";
    switch (this.cor) {
      case "Vermelho":
        newColor = 'Azul';
        break;
      case "Azul":
        newColor = 'Amarelo';
        break;
      case "Amarelo":
        newColor = 'Vermelho';
        break;
        
    }
    this.cor = newColor;
  }

  // x =>: acesso cada item da lista
  remover(person:Person){
    this.lista = this.lista.filter(x => x.nome !== person.nome
                                  || x.idade !== person.idade
                                  || x.email !== person.email
                                  || x.numero !== person.numero
                                  || x.bairro !== person.bairro
                                  || x.cidade !== person.cidade
                                  || x.estado !== person.estado);
  } 
  

  hideNumberEvent() {
    this.hideNumber = true;
  }
  save() {
    let novaPessoa = new Person();
    novaPessoa.nome = this.person.nome;
    novaPessoa.idade = this.person.idade;
    novaPessoa.email = this.person.email;
    novaPessoa.rua = this.person.rua;
    novaPessoa.numero = this.person.numero;
    novaPessoa.bairro = this.person.bairro;
    novaPessoa.cidade = this.person.cidade;
    novaPessoa.estado = this.person.estado;
    this.lista.push(novaPessoa);
  }
}
