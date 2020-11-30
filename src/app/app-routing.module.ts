import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: '', component: PaymentComponent},
  {path: 'pay', component: PaymentFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
