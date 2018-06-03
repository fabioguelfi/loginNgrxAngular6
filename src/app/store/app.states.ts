import { User } from '../models/user';
import * as auth from './reducers/auth.reducers';

export interface AppState {
    authState: auth.State;
}

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
};

export interface State {
    // is a user authenticated?
    isAuthenticated: boolean;
    // if authenticated, there should be a user object
    user: User | null;
    // error message
    errorMessage: string | null;
}