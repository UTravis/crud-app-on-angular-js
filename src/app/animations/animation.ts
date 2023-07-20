import { animate, state, style, transition, trigger } from '@angular/animations';

export const fade = trigger('fade', [

  state('void', style({
    opacity: 0,
  })),

  // void = void state, * => default state (transition from void state to default state)
  transition('void => *', [
    animate('2s')
  ]),

  // (transition from default state to void state)
  transition('* => void', [
    animate('2s')
  ])

  // TRANSITION ALTERNATIVES FOR EQUAL ANIMATION DURATION
  /* transition('void => *, * => void', [
    animate('2s')
  ]),

  transition('void <=> *', [
    animate('2s')
  ])

  Using aliases
  transition(':enter, :leave', [
    animate('2s')
  ])*/

])
