import {Routes} from '@angular/router';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {CommerceComponent} from '../../pages/commerce/commerce.component';
import {BillComponent} from '../../pages/bill/bill.component';
import {UserComponent} from '../../pages/user/user.component';
import {PaymentComponent} from '../../pages/payment/payment.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'user', component: UserComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'commerce', component: CommerceComponent},
  {path: 'bill', component: BillComponent},
  {path: 'payment', component: PaymentComponent},
];
