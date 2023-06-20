import { Action, createReducer, on } from "@ngrx/store";
import { User } from "src/app/model/user.model";
import * as AuthActions from './auth.actions';


export interface State {
    user: User | null;
    authError: string | null;
    loading: boolean;
}


const initialState: State = {
    user: null,
    authError: null,
    loading: false
};

const _authReducer = createReducer(
    initialState,
    on(AuthActions.loginStart, AuthActions.signupStart, state => ({ ...state, authError: null, loading: true })),
);

export function authReducer(state: State = initialState, action:Action) {
    return _authReducer(state, action);
  }