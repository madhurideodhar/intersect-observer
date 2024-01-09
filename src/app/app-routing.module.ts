import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleMatTableComponent } from './simple-mat-table/simple-mat-table.component';


const routes: Routes = [
  
  { path: 'mat-table-component', component: SimpleMatTableComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
