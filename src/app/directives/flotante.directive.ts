import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appFlotante]',
})
export class FlotanteDirective {
  // @ViewChild('botonera', { read: TemplateRef })
  // botonera: TemplateRef<any>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    console.log('hello');
    //console.log(this.botonera);
  }
}
