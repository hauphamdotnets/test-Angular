import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeedComponent } from '../component/post/feed/feed.component';
import { HeaderComponent } from 'src/component/header/header.component';
import { PostComponent } from 'src/component/post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
