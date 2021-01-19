import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreRoutingModule } from './core/core-routing.module';
import { HomeComponent } from './home/home/home.component';
import { UserRoutingModule } from './user/admin-dashboard/user-routing.module';
import { ProductRoutingModule } from './product/product-routing.module';



const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),UserRoutingModule,CoreRoutingModule,ProductRoutingModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
