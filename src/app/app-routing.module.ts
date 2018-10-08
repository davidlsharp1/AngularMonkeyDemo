import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonkeyComponent } from './monkey/monkey.component';

const routes: Routes = [
  { path: 'monkeys', component: MonkeyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
