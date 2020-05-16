import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './shared/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { CreateLeadComponent } from './pages/create-lead/create-lead.component';
import { CreateCustumerComponent } from './pages/create-lead/create-custumer/create-custumer.component';
import { AddProductComponent } from './pages/create-lead/add-product/add-product.component';
import { AddContactComponent } from './pages/create-lead/add-contact/add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MenuComponent,
    DashboardComponent,
    PageTitleComponent,
    CreateLeadComponent,
    CreateCustumerComponent,
    AddProductComponent,
    AddContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
