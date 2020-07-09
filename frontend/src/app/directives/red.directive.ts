import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor( private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
  }

}
//Essa é a diretiva de atributo. Essa diretiva é capaz de trabalhar com estilo e comportamentos.
// Essa que criamos serve pra mudar o estilo, alterando a cor

/**
 * Como ela foi gerada
 * no terminal:
 * $ ng g d directives/red
 */