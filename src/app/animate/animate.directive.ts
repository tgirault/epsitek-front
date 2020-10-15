import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { Directive, ElementRef, forwardRef, Input, NgZone } from '@angular/core';
import { AnimateService } from './animate.service';

@Directive({
    selector: '[appAnimateView]',
    providers: [
        // Provides the AnimateDirective as the service, so, for the child component to trigger within a modified viewport
        { provide: AnimateService, useExisting: forwardRef(() => AnimateDirective) },
    ]
})
export class AnimateDirective extends AnimateService {

    /** When true instructs the directive to use the element's bounding rect as the animation view */
    @Input() set useElement(value: boolean) { this.element = coerceBooleanProperty(value); }
    private element = false;

    /** Optional top offset */
    @Input() top: number;

    /** Optional left offset */
    @Input() left: number;

    /** Optional bottom offset */
    @Input() bottom: number;

    /** Optional right offset */
    @Input() right: number;

    // Overrides the viewport with the element's client rect on request
    protected get viewRect(): ClientRect {
        // Selects between the viewport and the element
        const rt = this.element ? this.elref.nativeElement.getBoundingClientRect()
            : this.viewPort.getViewportRect();
        // Applies optional offsets
        const top = rt.top + coerceNumberProperty(this.top, 0);
        const left = rt.left + coerceNumberProperty(this.left, 0);
        const bottom = rt.bottom + coerceNumberProperty(this.bottom, 0);
        const right = rt.right + coerceNumberProperty(this.right, 0);
        // Returns the resulting rect
        return { top, left, bottom, right, height: bottom - top, width: right - left };
    }

    constructor(private elref: ElementRef<HTMLElement>, readonly viewPort: ViewportRuler, scroll: ScrollDispatcher, zone: NgZone) {
        super(scroll, viewPort, zone);
    }
}
