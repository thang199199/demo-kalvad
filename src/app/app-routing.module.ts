import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FavoriteBookComponent} from "./favorite-book/favorite-book.component";

const routes: Routes = [
  {path: '', redirectTo: '/favorite-Book', pathMatch: 'full'},
  {path: 'favorite-Book', component: FavoriteBookComponent},
  {path: '**', component: FavoriteBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
