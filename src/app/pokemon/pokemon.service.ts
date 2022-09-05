import {Injectable} from '@angular/core';
import {Pokemon} from "./pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";


@Injectable()
export class PokemonService {
    /** importation, injection du client http */
    constructor(private http: HttpClient) {
    }

    getPokemonList(): Observable<Pokemon[]> { /** On retourne un flux (observable) qui va contenir les pokemons */

        /** requete d'une contante interieur au dossier */

        /** return POKEMONS; */

        /** requete vers serveur , requete asyncrone*/

        return this.http.get<Pokemon[]>('api/pokemons').pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, []))
        );

    }

    getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
        return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, undefined))
        );
    }

    searchPokemonList(term: string): Observable<Pokemon[]> {
        if(term.length <= 1 ) {   // rien afficher si l'utilisateur a tapé moins de 2 lettres
            return of([]);
        }
        return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, []))
        );
    }

    /** Modification pokemon requete http*/
    updatePokemon(pokemon: Pokemon): Observable<null> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
            tap((response) => console.log(response)),
            catchError((error) => this.handleError(error, null))
        );
    }

    addPokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
            tap((response) => console.log(response)),
            catchError((error) => this.handleError(error, null))
        );
    }

    deletePokemonById(pokemonId: number): Observable<null> {
        return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
            tap((response) => console.log(response)),
            catchError((error) => this.handleError(error, null))
        );
    }

    private log(response: any) {
        console.table(response);
    }

    private handleError(error: Error, erroValue: any) {
        console.error(error);
        return of(erroValue);
    }

    getPokemonTypeList(): string[] {
        return [
            'Plante',
            'Feu',
            'Eau',
            'Insecte',
            'Normal',
            'Electrik',
            'Poison',
            'Fée',
            'Vol',
            'Combat',
            'Psy'
        ];
    }
}
