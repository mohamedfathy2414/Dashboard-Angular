import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ProductCard]',
  standalone: true,
})
export class ProductCardDirective {
  @Input() defaultColor: string = 'black';
  constructor(public eleRef: ElementRef) {
    this.eleRef.nativeElement.style.borderRadius = '5%';
    this.eleRef.nativeElement.style.border = `3px solid red`;
    this.eleRef.nativeElement.style.boxShadow = '10px 10px 10px gray';
  }

  @HostListener('mouseover') hovIN() {
    this.eleRef.nativeElement.style.borderRadius = '5%';
    this.eleRef.nativeElement.style.border = '3px solid blue';
    this.eleRef.nativeElement.style.boxShadow = ` 30px 30px 30px gray`;
    this.eleRef.nativeElement.style.backgroundColor = ` ${this.defaultColor}`;
  }

  @HostListener('mouseout') hovOut() {
    this.eleRef.nativeElement.style.borderRadius = '5%';
    this.eleRef.nativeElement.style.border = '3px solid red';
    this.eleRef.nativeElement.style.boxShadow = '10px 10px 10px gray';
    this.eleRef.nativeElement.style.backgroundColor = `white`;
  }
}
