import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
    {path: '', component: DashboardComponent,pathMatch:'full'},
    {path: 'vendors', component: VendorsComponent,pathMatch:'full'},
    {path: 'users', component: UsersComponent,pathMatch:'full'},
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModules{}