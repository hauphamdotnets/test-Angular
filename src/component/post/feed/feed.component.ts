import { Component, Input, OnInit } from '@angular/core';
import { PostComponent } from '../post.component';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('dataP') tt  = [] 
testT=[]
   // decorate the property with @Input()
  constructor(private dataS:DataService) { }

  ngOnInit(): void {
   
  }
testData(){
  console.log(this.tt)
}

}
