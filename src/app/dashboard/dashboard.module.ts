import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FinanceComponent } from './finance/finance.component';
import { MobileAppFinanceComponent } from './finance/mobile-app-finance/mobile-app-finance.component';
import { AppFinanceMpesaComponent } from './finance/app-finance-mpesa/app-finance-mpesa.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { HostelsComponent } from './hostels/hostels.component';
import { AppVirtualAssistantComponent } from './app-virtual-assistant/app-virtual-assistant.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BookNowDashboardComponent } from './hostels/book-now-dashboard/book-now-dashboard.component';
import { HistoryBookHostelsComponent } from './hostels/history-book-hostels/history-book-hostels.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FinanceComponent,
    MobileAppFinanceComponent,
    AppFinanceMpesaComponent,
    HostelsComponent,
    AppVirtualAssistantComponent,
    BookNowDashboardComponent,
    HistoryBookHostelsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    CdkAccordionModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class DashboardModule {}
