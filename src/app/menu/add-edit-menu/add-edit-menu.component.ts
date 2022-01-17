import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ShowMenuComponent } from '../show-menu/show-menu.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormGroup,FormBuilder,FormControl, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-edit-menu',
  templateUrl:'./add-edit-menu.component.html',
  styleUrls: ['./add-edit-menu.component.css']
})
export class AddEditMenuComponent implements OnInit {

  validateForm!: FormGroup;


  @Input()menu:any;

  constructor(private service:SharedService,
    private show:ShowMenuComponent,
    private message:NzMessageService,
    private builder:FormBuilder) { }

  ngOnInit(): void {
  }
}
