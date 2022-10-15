import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommerceComponent} from '../../pages/commerce/commerce.component';
import {BillComponent} from '../../pages/bill/bill.component';
import {UserComponent} from '../../pages/user/user.component';
import {QRCodeModule} from 'angularx-qrcode';
import {PaymentComponent} from '../../pages/payment/payment.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ClipboardModule,
        ReactiveFormsModule,
        QRCodeModule,
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    CommerceComponent,
    BillComponent,
    PaymentComponent
  ]
})

export class AdminLayoutModule {
}
