import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento = { /* esse input quer dizer que agora essa propriedade vai receber valores do elemento pai.*/
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
