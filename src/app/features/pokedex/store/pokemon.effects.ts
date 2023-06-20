import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';


@Injectable({providedIn:'root'})

export class PokemonEffects {


    loadPokemon$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(action),
                /** An EMPTY observable only emits completion. Replace with your own observable stream */
                operator(() => EMPTY));
    });
}