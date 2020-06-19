import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[filterHost]',
})
export class FilterHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
