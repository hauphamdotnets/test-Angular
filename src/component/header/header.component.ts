import { Component, OnInit,Input } from '@angular/core';
import { range, filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('dataP') tt  = [] 
  searchText =''
   
 
  constructor() { }

  ngOnInit(): void {
  }

  
}
