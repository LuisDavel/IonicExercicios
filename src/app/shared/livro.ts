import { Genero } from './genero.enum';

export class livro{

    codigo: number;
    titulo: string;
    foto_livro: string;
    descricao: string;
    autor: string;
    data_lancamento: Date | string;
    editor: string;
    genero: Genero;
    //

}