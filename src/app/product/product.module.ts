import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Import Routes */
import { ProductRoutes } from './product.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(ProductRoutes),
  ],
  declarations: [
    /* Components here */
  ],
  providers: [
    /* Services here */
  ]
})
export class ProducutModule { }
