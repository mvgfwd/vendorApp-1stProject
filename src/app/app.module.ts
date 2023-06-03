import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {allIcons, HeroIconModule} from 'ng-heroicon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { SidebarComponent } from '../ui/sidebar/sidebar.component';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { MainComponent } from 'src/ui/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModules } from './app-routing.module';
import { InputComponent } from './shared/reusable-ui-2/input/input.component';
import { ButtonComponent } from './shared/reusable-ui-2/button/button.component';
import { ModalComponent } from './shared/reusable-ui-2/modal/modal.component';
import { VendorFormComponent } from './pages/vendors/vendor-form/vendor-form.component';
import { VendorsService } from './pages/vendors/vendors.service';
import { VendorDetailComponent } from './pages/vendors/vendor-detail/vendor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    MainComponent,
    UsersComponent,
    VendorsComponent,
    DashboardComponent,
    InputComponent,
    ButtonComponent,
    ModalComponent,
    VendorFormComponent,
    VendorDetailComponent
  ],
  imports: [
    BrowserModule,
    HeroIconModule.forRoot(
      {...allIcons},
      {
        defaultHostDisplay: 'inlineBlock',
        attachDefaultDimensionsIfNoneFound: true
      }
    ),
    AppRoutingModules,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [VendorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
