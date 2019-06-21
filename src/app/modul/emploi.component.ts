import {Component,OnInit} from '@angular/core';
import { GetlistService } from '../services/getlist.service';


@Component({
    selector:'emploi-list',
    templateUrl:'./emploi.component.html'
})
export class Emploi implements OnInit {
    list: any[];
    constructor(private emloi : GetlistService){

    };
    ngOnInit(){
        this.list = this.emloi.Getlist();
    }
  
}