import { Component, OnInit, Input } from '@angular/core';
import {Dirent} from '../../models/Dirent';
import {DirentService} from '../../services/dirent.service';
import {DirentComponent} from '../../components/dirent/dirent.component';


@Component({
  selector: 'app-dirent-item',
  templateUrl: './dirent-item.component.html',
  styleUrls: ['./dirent-item.component.css']
})
export class DirentItemComponent implements OnInit {

 @Input() dirent: Dirent; 

  constructor(private ds:DirentService, private dc:DirentComponent) { }

  ngOnInit(): void {
  }

  //dynamically adding classes
  setClass(){
    let classes={
      path: this.dirent.isDirectory,
      info: true
    }
    return classes;
  }

  //method called on click event
  onClick(dirent){
    this.ds.getSubfolder(dirent).subscribe(dirents=>{
      this.dc.changeDirent(dirents)
    });
  }
}
