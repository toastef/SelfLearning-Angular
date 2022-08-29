import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; // fourni les elements essentiel au projet

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PokemonModule} from "./pokemon/pokemon.module";

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        PokemonModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
