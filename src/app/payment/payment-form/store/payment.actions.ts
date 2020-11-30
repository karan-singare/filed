import { Action } from '@ngrx/store';
import { Payment } from 'src/app/dto/payment.dto';

export const ADD_PAYMENT = 'ADD_PAYMENT';

export class AddPayment implements Action {
  readonly type = ADD_PAYMENT;

  constructor(public payload: Payment) {}
}

export type PaymentActions = AddPayment;
