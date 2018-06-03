import { createFeatureSelector } from '@ngrx/store';
import * as auth from './reducers/auth.reducers';
import { User } from '../models/user';
import { Product } from '../models/product';

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
  // products
  products: Array<Product>;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null,
  products: [],
};

export interface AppState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');