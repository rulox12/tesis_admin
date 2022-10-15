import {Routes} from '@angular/router';

import {LoginComponent} from '../../pages/login/login.component';
import {RegisterComponent} from '../../pages/register/register.component';
import {MicrositeComponent} from '../../pages/microsite/microsite.component';
import {CheckoutComponent} from '../../pages/checkout/checkout.component';
import {LinkComponent} from '../../pages/link/link.component';

export const AuthLayoutRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'microsite', component: MicrositeComponent},
  {path: 'link', component: LinkComponent},
  {path: 'checkout', component: CheckoutComponent},
];
