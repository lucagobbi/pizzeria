export interface Prodotto {
  id: number;
  nome: string;
  prezzo: number;
  senzaGlutine: boolean;
  senzaLattosio: boolean;
  descrizione: string;
  categoriaId: number;
}
