import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../dto/payment.dto';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as PaymentActions from '../payment/payment-form/store/payment.actions';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }

  createAndStorePayment(payment: Payment) {
    this.http
      .post<any>(
        'https://angular-http-request-ff3bd.firebaseio.com/payments.json',
        payment
      )
      .subscribe(
        responseData => {
          this.store.dispatch(new PaymentActions.AddPayment(payment));
        },
        error => {
          console.log(error);
        }
      );
  }
}
