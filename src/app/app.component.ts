import {Component, OnInit} from '@angular/core'; // on importe l'interface Oninit , ensuite on lm'implémente au niveau du composant
import {POKEMONS} from "./pokemon/moke-pokemon-list";
import {Pokemon} from "./pokemon/pokemon";

@Component({
    selector: 'app-root', // va permettre de donner un nom au composant pour l'identifier par la suite (element html personnalisé
    templateUrl: 'app.component.html'
})
export class AppComponent {

}
