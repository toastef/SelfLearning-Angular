import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {POKEMONS} from "./pokemon/moke-pokemon-list";

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {  /** simulation d'une API rest pour le CRUD des 12 pokemons */
    const pokemons = POKEMONS;
        return { pokemons };
    }
}
