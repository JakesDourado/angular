import { Directive, Input, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]


  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number })
    }
    console.log(this.numbers)
  }

}

//Essa é a diretiva de estrutural.
// Será criado dentro do footer como exemplo, mas depois será tirado.




/**
 *
 * Pelo terminal:
 * $ng g d directives/for
 *
 * Depois de instaldo, deve faze na linha 4
 * Pra iniciar, em " selector: '[appFor]' ", será alterado para " selector: '[myFor]' "
 */