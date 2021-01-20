import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { AdminDashboardComponent } from './admin-dashboard.component';



const routes: Routes = [
    {path:'admindash',component:AdminDashboardComponent},
    {path:'addproduct',component:AddProductComponent}

    
    
   
    
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule{}