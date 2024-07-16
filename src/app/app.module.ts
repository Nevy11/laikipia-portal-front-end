import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppDashComponent } from './app-dash/app-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AppTimetableComponent } from './app-timetable/app-timetable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppRepositoryComponent } from './app-repository/app-repository.component';
import { MatTreeModule } from '@angular/material/tree';
import { AppDragNdropComponent } from './app-drag-ndrop/app-drag-ndrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HostelsComponent } from './app-dash/hostels/hostels.component';
import { FinanceComponent } from './app-dash/finance/finance.component';
import { AppVirtualAssistantComponent } from './app-dash/app-virtual-assistant/app-virtual-assistant.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppFinanceMpesaComponent } from './app-dash/finance/app-finance-mpesa/app-finance-mpesa.component';
import { provideHttpClient } from '@angular/common/http';
import { MobileAppFinanceComponent } from './app-dash/finance/mobile-app-finance/mobile-app-finance.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppDashComponent,
    AppTimetableComponent,
    AppRepositoryComponent,
    AppDragNdropComponent,
    HostelsComponent,
    FinanceComponent,
    AppVirtualAssistantComponent,
    AppFinanceMpesaComponent,
    MobileAppFinanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    DragDropModule,
    MatProgressBarModule,
    MatDialogModule,
    MatExpansionModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
