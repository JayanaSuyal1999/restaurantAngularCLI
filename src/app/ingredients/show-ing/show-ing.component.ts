import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-show-ing',
  templateUrl: './show-ing.component.html',
  styleUrls: ['./show-ing.component.css']
})
export class ShowIngComponent implements OnInit {
  form !: FormGroup;
  ID !:Guid;

  constructor(private service:SharedService,
    private message:NzMessageService,
    private fb:FormBuilder,
    private app:AppComponent) { }

  IngredientList:any=[];
  ModalTitle:string='';
  ing:any=[];
  ActivateAddEditIngComp:boolean=false;
  isVisible:boolean=false;

  
  ngOnInit(): void {
    this.refreshInglist();
    this.form = this.fb.group({
      id:[null,[Validators.required]],
      name : [null,[Validators.required]],
      quantity : [null,[Validators.required]]  
    })
  }
  
  addIngredients(){
    if (this.form.valid){
      this.service.addIngredient(this.form.value).subscribe(res=>{
        this.message.success('Ingredient has been added');
      })
      this.refreshInglist();
      this.closeClick();
    } 
    else{
      Object.values(this.form.controls).forEach(control=>{
        if (control.invalid){
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf:true });
        }
      })
    }
  }

  editIngredients(){
    if (this.form.valid){
      this.service.updateIngredient(this.form.value).subscribe(res=>{
        this.message.success('Ingredient has been edited');
      })
      ;
      this.refreshInglist();
      this.closeClick();
      
    } 
    else{
      Object.values(this.form.controls).forEach(control=>{
        if (control.invalid){
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf:true });
        }
      })
    }

  }
  showModal(){
    this.isVisible=true;
  }
  addClick(){
    this.form.get('id')?.setValue(this.ID);
    this.form.get('name')?.setValue('');    
    this.form.get('quantity')?.setValue('');    
    this.ing={
      sid:0,
    }
    this.ModalTitle = "Add Item";
    this.ActivateAddEditIngComp = true;
  }

  closeClick(){
    this.ActivateAddEditIngComp = false;
    this.isVisible=false;
    this.refreshInglist();
  }
  
  editClick(item :any){
    console.log(item);
    this.form.get('id')?.setValue(item.Id);
    this.form.get('sid')?.setValue(item.Sid);
    this.form.get('name')?.setValue(item.Name);
    this.form.get('quantity')?.setValue(item.Quantity);
    this.ModalTitle = "Edit Item";
    this.ActivateAddEditIngComp = true;
  }

  showInglist(){
    this.IngredientList = this.app.IngredientList;
  }

  refreshInglist(){
    this.service.getIngList().subscribe(res=>{
      this.IngredientList = res;
    })
  }

  deleteClick(item: { Sid: any; }){
    
    this.service.deleteIngredient(item.Sid).subscribe(data=>{
      alert(data.toString());
      
    })
    this.message.error('Ingredient has been deleted');
    this.refreshInglist();
  }
}
