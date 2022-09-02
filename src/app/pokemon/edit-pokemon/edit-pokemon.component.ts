import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-pokemon',
  template: `
   <h2 class="center"> Editer {{ pokemon?.name}}</h2>
   <p *ngIf="pokemon" class="center">
     <img [src]="pokemon.picture" alt="picture pokemon">
   </p>
   <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form> <!-- utilisation du form créé dans pokemon form -->
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;

  constructor(
      private route: ActivatedRoute,
      private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId){
       this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    } else{
      this.pokemon = undefined;
    }
  }

}
