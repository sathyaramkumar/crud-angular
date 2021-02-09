import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { CreateDetailsComponent } from './create-details/create-details.component';
import { DetailsComponent } from './details/details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';


@NgModule({
  declarations: [CreateDetailsComponent, 
                 DetailsComponent, 
                 ViewDetailsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
