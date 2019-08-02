import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  { path: "", redirectTo: "/pokemons", pathMatch: "full" },
  { path: 'pokemons', component: PokemonComponent },
  { path: 'pokemons/:name', component: PokemonDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
