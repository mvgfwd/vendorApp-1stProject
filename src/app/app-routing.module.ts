import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { UsersComponent } from './pages/users/users.component';
import { VendorFormComponent } from './pages/vendors/vendor-form/vendor-form.component';
import { VendorDetailComponent } from './pages/vendors/vendor-detail/vendor-detail.component';
import { UserDetailComponent } from './pages/users/user-detail/user-detail.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch:'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'vendors', children:[
        {path:'add', component:VendorFormComponent, title: 'Add Vendor'},
        {path:'', component: VendorsComponent, children:[
            {path:':id', component: VendorDetailComponent},
            {path:':id/edit', component: VendorFormComponent},
            ] 
        },
    ]},
    {path: 'users', children:[
        {path:'add', component: UserFormComponent},
        {path:'', component: UsersComponent, children:[
            {path: ':idx', component: UserDetailComponent}
        ]},
    ]},
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModules{}