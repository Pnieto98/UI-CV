import { Component, OnInit } from '@angular/core';
import { sidebarElements } from './sidebar-elements';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  elementCenter: any;
  elementRight: any;
  
  constructor() {
   }

  ngOnInit(): void {
    this.elementCenter = sidebarElements.filter(sidebar =>  sidebar.posicion == "center");
    this.elementRight   = sidebarElements.filter(sidebar => sidebar.posicion == "right");
  }
  routing(): void {
    console.log("hola");
  }

}
