import { ActionReducerMap } from '@ngrx/store';
import * as fromPayment from '../payments/payment-form/store/payment.reducer';

export interface AppState {
  payment: fromPayment.State
}

export const appReducer: ActionReducerMap<AppState> = {
  payment: fromPayment.PaymentReducer
};
