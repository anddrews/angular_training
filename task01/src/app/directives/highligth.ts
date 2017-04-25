import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({ selector: '[focus-highlight]' })
export class HighlightDirective {
    constructor (private el: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('grey');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}