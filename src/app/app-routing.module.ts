import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonkeyComponent } from './components/monkey/monkey.component';

const routes: Routes = [
  { path: '', component: MonkeyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
