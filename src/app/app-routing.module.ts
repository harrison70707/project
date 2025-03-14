import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldMapComponent } from './world/world.component';

const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: 'map', component: WorldMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
