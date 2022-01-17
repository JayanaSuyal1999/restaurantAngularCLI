import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,FormControl, NgForm, Validators} from '@angular/forms';
import { Guid } from 'guid-typescript';
import { AppComponent } from 'src/app/app.component';
import { RightSquareFill } from '@ant-design/icons-angular/icons';
import { ThrowStmt } from '@angular/compiler';
import { Category } from 'src/Model/category.model';


@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  ID !:Guid;
  Form!:FormGroup;


  constructor(private service:SharedService,
    private message:NzMessageService,
    private fb:FormBuilder,
    private app:AppComponent) { }

  CategoryList:Category[]=[];
  category:any=[];
  ModalTitle:string="";
  ActivateAddEditMenuComp:boolean=false;
  isVisible:boolean = false;
  isOkLoading = false;
  menuList:any=[];  

  ngOnInit(): void {
    this.showList();
    this.Form = this.fb.group({
      id:[null],
      Category_name:[null,[Validators.required]],
      isActive:[null],
      cat_id:[null]
    })
  }

  showModal():void{
    this.isVisible = true;

  }
  
  showList(){
    // debugger
    this.service.getCategoryList().subscribe(data=>{
      this.CategoryList = data;
      this.category=data
      console.log(data);
    });
    
  }

  menu(){
    this.service.getMenuList().subscribe(z=>{
      this.menuList = z;
    })
  }


  refreshList(){
    this.service.getCategoryList().subscribe(data=>{
      this.CategoryList = data;
    })
  }
  //Modal activation button Actions

  addClick(){
    this.Form.get('Category_name')?.setValue('');
    this.Form.get('isActive')?.setValue(true);
    this.ModalTitle="Add Category";
    this.category={Sid:0};
    this.isVisible = true;
    console.log(this.Form);
  }

  editClick( data : any){
    this.ModalTitle="Edit Category";
    this.Form.get('cat_id')?.setValue(data.category_Id);
    this.Form.get('id')?.setValue(data.id);
    this.Form.get('Category_name')?.setValue(data.category_Name);
    this.Form.get('isActive')?.setValue(data.isActive);
    console.log(this.Form.value)
  }

  closeClick(){
    this.refreshList();
    this.isVisible = false;
    this.ActivateAddEditMenuComp = false;
  }

  //value change addition||edit||deletion of data
  addCategory(){
    debugger
    if(this.Form.valid){
      this.service.addCategory(this.Form.value).subscribe(res=>{
        if (res.toString()=="false"){
          this.message.error('Category already exist');
        }
        else{
          this.message.success('Category has been added');  
        }
      })
      this.closeClick();
    }
    else{
      Object.values(this.Form.controls).forEach(control=>{
        if (control.invalid){
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf:true});
        }
      })
    }
  }

  editCategory(){
    console.log(this.Form.value)
    this.service.updateCategory(this.Form.value).subscribe(res=>{
      this.message.success("Category edited");
    })
    this.closeClick();
  }


  deleteClick(item: { id: any; }){
    
    
    this.service.deleteCategory(item.id).subscribe(data=>{
      if(data.toString()=="false"){
        this.message.error('Cataegory cannot be deleted due to it being in use');
      }
      else{
        this.message.error('Category deleted');
        this.refreshList();
      }
      
    })
    
  }
}
