import { faixa_etaria } from './faixa.enum';
import { Rankeada } from './rankeada.enum';

export class livro{

    id_livro: number;
    titulo: string;
    foto_livro: string;
    descricao: string;
    autor: string;
    data_lancamento: Date;
    faixa_etaria: faixa_etaria;
    editor: string
    genero: Rankeada;

    //

}