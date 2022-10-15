import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FeedComponent } from './feed/feed.component';
import { DataService } from 'src/data.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  Counter = 5;
  dataPost:any=[]
  testTest: string ='';
  messenger ="";
  searchText=""
 
 
  
  
  
  ngOnInit(): void {
    
  }

  postHandle(){
    if(this.testTest ===""){
      this.messenger="Bạn chưa nhập trạng thái"
    }else{
      this.dataPost.push(this.testTest)
      this.testTest =""
      this.messenger=""
      console.log(this.dataPost)
    }
    
   
   
    
   
  }

  
}
