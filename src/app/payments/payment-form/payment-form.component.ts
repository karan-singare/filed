import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Payment } from 'src/app/dto/payment.dto';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  paymentForm: FormGroup;
  submitted: boolean = false;

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
    let payment: Payment = this.paymentForm.value;
    console.log(payment);
    if (this.paymentForm.valid) {
      // let card: CreditCard = this.paymentForm.value;
      // this.paymentService.createAndStorePayment(payment);

      // this.store.dispatch(new AddCreditCard(card));
      //
      // this.store.select('creditCards').subscribe((responses) => {
      //   console.log(responses);
      // });

    }
  }


}