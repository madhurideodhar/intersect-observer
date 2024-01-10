import { AfterViewInit, Directive, ElementRef, Host, HostListener, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appView]',
})
export class ViewDirective  implements AfterViewInit, OnDestroy {


  private _observer!: IntersectionObserver;

  @Input('viewport') rootElementName: HTMLElement;

  @Input('rowdata') rowdata: any;
  @Input('table') table: HTMLElement;

  constructor(@Host()private _elementRef: ElementRef) {
 //   console.log("the element for root"+ this.rootElementName)
    // console.log("the table"+ this.table)
    // console.log("this.table.getElementsByTagName('tbody')"+ this.table?.getElementsByTagName('tbody'))
    ;
  }

  @HostListener('mouseout', ['$event']) somethingelse(e) {
    this.setBackground('initial');
   // console.log('name' + this.rootElementName);
  }

  setBackground(color) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }

  ngAfterViewInit(): void {
    console.log("this.rootElementName"+ this.rootElementName.innerHTML);
    const options = { root:  this.rootElementName, rootMargin: "-40px 0px 0px 0px", threshold: 0.5 };
    this._observer = new IntersectionObserver(this._callback, options);
    this._observer.observe(this._elementRef.nativeElement);
  }

  ngOnDestroy() { this._observer.disconnect(); }

  private _callback = (entries: any[], observer: any) => {
    let entry = entries[0];
  //  console.log("entry.VisibiltyStatus"+ JSON.stringify(entry));
    console.log("rowdata"+ JSON.stringify(this.rowdata));
    console.log("is visible"+ entry.isIntersecting);
  };

}
