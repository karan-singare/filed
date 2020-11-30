import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentFormComponent } from './payments/payment-form/payment-form.component';
import { PaymentListComponent } from './payments/payment-list/payment-list.component';

const routes: Routes = [
  {path: '', component: PaymentListComponent},
  {path: 'pay', component: PaymentFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
