import { Payment } from 'src/app/dto/payment.dto';
import * as PaymentActions from './payment.actions';
export interface State {
  card: Payment;
}

const initialState: State = {
  card: null
};

export function PaymentReducer(
  state: State = initialState,
  action: PaymentActions.PaymentActions

) {
  switch (action.type) {
    case PaymentActions.ADD_PAYMENT:
      console.log(action.payload);
      const payment: Payment = {
        ...action.payload
      };
      return {
        ...state,
        card: {
          ...payment
        }
      };
    default:
      return state;
  }
}
