import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = { /* esse input quer dizer que agora essa propriedade vai receber valores do elemento pai.*/
    id: 0,
    conteudo: '', /* por causa do @input esses parametros está recebendo valor da array, pq o elemento pai é uma div com ngfor */
    autoria: '',
    modelo: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
