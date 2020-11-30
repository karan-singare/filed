import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Payment } from '../dto/payment.dto';

import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-payments',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payment: Payment;
  isFetched: boolean = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {

    this.store.select('payment')
      .pipe(map(stateData => stateData.card))
      .subscribe(payment => {
        this.payment = payment;
        this.isFetched = true;
      });
  }

}
