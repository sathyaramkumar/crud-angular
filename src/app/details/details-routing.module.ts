import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDetailsComponent } from './create-details/create-details.component';
import { DetailsComponent } from './details/details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path: '', component: DetailsComponent },
  { path: 'creat-details', component: CreateDetailsComponent},
  { path: 'view/:id', component: ViewDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
