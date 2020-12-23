import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './views/error/error.component';
import { PreComponent } from './views/pre/pre.component';


const routes: Routes = [
  { path: '', component: PreComponent },
  { path: 'main', loadChildren: () => import('./views/main/main.module').then(m => m.MainModule) },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
