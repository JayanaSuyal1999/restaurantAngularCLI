import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { AddEditIngComponent } from './ingredients/add-edit-ing/add-edit-ing.component';
import { MenuComponent } from './menu/menu.component';
import { AddEditMenuComponent } from './menu/add-edit-menu/add-edit-menu.component'; 
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {path:'Ingredients',component:IngredientsComponent},
  {path:'Addedit',component:AddEditIngComponent},
  {path:'Menus',component:MenuComponent},
  {path:'AddMenu',component:AddEditMenuComponent},
  {path:'Category',component:CategoryComponent},
  {path:'',component:IngredientsComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

