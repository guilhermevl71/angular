import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
    conteudo: 'se a vida te der limões, faça uma limonada',
    autoria: 'Alguém',
    modelo: 'modelo3'
    },
    {
      conteudo: 'Take it easy',
      autoria: '...',
      modelo: 'modelo3'
      }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
