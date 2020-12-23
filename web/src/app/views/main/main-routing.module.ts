import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main.component';


const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'info', component: InfoComponent },
    { path: '', redirectTo: ''}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
