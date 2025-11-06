import { Routes } from '@angular/router';
import { Home } from './home/home';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { Login } from './auth/login';
import { Favorites } from './favorites/favorites';
import { Admin } from './admin/admin';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'recipes', component: RecipeList },
  { path: 'recipes/:id', component: RecipeDetail },
  { path: 'login', component: Login },
  { path: 'favorites', component: Favorites },
  { path: 'admin', component: Admin }
];
