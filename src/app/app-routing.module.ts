import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './table/table.component';
// import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry/entry.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'/table',pathMatch:'full' },
  { path:'table', component : TableComponent},
  { path: 'entry', component: EntryComponent}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
