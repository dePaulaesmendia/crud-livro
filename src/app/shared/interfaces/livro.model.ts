export interface Livro {
    isbn: number;
    nome_livro: string;
    data_lancamento: string;
  } 

export interface LivroTable {
    isbn: number;
    nome_livro: string;
    data_lancamento: string;
    acoes: string;
}