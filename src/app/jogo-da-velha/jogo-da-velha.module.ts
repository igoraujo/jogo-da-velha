import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	JogoDaVelhaComponent
  ],
  exports: [
  	JogoDaVelhaComponent
    //neste caso não irá se trabalhar com rotas e será renderizado diretamente a tag do component do modulo appComponent
    //é nescessário para que o módulo veja esta tag
  ],
  providers: [
  	JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
