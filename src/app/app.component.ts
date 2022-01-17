import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';
import { Category } from 'src/Model/category.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'restaurant';
  constructor(private service:SharedService,
    private router:Router,){}
  IngredientList:any=[];
  CategoryList:Category[]=[];
  MenuList:any=[];
  isCollapsed = true;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit():void{
    this.datalist();
    this.router.navigate([''])

  }
  
  datalist(){
    this.service.getIngList().subscribe(
      data=>{
        this.IngredientList=data;
        console.log(this.IngredientList);   
      }
    )
    
    this.service.getMenuList().subscribe(
      data=>{
        this.MenuList=data;
        console.log(this.MenuList);
      }
    )
    
    this.service.getCategoryList().subscribe(
      data=>{
        
        this.CategoryList=data;
        console.log(this.CategoryList);
    })

  }
}
