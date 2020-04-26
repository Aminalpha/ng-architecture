import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

// tslint:disable-next-line:variable-name
const _counterReducer = createReducer(
    initialState,
    on(increment, state => state + 1),
    // tslint:disable-next-line:triple-equals
    on(decrement, state => state != 0 ? state - 1 : state),
    on(reset, state => 0)
);
export function counterReducer(state, action) {
    return _counterReducer(state, action);
}
