import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from '../app/content/content.component'
import { SecondContentComponent } from '../app/second-content/second-content.component'

const routes: Routes = [
  { path: 'first-component', component: ContentComponent },
  { path: 'second-component', component: SecondContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
