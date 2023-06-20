import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { PokedexModule } from '../features/pokedex/pokedex.module';
 


@NgModule({
  declarations: [
    CustomInputComponent, 
    
  ],
  imports: [
    CommonModule,
    PokedexModule,
  ],
  exports: [CustomInputComponent]
})
export class SharedModule { }
