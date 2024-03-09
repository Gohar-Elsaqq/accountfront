import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAparmentComponent } from './Aparment/add-aparment/add-aparment.component';

const routes: Routes = [ { path: 'AddAparment', component: AddAparmentComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
