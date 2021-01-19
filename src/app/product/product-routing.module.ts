import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomotiveComponent } from './automotive/automotive.component';
import { BabycareComponent } from './babycare/babycare.component';
import { BagsComponent } from './bags/bags.component';
import { OrderComponent } from './order/order.component';
import { ProductPageComponent } from './product-page/product-page.component';



const routes: Routes = [
    {path:'products',component:ProductPageComponent},
    {path:'products/category/automotive',component:AutomotiveComponent},
    {path:'products/category/babycare',component:BabycareComponent},
    {path:'products/category/bags',component:BagsComponent},
    {path :'order',component:OrderComponent}

   

    
    
   
    
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class ProductRoutingModule{}