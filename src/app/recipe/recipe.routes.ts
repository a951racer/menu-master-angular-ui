import { Routes } from '@angular/router';
import { RecipeComponent } from './recipe.component';

export const RecipeRoutes: Routes = [{
  path: 'recipe',
  component: RecipeComponent,
  children: [
    {path: '', component: RecipeComponent},
  ],
}];
