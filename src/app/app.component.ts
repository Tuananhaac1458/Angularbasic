import { Component,OnInit } from '@angular/core';
import { GetlistService } from './services/getlist.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 demoe;
  constructor(private demo: GetlistService){

 }
ngOnInit(){
  this.demoe = this.demo.Getlist();
}
  
}
