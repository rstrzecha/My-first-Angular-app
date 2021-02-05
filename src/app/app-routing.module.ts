import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TeammatesComponent } from './components/teammates/teammates.component';
import { TodoListComponent } from './modules/todo/components/todo-list/todo-list.component';

const routes: Routes = [
  //definicja routa do pustej ścieżki
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'teammates', component: TeammatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
