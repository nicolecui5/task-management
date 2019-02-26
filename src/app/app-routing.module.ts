import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry/entry.component'

const appRoutes: Routes = [
  { path: 'entry', component: EntryComponent}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
