import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';


export interface PeriodicElement {
  isbn: number;
  nome_livro: string;
  data_lancamento: string;
  acoes: string;
} 

const ELEMENT_DATA: PeriodicElement[] = [
  {isbn: 14321, nome_livro: 'Projeto Fenix', data_lancamento: '10/6/1994 ', acoes: ''},
  {isbn: 22432, nome_livro: 'Assim que acaba', data_lancamento: '08/9/1984', acoes: ''},
  {isbn: 37658, nome_livro: 'Macunaíma', data_lancamento: '20/3/1970', acoes: ''},
  {isbn: 47612, nome_livro: 'A hora da estrela', data_lancamento: '31/2/1990', acoes: ''},
  {isbn: 59023, nome_livro: 'Biscoitinho', data_lancamento: '12/11/1865', acoes: ''},
  {isbn: 65432, nome_livro: 'História da LaLa', data_lancamento: '15/4/1980', acoes: ''},
  
];

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.scss']
})
export class ListarLivroComponent implements OnInit {

  displayedColumns: string[] = ['isbn', 'nome_livro', 'data_lancamento', 'acoes'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  constructor() { 
  
  }

  ngOnInit(): void {
  }


  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
