import {Action, createAction, props} from '@ngrx/store'

enum ActionTypes {
  Increment = "Increment",
  Decrement = "Decrement",
}

export class Increment implements Action {
  readonly type = ActionTypes.Increment
}
export class Decrement implements Action {
  readonly type = ActionTypes.Decrement
}

export const increment = createAction(ActionTypes.Increment, props<{payload: number}>())

const INITIAL_STATE = {
  counter: 5
}

export const secondReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionTypes.Increment: return {...state, counter: state.counter + action.payload}
    case ActionTypes.Decrement: return {...state, counter: state.counter - 1}
    default: return state
  }
}
