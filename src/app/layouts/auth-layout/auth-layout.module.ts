import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthLayoutRoutes} from './auth-layout.routing';
import {LoginComponent} from '../../pages/login/login.component';
import {RegisterComponent} from '../../pages/register/register.component';
import {MicrositeComponent} from '../../pages/microsite/microsite.component';
import {CheckoutComponent} from '../../pages/checkout/checkout.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {LinkComponent} from '../../pages/link/link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    MicrositeComponent,
    CheckoutComponent,
    LinkComponent
  ]
})
export class AuthLayoutModule {
}
