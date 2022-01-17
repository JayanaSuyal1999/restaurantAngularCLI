import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { AddEditIngComponent } from './ingredients/add-edit-ing/add-edit-ing.component';
import { ShowIngComponent } from './ingredients/show-ing/show-ing.component';
import { MenuComponent } from './menu/menu.component';
import { ShowMenuComponent } from './menu/show-menu/show-menu.component';
import { AddEditMenuComponent } from './menu/add-edit-menu/add-edit-menu.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { ShowCategoryComponent } from './category/show-category/show-category.component';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';



import {NZ_ICONS} from 'ng-zorro-antd/icon';

import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const antDesignIcons = AllIcons as {
  [key : string]: IconDefinition;
};
const icons: IconDefinition[] =  Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    AddEditIngComponent,
    ShowIngComponent,
    MenuComponent,
    ShowMenuComponent,
    AddEditMenuComponent,
    CategoryComponent,
    ShowCategoryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    DemoNgZorroAntdModule


  ],
  providers: [SharedService,
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
