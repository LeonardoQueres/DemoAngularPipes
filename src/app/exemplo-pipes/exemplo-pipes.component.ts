import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Aprendendo Angular',
    rating: 4.5321,
    numeroPaginas: 340,
    preco: 45.00,
    dataLancamento: new Date(2016, 5, 21),
    url: 'http://a.co/glgjpRP'
  };

  constructor() { }

  ngOnInit() {
  }

}
