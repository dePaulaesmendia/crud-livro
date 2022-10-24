import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
import { Livro } from 'src/app/shared/interfaces/livro.model';
import { LivrosService} from 'src/app/shared/servicos/livros.service';


@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.scss']
})
export class ListarLivroComponent implements OnInit {

  displayedColumns: string[] = ['isbn', 'nome_livro', 'data_lancamento', 'acoes'];
  dataSource: Livro[] = [];

  @ViewChild(MatTable) table!: MatTable<Livro>;

  constructor(private livroService: LivrosService) { 
  
  }

  ngOnInit(): void {
    this.livroService.getLivros().subscribe( livros => {
      this.dataSource = livros
    });
  } 



  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.dataSource.length);
    this.dataSource.push(this.dataSource[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
