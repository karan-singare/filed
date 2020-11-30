import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from '../../dto/payment.dto';

import * as fromApp from '../../store/app.reducer';
import * as PaymentActions from './store/payment.actions';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  paymentForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private store: Store<fromApp.AppState>,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.paymentForm = new FormGroup({
      'creditCardNumber': new FormControl(null, [Validators.required]),
      'cardHolder': new FormControl(null, [Validators.required]),
      'expirationDate': new FormControl(null, [Validators.required, this.validateExpirationDate]),
      'securityCode': new FormControl(null, [this.validateSecurityCode]),
      'amount': new FormControl(null, [Validators.required, this.validateAmount])
    });
  }

  validateExpirationDate(control: FormControl): { [str: string]: boolean } {
    const currentDate = new Date();
    const expirationDate = new Date(control.value);

    if (expirationDate < currentDate) {
      return { 'invalidExpirationDate': true };
    }

    return null;
  }

  validateSecurityCode(control: FormControl): { [str: string]: boolean } {
    if (control.value !== null) {
      if (control.value.trim().length !== 3) {
        return { 'invalidSecurityCode': true };
      }
    }

    return null;
  }

  validateAmount(control: FormControl): { [str: string]: boolean } {
    if (control.value <= 0) {
      return { 'invalidAmount': true };
    }

    return null;
  }

  isInvalid(key: string): boolean {
    if (key === undefined) {
      return this.paymentForm.invalid && this.paymentForm.touched;
    }
    return this.paymentForm.get(key).invalid && this.paymentForm.get(key).touched;
  }

  isRequired(key: string): boolean {
    if (this.paymentForm.get(key).errors) {
      return this.paymentForm.get(key).errors['required'] && this.paymentForm.get(key).touched;
    }
  }

  isInvalidFromSubmitted(): boolean {
    return this.paymentForm.invalid && this.submitted;
  }

  onSubmit() {
    this.submitted = true;
    if (this.paymentForm.valid) {
      let payment: Payment = this.paymentForm.value;
      this.paymentService.createAndStorePayment(payment);
    }
  }


}
