import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ShowIngComponent } from '../show-ing/show-ing.component';
@Component({
  selector: 'app-add-edit-ing',
  templateUrl: './add-edit-ing.component.html',
  styleUrls: ['./add-edit-ing.component.css']
})
export class AddEditIngComponent implements OnInit {

  constructor(private service:SharedService,
      private show:ShowIngComponent
    ) { }

  @Input() ing:any;


  ngOnInit(): void {
    
  }


}
