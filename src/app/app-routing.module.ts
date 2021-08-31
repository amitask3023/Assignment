import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableSortComponent } from './table-sort/table-sort.component';

const routes: Routes = [
  { path: 'login', component: HomeComponent },
      { path: 'sortTable', component: TableSortComponent  },
      { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
