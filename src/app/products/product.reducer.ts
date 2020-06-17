import {Product} from './product.model';
import {Action} from '@ngrx/store';

const initialState = {
  products: []
};

export function productReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: [...state.products, action]
      };
  }
}
