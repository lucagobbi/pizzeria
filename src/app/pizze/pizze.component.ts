import { Component, OnInit } from '@angular/core';
import {Categoria} from '../models/Categoria';
import categorie from '../data/categorie.json';
import {Prodotto} from '../models/Prodotto';
import prodotti from '../data/prodotti.json';


@Component({
  selector: 'app-pizze',
  templateUrl: './pizze.component.html',
  styleUrls: ['./pizze.component.scss']
})
export class PizzeComponent implements OnInit {

  categorie: Categoria[];
  prodotti: Prodotto[];
  prodottiMostrati: Prodotto[];
  filteractive = false;

  constructor() { }

  ngOnInit(): void {
    this.categorie = categorie;
    this.prodotti = prodotti;
    this.prodottiMostrati = prodotti;
  }

  filterProdotti(categoriaId: number): any {
    if (this.filteractive) {
      this.prodottiMostrati = this.prodotti;
      this.filteractive = false;
    } else {
      this.prodottiMostrati = this.prodotti.filter(p => p.categoriaId === categoriaId);
      this.filteractive = true;
    }
  }

}
