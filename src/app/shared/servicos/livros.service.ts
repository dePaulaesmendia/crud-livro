import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Livro, LivroTable } from '../interfaces/livro.model';
import { LIVROS_DATA } from '../mock/livros.mock';





@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor() { }

  getLivros(): Observable<LivroTable[]> {
    return of(LIVROS_DATA).pipe(
      map(livros => {
        return livros.map( livro => {
          return {...livro, acoes:''}
        })
      })
    ) ;
  }

  addLivro(livro: Livro) {
    LIVROS_DATA.push(livro);
  }
}
