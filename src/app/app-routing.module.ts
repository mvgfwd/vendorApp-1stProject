import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { UsersComponent } from './pages/users/users.component';
import { VendorFormComponent } from './pages/vendors/vendor-form/vendor-form.component';
import { VendorDetailComponent } from './pages/vendors/vendor-detail/vendor-detail.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch:'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'vendors', children:[
        {path:'add', component:VendorFormComponent, title: 'Add Vendor'},
        {path:'', component: VendorsComponent, children:[
            {path:':id', component: VendorDetailComponent},
            ] 
        },
    ]},
    {path: 'users', component: UsersComponent},
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModules{}