import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';


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

  livros: string[] = ['C#', 'Angular 8'];
  filtro: string;

  addCurso(value){
    this.livros.push(value);
  }

  obterCursos(){
    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') 
      return this.livros;

      
    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  valueAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assincrono'), 2000)
  });  

  constructor() { }

  ngOnInit() {
  }

}
