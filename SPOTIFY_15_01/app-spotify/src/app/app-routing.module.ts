iimport { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracciaComponent } from './traccia/traccia.component';
import { AlbumComponent } from './album/album.component';
import { AutoreComponent } from './autore/autore.component';

const routes: Routes = [
  { path: '', redirectTo: '/track', pathMatch: 'full' },
  { path: 'track', component:TracciaComponent },
  { path: 'album', component:AlbumComponent },
  { path: 'author', component:AutoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
