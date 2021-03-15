import { Component, OnInit, Input } from '@angular/core';
import {Dirent} from '../../models/Dirent';

@Component({
  selector: 'app-dirent-item',
  templateUrl: './dirent-item.component.html',
  styleUrls: ['./dirent-item.component.css']
})
export class DirentItemComponent implements OnInit {

 @Input() dirent: Dirent; 

  constructor() { }

  ngOnInit(): void {
  }
  //dynamically ading classes
  setClass(){
    let classes={
      path: this.dirent.isDirectory,
      info: true
    }
    return classes;
  }
  //method caled on click event
 onClick(dirent){
   console.log('dirent used')
 }
}
