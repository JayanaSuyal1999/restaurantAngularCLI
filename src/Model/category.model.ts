import { Guid } from "guid-typescript";

export class Category{
    public id :Guid;
    public category_Name:string;
    public category_Id:number;
    public isActive:boolean;

    constructor(Id:Guid,Category_Name:string,Category_Id:number,IsActive:boolean){
        this.category_Id=Category_Id;
        this.category_Name=Category_Name;
        this.id=Id;
        this.isActive=IsActive;
    }
}