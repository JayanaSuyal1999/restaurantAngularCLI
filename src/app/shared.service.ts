import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44358/api";


  constructor(private http:HttpClient) { }

  getIngList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Ingredients');
  }

  addIngredient(val:any){
    
    return this.http.post(this.APIUrl+'/Ingredients',val);
  }
  
  updateIngredient(val:any){
    return this.http.put(this.APIUrl+'/Ingredients',val);
  }

  deleteIngredient(val:any){
    return this.http.delete(this.APIUrl+'/Ingredients/'+val);
  }

  getMenuList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Menu');
  }

  addMenu(val:any){
    return this.http.post(this.APIUrl+'/Menu',val);
  }

  updateMenu(val:any){
    return this.http.put(this.APIUrl+'/Menu',val);
  }

  deleteMenu(val:any){
    return this.http.delete(this.APIUrl+'/Menu/'+val);
  }

  getCategoryList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Category');
  }

  addCategory(val:any){
    return this.http.post(this.APIUrl+'/Category',val);
  }

  updateCategory(val:any){
    return this.http.put(this.APIUrl+'/Category',val);
  }

  deleteCategory(val:any){
    return this.http.delete(this.APIUrl+'/Category/'+val);
  }

}
