import { trigger } from '@angular/animations';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { delay, filter, startWith, takeWhile } from 'rxjs/operators';
import { AnimateService } from './animate.service';
// Animations
import { beat, bounce, flip, headShake, heartBeat, jello, pulse, rubberBand, shake, swing, tada, wobble } from './attention-seekers';
import { bounceIn, bumpIn, fadeIn, flipIn, jackInTheBox, landing, rollIn, zoomIn } from './entrances';
import { bounceOut, fadeOut, hinge, rollOut, zoomOut } from './exits';

export type appAnimateSpeed = 'slower' | 'slow' | 'normal' | 'fast' | 'faster';
export type appAnimations =
    // Attention seekers
    'beat' | 'bounce' | 'flip' | 'headShake' | 'heartBeat' | 'jello' | 'pulse' | 'rubberBand' | 'shake' | 'swing' | 'tada' | 'wobble' |
    // Entrances
    'bumpIn' | 'bounceIn' | 'bounceInDown' | 'bounceInLeft' | 'bounceInUp' | 'bounceInRight' | 'fadeIn' | 'fadeInRight' | 'fadeInLeft' | 'fadeInUp' | 'fadeInDown' | 'flipInX' | 'flipInY' | 'jackInTheBox' | 'landing' | 'rollIn' | 'zoomIn' | 'zoomInDown' | 'zoomInLeft' | 'zoomInUp' | 'zoomInRight' |
    // Exits
    'bounceOut' | 'bounceOutDown' | 'bounceOutUp' | 'bounceOutRight' | 'bounceOutLeft' | 'fadeOut' | 'fadeOutRight' | 'fadeOutLeft' | 'fadeOutDown' | 'fadeOutUp' | 'hinge' | 'rollOut' | 'zoomOut' | 'zoomOutDown' | 'zoomOutRight' | 'zoomOutUp' | 'zoomOutLeft';

@Component({
    // tslint:disable-next-line:component-selector
    selector: '[appAnimate]',
    template: '<ng-content></ng-content>',
    animations: [trigger('animate', [
        // Attention seekers
        ...beat, ...bounce, ...flip, ...headShake, ...heartBeat, ...jello, ...pulse, ...rubberBand, ...shake, ...swing, ...tada, ...wobble,
        // Entrances
        ...bumpIn, ...bounceIn, ...fadeIn, ...flipIn, ...jackInTheBox, ...landing, ...rollIn, ...zoomIn,
        // Exits
        ...bounceOut, ...fadeOut, ...hinge, ...rollOut, ...zoomOut
    ])]
})
export class AnimateComponent implements OnInit, OnDestroy {

    private replay$ = new Subject<boolean>();
    private sub: Subscription;

    // Animating parameters
    private timing: string;
    private delay: string;

    // Animating properties
    public animating = false;
    public animated = false;

    /** Selects the animation to be played */
    // tslint:disable-next-line:no-input-rename
    @Input('appAnimate') animate: appAnimations;

    /** Speeds up or slows down the animation */
    @Input() set speed(speed: appAnimateSpeed) {
        // Turns the requested speed into a valid timing
        this.timing = {
            slower: '3s',
            slow: '2s',
            normal: '1s',
            fast: '500ms',
            faster: '300ms'
        }[speed || 'normal'];
    }

    /** Delays the animation */
    @Input('delay') set postpone(pDelay: string) {
        // Coerces the input into a number first
        const value = coerceNumberProperty(pDelay, 0);
        if (value) {
            // Turns a valid number into a ms delay
            this.delay = `${value}ms`;
        }
        else {
            // Test the string for a valid delay combination
            this.delay = /^\d+(?:ms|s)$/.test(pDelay) ? pDelay : '';
        }
    }

    /** Disables the animation */
    @Input('disabled') set disableAnimation(value: boolean) {
        this.disabled = coerceBooleanProperty(value);
    }
    @HostBinding('@.disabled')
    public disabled = false;

    /** Emits at the end of the animation */
    @Output() starts = new EventEmitter<void>();

    /** Emits at the end of the animation */
    @Output() done = new EventEmitter<void>();

    /** When true, keeps the animation idle until the next replay triggers */
    @Input('paused') set pauseAnimation(value: boolean) {
        this.paused = coerceBooleanProperty(value);
    }
    public paused = false;

    /**
     * When defined, triggers the animation on element scrolling in the viewport by the specified amount.
     * Amount defaults to 50% when not specified.
     */
    @Input('aos') set enableAOS(value: number) {
        this.threshold = coerceNumberProperty(value, 0.5);
    }
    private threshold = 0;

    /** When true, triggers the animation on element scrolling in the viewport */
    @Input('once') set aosOnce(value: boolean) {
        this.once = coerceBooleanProperty(value);
    }
    public once = false;

    /** Replays the animation */
    @Input() set replay(replay: any) {
        // Re-triggers the animation again on request (skipping the very fist value)
        if (!!this.trigger && coerceBooleanProperty(replay)) {

            this.trigger = this.idle;
            this.replay$.next(true);
        }
    }

    /**
     * Constructeur du composant.
     * @param elm un élément
     * @param scroll l'évènement du scroll
     */
    constructor(private elm: ElementRef, private scroll: AnimateService) { }

    @HostBinding('@animate') private trigger;

    /**
     * Au démarrage de l'animation.
     */
    @HostListener('@animate.start')
    private animationStart(): void {
        this.animating = true;
        this.animated = false;
        this.starts.emit();
    }

    /**
     * A la fin de l'animation.
     */
    @HostListener('@animate.done')
    private animationDone(): void {
        this.animating = false;
        this.animated = true;
        this.done.emit();
    }

    private get idle(): any {
        return { value: `idle-${this.animate}` };
    }

    /**
     * Lancer l'animation.
     */
    private get play(): any {
        const params = {};
        // Builds the params object, so, leaving to the default values when undefined
        // tslint:disable-next-line:no-string-literal
        if (!!this.timing) { params['timing'] = this.timing; }
        // tslint:disable-next-line:no-string-literal
        if (!!this.delay) { params['delay'] = this.delay; }

        return { value: this.animate, params };
    }

    /**
     * Initialisation du composant.
     */
    ngOnInit(): void {
        // Sets the idle state for the given animation
        this.trigger = this.idle;
        // Triggers the animation based on the input flags
        this.sub = this.replay$.pipe(
            // Waits the next round to re-trigger
            delay(0),
            // Triggers immediately when not paused
            startWith(!this.paused),
            // Builds the AOS observable from the common service
            this.scroll.trigger(this.elm, this.threshold),
            // Prevents false visibility blinks due to the animation transformations
            filter(t1 => !this.animating),
            // Stops after the first on trigger when 'once' is set
            takeWhile(t1 => !trigger || !this.once, true),

        ).subscribe(t1 => {
            // Triggers the animation to play or to idle
            this.trigger = t1 ? this.play : this.idle;
        });
    }

    /**
     * Destruction du composant.
     */
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
