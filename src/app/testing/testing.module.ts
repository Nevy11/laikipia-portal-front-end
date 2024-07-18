import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestingService } from './testing.service';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TestingNavigationComponent } from './testing-navigation/testing-navigation.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({ declarations: [TestingComponent, TestingNavigationComponent],
    exports: [TestingComponent], imports: [CommonModule,
        TestingRoutingModule,
        RouterLink,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatExpansionModule,
        CdkAccordionModule,
        MatGridListModule], providers: [TestingService, provideHttpClient(withInterceptorsFromDi())] })
export class TestingModule {}
