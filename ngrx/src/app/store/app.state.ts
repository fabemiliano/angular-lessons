import {createReducer, createAction, on, props} from '@ngrx/store'

export interface AppState {
  counter: number
}

export const appInitialState: AppState = {
  counter: 4
}

export const increment = createAction('[App] Aumenta Contador', props<{abc: number}>())
export const decrement = createAction('[App] Diminui Contador', props<{payload: number}>())

export const appReducer = createReducer(
  appInitialState,
  on(increment, (state, {abc: teste}) => {
    return {...state, counter: state.counter + teste}
  }),
  on(decrement, (state, {payload}) => {
    return {...state, counter: state.counter - payload}
  })
)


