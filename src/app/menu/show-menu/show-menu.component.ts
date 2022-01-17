import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,FormControl, NgForm, Validators} from '@angular/forms';
import { Guid } from 'guid-typescript';
import { catchError } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css']
})
export class ShowMenuComponent implements OnInit {
  ID !: Guid;
  validateForm!: FormGroup;

  constructor(private service:SharedService,
    private message:NzMessageService,
    private router:Router,
    private builder:FormBuilder,
    private app:AppComponent
    ) { }

  MenuList:any=[];
  categoryList:any=[];
  menu:any=[];
  ModalTitle:string="";
  ActivateAddEditMenuComp:boolean=false;
  isVisible:boolean = false;
  isOkLoading = false;
  active = false;
  
  


  ngOnInit(): void {
    this.refreshList();
    this.validateForm = this.builder.group({
      Food_name:[null,[Validators.required]],
      Price:[null,[Validators.required]],
      Category_name:[null,[Validators.required]],
      id:[null]
    });
    this.catList();
    
    
  }

  showModal(): void {
    this.isVisible = true;
    this.ActivateAddEditMenuComp = true;
  }

  catList(){
    this.service.getCategoryList().subscribe(data=>{
      this.categoryList=data;
    })
  }

  showList(){
    this.MenuList = this.app.MenuList;
  }

  refreshList(){
    this.service.getMenuList().subscribe(data=>{
      this.MenuList=data;
    })
  }

  addClick(){
    
    this.validateForm.get('id')?.setValue(this.ID);
    this.validateForm.get('Food_name')?.setValue('');
    this.validateForm.get('Price')?.setValue('');
    this.menu={Sid:0};
    this.ModalTitle = "Add Menu Item";
    this.isVisible = true;
    this.ActivateAddEditMenuComp = true;
  }

  closeClick(){
    this.refreshList();
    this.isVisible = false;
    this.ActivateAddEditMenuComp=false;
  }


  editClick(menu:any ){
    this.menu={Sid:1};
    this.validateForm.get('id')?.setValue(menu.id);
    this.validateForm.get('Food_name')?.setValue(menu.food_name);
    this.validateForm.get('Price')?.setValue(menu.price);
    this.validateForm.get('Category_name')?.setValue(menu.category_name)
    this.ModalTitle = "Edit Menu Item";
    this.ActivateAddEditMenuComp = true;
  }

  deleteClick(item: { id: any; }){

    this.service.deleteMenu(item.id).subscribe(data=>{
      this.message.error('Item Deleted');
      
    })
    
    this.refreshList();
  }

  // ---------FORM--------

  sumbitForm():void{
    if (this.validateForm.valid){
      console.log('sumbit',this.validateForm.value);
    }
    else{
      Object.values(this.validateForm.controls).forEach(control=>{
        if (control.invalid){
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf:true });
        }
      })
    }
  }

  addMenuItem(){
   
    if (this.validateForm.valid){
      this.service.addMenu(this.validateForm.value).subscribe(res=>{
        
        if (res.toString()=="false"){
          this.message.error("Item is already in Menu");
        }
        else{
          this.message.success("Item has been added to the menu");
          console.log(this.validateForm);
          this.refreshList();
          this.closeClick();
        }
        
      })
      
    } 
    else{
      Object.values(this.validateForm.controls).forEach(control=>{
        if (control.invalid){
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf:true });
        }
      })
    }
  }
  editMenuItem(){
    
    if (this.validateForm.valid){
      this.service.updateMenu(this.validateForm.value).subscribe(res=>{
        this.message.success('Item has been edited');
      this.refreshList();

      })
      ;
      this.closeClick();
      
    } 
    else{
      Object.values(this.validateForm.controls).forEach(control=>{
        if (control.invalid){
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf:true });
        }
      })
    }
  }
  
}


