import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-Angular';
  dataPost:string =""
  
  constructor(private data: DataService){}
  ngOnInit(): void {
   console.log("hello")
   

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  
getData(value:string){
this.dataPost = value;
}
 

}

