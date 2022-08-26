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

  constructor() { }

  ngOnInit(): void {
    this.categorie = categorie;
    this.prodotti = prodotti;
    this.prodottiMostrati = prodotti;
  }

  filterProdotti(categoriaId: number): any {
    if(!categoriaId) {
      this.prodottiMostrati = this.prodotti;
    } else {
      this.prodottiMostrati = this.prodotti.filter(p => p.categoriaId === categoriaId);
    }
  }

}
