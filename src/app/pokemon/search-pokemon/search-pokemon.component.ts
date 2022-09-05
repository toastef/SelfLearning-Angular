import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
  // {représente un  flux de donnée dans le temps { ..."a" .. "ab"... "abz" ..} les points représentant le temps écoulé entre les frappes
  searchTerms = new Subject<string>();
  //{....pokemonList(a) .... pokemonList(ab).... }
  pokemons$: Observable<Pokemon[]> ;



  constructor(
      private router: Router,
      private pokemonService: PokemonService
      ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
        debounceTime(300),               // va permettre d'eliminer les recherches succintes de 300 ms entre elles
        distinctUntilChanged(),        // va attendre qu'il y ai un changement dans les termes de la recherche pour limiter les réquêtes envoyées au serveur
        switchMap((term) => this.pokemonService.searchPokemonList(term))
        // switchMap va permettre d'annuler la dern requ si elle est en cours et de ne prendre en compte que la dern requete tapée  et ca va renvoyer une pokemonList pour le terme demandé et non plus un observable(flux)
    );
  }

    search(term: string) {
      this.searchTerms.next(term);  // va pousser le terme de recherche tapé dans la bar de recherche comme le push mais avec le flux de donnée
    }

    goToDetail(pokemon: Pokemon) {
    const link= ['/pokemon', pokemon.id];
    this.router.navigate(link)
  }
}
