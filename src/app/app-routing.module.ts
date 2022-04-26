import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SchoolListComponent } from './school-list/school-list.component';

const routes: Routes = [
  {path:'school',component:SchoolListComponent},
  {path:'ProductList/:id',component:ProductListComponent},
  {path:'Product/:id',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
