import {Prodotto} from './Prodotto';

export interface Categoria {
  id: number;
  nome: string;
  prodotti: Prodotto[];
}
