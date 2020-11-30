import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../dto/payment.dto';



import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) { }

  createAndStorePayment(payment: Payment) :Observable<any>  {
    return this.http
      .post<any>(
        'https://angular-http-request-ff3bd.firebaseio.com/payments.json',
        payment
      );
  }
}
