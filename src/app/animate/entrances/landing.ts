import { animate, state, style, transition } from '@angular/animations';

export const landing = [

    state('idle-landing', style({ opacity: 0 })),
    transition('* => landing', [
        style({
            transform: 'scale(1.2)',
            opacity: 0
        }),
        animate('{{timing}} {{delay}} ease', style('*'))
    ], { params: { timing: '2s', delay: '' } })
];
